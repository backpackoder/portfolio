"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppProvider";

// Utils
import { experienceData } from "@/utils/experienceData";

// Hooks
import { stringForUrl } from "@/hooks/stringForUrl";

// Commons
import { PARTS, ROUTES } from "@/commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

export function Experiences() {
  const { language } = useAppContext();

  return (
    <>
      <article id={PARTS.EXPERIENCES.ID} className={`experiences bg-gray-200 ${styles.article}`}>
        <h2 className={styles.titles.h2}>🏆 {PARTS.EXPERIENCE.LABEL[language]}</h2>

        <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_400px))] justify-center gap-10 p-4 mx-auto">
          {experienceData.map((experience, index) => {
            return (
              <Link
                key={index}
                href={`${ROUTES.EXPERIENCE}/${stringForUrl(experience.title)}#experience`}
                className="flex flex-col w-500 max-w-full bg-[rgb(245,245,245)] p-2 rounded-lg
                shadow-xl cursor-pointer"
              >
                <div className="flex flex-col justify-between gap-5 h-full">
                  <Image
                    src={`/${experience.imgs[0]}`}
                    alt={experience.title}
                    width={500}
                    height={500}
                    className="w-full border-2 rounded-lg"
                  />

                  <h3 className={styles.titles.h3}>{experience.title}</h3>

                  <p className="text-[rgba(0,0,0,0.75)] italic">
                    {experience.catchphrase[language]}
                  </p>

                  <ul className="flex flex-wrap justify-center items-center gap-2">
                    <li className="bg-[rgb(205,227,237)] p-2 rounded-lg">
                      {experience.team[language]}
                    </li>
                    <li className="bg-[rgb(205,227,237)] p-2 rounded-lg">
                      {experience.type[language]}
                    </li>
                    <li className="bg-[rgb(205,227,237)] p-2 rounded-lg">
                      {experience.theme[language]}
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </section>
      </article>
    </>
  );
}
