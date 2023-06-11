"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useAppContext } from "@/app/context/AppProvider";
import { Fragment } from "react";

// Components
import { PropertyItem } from "@/components/PropertyItem";

// Types
import { ExperienceProps } from "@/types/types";

// Hooks
import { stringForUrl } from "@/hooks/stringForUrl";
import { openNewTab } from "@/hooks/openNewTab";

// Utils
import { experienceData } from "@/utils/experienceData";

// Commons
import { PARTS } from "@/commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

export default function Experience({ params }: { params: { experience: string } }) {
  const { language, text } = useAppContext();

  const experienceIndex = experienceData.findIndex(
    (experience) => stringForUrl(experience.title) === params.experience
  );
  const data = experienceData[experienceIndex];

  if (!data) {
    notFound();
  }

  return (
    <article
      key={data.title}
      id={PARTS.EXPERIENCE.ID}
      className={`${styles.article} flex flex-col items-center gap-4 bg-gray-200 px-10 pb-8`}
    >
      <h2 className={styles.titles.h2}>{data.title}</h2>

      <span>
        {data.time[language]} - {data.team[language]}
      </span>

      <div className="w-600 max-w-[calc(100vw-40px)] max-h-[65vh] overflow-hidden rounded-2xl shadow-md">
        <Image
          src={`/${data.imgs[0]}`}
          alt={data.title}
          width={500}
          height={500}
          className="object-cover object-top w-full cursor-pointer"
          onClick={() => openNewTab(data.url)}
        />
      </div>

      <Buttons data={data} />

      <Properties data={data} />

      <p className="w-full max-w-90 bg-[rgba(219,222,255,0.35)] max-w-90 leading-7 py-2 px-4 shadow-md rounded-lg">
        {data.description[language]}
      </p>
    </article>
  );
}

function Buttons({ data }: { data: ExperienceProps }) {
  const { text } = useAppContext();

  const anchorStyle =
    "flex items-center justify-center bg-blue-200 text-center py-3 px-4 rounded-md duration-200 hover:bg-blue-300";

  return (
    <div className="flex justify-center gap-8 w-full">
      <a href={data.url} target="_blank" className={anchorStyle}>
        {text("websiteLink")}
      </a>
      <a href={data.gitHub} target="_blank" className={anchorStyle}>
        {text("gitHubLink")}
      </a>
    </div>
  );
}

function Properties({ data }: { data: ExperienceProps }) {
  const { language } = useAppContext();

  return (
    <div className="grid repeat-fit-180px grid-cols-[repeat(auto-fit,_180px)] justify-items-center justify-center gap-10 w-full">
      <PropertyItem title="type" data={data.type[language]} />
      <PropertyItem title="theme" data={data.theme[language]} />
      <PropertyItem
        title="stack"
        data={data.stack.map((stack) => {
          return <Image key={stack} src={stack} alt={stack} width={35} height={35} />;
        })}
      />
      <PropertyItem
        title="skills"
        data={data.details.map((detail) => {
          return (
            <Fragment key={detail}>
              {detail}
              <br />
            </Fragment>
          );
        })}
      />
      <PropertyItem
        title="translatedIn"
        data={data.translation.map((translation) => {
          return (
            <span key={translation.iso} className="flex items-center justify-center gap-5">
              <Image
                src={`https://flagcdn.com/${translation.iso}.svg`}
                alt={translation.translation[language]}
                width={35}
                height={35}
              />
              <span className="flex items-center justify-center gap-5">
                {translation.translation[language]}
              </span>
              <br />
            </span>
          );
        })}
      />
    </div>
  );
}
