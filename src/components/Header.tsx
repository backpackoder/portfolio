import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { AppContext } from "../AppContext";

// Commons
import { FLAG_EN_HTMLElement, FLAG_ES_HTMLElement, FLAG_FR_HTMLElement } from "../commons/commons";

// Utils
import { parts } from "../utils/parts";
import { languageBtn } from "../utils/languageBtns";

// Types
import { AppProviderContextTypes, Iso, Part } from "../types/types";

export function Header() {
  const navigate = useNavigate();
  const { refList, language }: AppProviderContextTypes = useContext(AppContext);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const index = parts.findIndex((part) => part.route === location.pathname);
    setActiveIndex(index);
  }, [location.pathname]);

  function scrollToSection(sectionRef: React.RefObject<HTMLDivElement>) {
    setTimeout(() => {
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  function changePart(route: string, ref: React.MutableRefObject<null>) {
    navigate(route);
    scrollToSection(ref);
  }

  return (
    <header>
      <nav>
        <ul className="parts">
          {parts.map((part: Part, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                ref={refList[index]}
                key={index}
                className={isActive ? "active" : ""}
                onClick={() => changePart(part.route, refList[index])}
              >
                {part.name[language]}
              </li>
            );
          })}
          <li>
            <ChangeLanguage />
          </li>
        </ul>
      </nav>
    </header>
  );
}

function ChangeLanguage() {
  const { language, changeLanguage } = useContext(AppContext);

  const [openLanguageList, setOpenLanguageList] = useState(false);

  function handleLanguage(language: Iso) {
    changeLanguage(language);
    setOpenLanguageList(!openLanguageList);
  }

  const FLAG_FOR_ACTUAL_LANGUAGE = useMemo(() => {
    switch (language) {
      default:
        return FLAG_FR_HTMLElement(50, 30);
      case "en":
        return FLAG_EN_HTMLElement(50, 30);
      case "es":
        return FLAG_ES_HTMLElement(50, 30);
    }
  }, [language]);

  return (
    <div className="changeLanguage">
      <button className="changeLanguageBtn" onClick={() => setOpenLanguageList(!openLanguageList)}>
        {FLAG_FOR_ACTUAL_LANGUAGE}
      </button>
      <div className={`openLanguage ${openLanguageList ? "active" : "inactive"}`}>
        {languageBtn.map((btn) => {
          return (
            <button key={btn.language} onClick={() => handleLanguage(btn.language)}>
              {btn.flag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
