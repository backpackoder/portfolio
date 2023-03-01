// Hooks
import { openNewTab } from "../../hooks/openNewTab";

// Utils
import { experienceData } from "../../utils/experienceData";

type ExperienceDetailledProps = {
  experienceID: number;
};

export function ExperienceDetailled({ experienceID }: ExperienceDetailledProps) {
  const data = experienceData[experienceID];

  return (
    <>
      <section key={data.title} className="experienceDetailled">
        <span className="titleAndTime">
          <h3>{data.title}</h3>
          <small>
            {data.time} - {data.team}
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
          {data.translation.map((langage) => {
            return (
              <img
                key={langage.iso}
                src={`https://flagcdn.com/${langage.iso}.svg`}
                alt={langage.langage}
              />
            );
          })}
        </div>
        <small>Type: {data.type}</small>
        <small>Theme: {data.theme}</small>
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
          Competences:{" "}
          {data.details.map((detail, index) => {
            return (
              <span key={detail}>
                {detail}
                {index < data.details.length - 1 ? ", " : "."}
              </span>
            );
          })}
        </small>
        <p>{data.description}</p>
        <p>Voir les photos</p>
      </section>
      );
    </>
  );
}
