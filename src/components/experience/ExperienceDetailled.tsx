import { Fragment, useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Hooks
import { openNewTab } from "../../hooks/openNewTab";

// Utils
import { experienceData } from "../../utils/experienceData";

// Types
import { Iso } from "../../types/types";

type ExperienceDetailledProps = {
  experienceID: number;
};

export function ExperienceDetailled({ experienceID }: ExperienceDetailledProps) {
  const { language }: { language: Iso } = useContext(AppContext);

  const data = experienceData[experienceID];

  return (
    <>
      <section key={data.title} className="experienceDetailled">
        <p>AAAAAAAAAAAA</p>
        <span className="titleAndTime">
          <h3>{data.title}</h3>
          <small>
            {data.time[language]} - {data.team[language]}
          </small>
        </span>

        <img
          src={data.imgs[0]}
          alt={data.title}
          className="formationImg"
          onClick={() => openNewTab(data.url)}
        />

        <span className="links">
          <a href={data.url} target="_blank">
            Lien du site
          </a>
          <a href={data.gitHub} target="_blank">
            Lien du GitHub
          </a>
        </span>

        <div className="translated">
          <small>Traduit en: </small>
          {data.translation.map((translation) => {
            return (
              <Fragment key={translation.iso}>
                <img
                  src={`https://flagcdn.com/${translation.iso}.svg`}
                  alt={translation.translation[language]}
                />
                <small>{translation.translation[language]}</small>
              </Fragment>
            );
          })}
        </div>

        <small>Type: {data.type[language]}</small>

        <small>Theme: {data.theme[language]}</small>

        <small>
          Stack:{" "}
          {data.stack.map((stack, index) => {
            return (
              <span key={stack}>
                {stack}
                {index < data.stack.length - 1 ? ", " : "."}
              </span>
            );
          })}
        </small>

        <small>
          Compétences:{" "}
          {data.details.map((detail, index) => {
            return (
              <span key={detail}>
                {detail}
                {index < data.details.length - 1 ? ", " : "."}
              </span>
            );
          })}
        </small>

        <p>{data.description[language]}</p>
        <p>Voir les photos</p>
      </section>
    </>
  );
}
