"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppProvider";

// Hooks
import { stringForUrl } from "@/hooks/stringForUrl";

// Utils
import { formationData } from "../../utils/formationData";

// Commons
import { PARTS, ROUTES } from "@/commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

export function Formation() {
  const { language } = useAppContext();

  return (
    <article id={PARTS.FORMATION.ID} className={`formations bg-gray-100 ${styles.article}`}>
      <h2 className={styles.titles.h2}>🎓 {PARTS.FORMATION.LABEL[language]}</h2>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_400px))] justify-center gap-10 p-4 mx-auto">
        {formationData.map((formation, index) => {
          return (
            <Link
              key={index}
              href={`${ROUTES.FORMATION}/${stringForUrl(formation.title.en)}#formations`}
              className="flex flex-col w-500 max-w-full bg-[rgb(245,245,245)] p-2 rounded-lg
                shadow-xl cursor-pointer"
            >
              <div className="flex flex-col gap-5 h-full">
                <Image
                  src={formation.image}
                  alt={formation.title[language]}
                  width={500}
                  height={500}
                  className="w-full rounded-lg"
                />

                <h3 className={styles.titles.h3}>{formation.title[language]}</h3>
              </div>
            </Link>
          );
        })}
      </section>
    </article>
  );
}
