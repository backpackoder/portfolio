"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useAppContext } from "@/app/context/AppProvider";

// Types
import { Iso } from "../types/types";

// Utils
import { parts } from "../utils/parts";
import { languageBtn } from "../utils/languageBtns";

// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
  PARTS,
  ROUTES,
} from "../commons/commons";

export function Header() {
  const pathname = usePathname();

  const { language } = useAppContext();
  const [open, setOpen] = useState(false);

  const [actualObservedPart, setActualObservedPart] = useState<HTMLElement | { id: string } | null>(
    null
  );
  console.log("actualObservedPart", actualObservedPart?.id);

  const isHomePage = pathname === ROUTES.HOME;

  const handlePartsObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActualObservedPart(entry.target as HTMLElement);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handlePartsObserver, { threshold: 0 });

    const interviewElement = document.querySelector(`#${PARTS.INTERVIEW.ID}`) as HTMLElement;
    const experiencesElement = document.querySelector(`#${PARTS.EXPERIENCES.ID}`) as HTMLElement;
    const formationElement = document.querySelector(`#${PARTS.FORMATION.ID}`) as HTMLElement;
    const formElement = document.querySelector(`#${PARTS.FORM.ID}`) as HTMLElement;
    const elements = [interviewElement, experiencesElement, formationElement, formElement];

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [handlePartsObserver]);

  return (
    <header
      className="fixed flex text-lg z-10 animation upToDownHeader
    sm:w-full sm:bg-[rgb(10,10,125)] sm:text-white"
    >
      <nav
        className={`${
          open ? "translate-x-0" : "-translate-x-[calc(100%-50px)]"
        } flex w-full text-white text-center duration-500
        sm:translate-x-0 sm:justify-center`}
      >
        <ul className="flex flex-col justify-center w-full bg-[rgb(10,10,125)] rounded-br-lg sm:flex-row">
          {parts.map((part, index) => {
            const isPartObserving = actualObservedPart?.id === part.id;

            function goToPart() {
              setOpen(false);
              setActualObservedPart({ id: part.id });
            }

            return (
              <li
                key={index}
                className={`flex items-center cursor-pointer p-3 hover:bg-[rgb(5,5,100)] ${
                  isPartObserving ? "bg-[rgb(5,5,100)] transition duration-500" : ""
                }`}
              >
                <Link
                  href={isHomePage ? `#${part.id}` : `${ROUTES.HOME}#${part.id}`}
                  className={`flex items-center h-full ${
                    isPartObserving ? "text-[gold]" : "text-[rgba(255,255,255,0.85)]"
                  } px-2 hover:text-white`}
                  onClick={() => goToPart()}
                >
                  {part.name[language]}
                </Link>
              </li>
            );
          })}
          <li>
            <ChangeLanguage setOpen={setOpen} />
          </li>
        </ul>

        <div
          className={` top-0 left-0 flex flex-col align-center justify-between w[50px] h-[50px] aspect-square
          bg-[rgb(10,10,125)] p-2 rounded-e-lg duration-500
          sm:hidden`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-1 w-full rounded-lg bg-white"></span>
          <span className="block h-1 w-full rounded-lg bg-white"></span>
          <span className="block h-1 w-full rounded-lg bg-white"></span>
        </div>
      </nav>
    </header>
  );
}

function ChangeLanguage({ setOpen }: { setOpen: (open: boolean) => void }) {
  const { language, changeLanguage } = useAppContext();

  const [openLanguageList, setOpenLanguageList] = useState(false);

  function handleLanguage(language: Iso) {
    changeLanguage(language);
    setOpenLanguageList(!openLanguageList);
    setOpen(false);
  }

  const FLAG_FOR_ACTUAL_LANGUAGE = useMemo(() => {
    switch (language) {
      default:
        return <FLAG_FR_HTMLElement width={50} height={30} />;
      case "en":
        return <FLAG_EN_HTMLElement width={50} height={30} />;
      case "es":
        return <FLAG_ES_HTMLElement width={50} height={30} />;
    }
  }, [language]);

  return (
    <div className="relative">
      <button
        className="flex bg-transparent border-none my-2 mx-auto cursor-pointer"
        onClick={() => setOpenLanguageList(!openLanguageList)}
      >
        {FLAG_FOR_ACTUAL_LANGUAGE}
      </button>

      <div
        className={`absolute top-[calc(100%)] ${
          openLanguageList ? "flex flex-col" : "hidden"
        } w-full`}
      >
        {languageBtn.map((btn) => {
          return (
            btn.language !== language && (
              <button
                key={btn.language}
                className="bg-[rgba(7,7,148,0.75)] p-2 border-none mx-auto cursor-pointer"
                onClick={() => handleLanguage(btn.language)}
              >
                {btn.flag}
              </button>
            )
          );
        })}
      </div>
    </div>
  );
}
