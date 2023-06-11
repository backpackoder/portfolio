"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useAppContext } from "@/app/context/AppProvider";

// Hooks
import { stringForUrl } from "@/hooks/stringForUrl";
import { openNewTab } from "@/hooks/openNewTab";

// Utils
import { formationData } from "@/utils/formationData";

// Commons
import { PARTS } from "@/commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";
import { PropertyItem } from "@/components/PropertyItem";

export default function Formation({ params }: { params: { formation: string } }) {
  const { language, text } = useAppContext();

  const formationIndex = formationData.findIndex(
    (formation) => stringForUrl(formation.title.en) === params.formation
  );

  const data = formationData[formationIndex];

  if (!data) {
    notFound();
  }

  return (
    <article
      id={PARTS.FORMATION.ID}
      className={`${styles.article} flex flex-col items-center gap-4 bg-gray-200 px-10 pb-8`}
    >
      <h2 className={styles.titles.h2}>{data.title[language]}</h2>

      <div className="w-600 max-w-[calc(100vw-40px)] max-h-[65vh] overflow-hidden rounded-2xl shadow-md">
        <Image
          src={data.image}
          alt={data.title[language]}
          width={600}
          height={600}
          className="object-cover object-top w-full cursor-pointer"
          onClick={() => openNewTab(data.url)}
        />
      </div>

      <small className="block">
        {text("yearOfLearning")}: {data.time[language]} |{" "}
        <a href={data.url} target="_blank" className="text-blue-700 underline">
          {text("formationLink")}
        </a>
      </small>

      <PropertyItem
        title={"studiedStacks"}
        data={data.stack.map((stack) => {
          return <Image key={stack} src={stack} alt={stack} width={35} height={35} />;
        })}
      />

      <div className="bg-slate-200">
        <p
          dangerouslySetInnerHTML={{ __html: data.description.introduction[language] }}
          className="text-left leading-8"
        ></p>
        <br />
        {data.url !== "" && (
          <p className="font-semibold text-left leading-8">{text("whatDidWeLearned")}:</p>
        )}
        <p
          dangerouslySetInnerHTML={{ __html: data.description.content[language] }}
          className="text-left leading-8"
        ></p>
        <br />
        {data.url !== "" && (
          <p className="font-semibold text-left leading-8">{text("conclusion")}:</p>
        )}
        <p
          dangerouslySetInnerHTML={{ __html: data.description.conclusion[language] }}
          className="text-left leading-8"
        ></p>
      </div>
    </article>
  );
}
