// Hooks
import { openNewTab } from "../../hooks/openNewTab";

// Utils
import { experienceData } from "../../utils/experienceData";

export function Experience() {
  return (
    <article className="experiences">
      {experienceData.map((experience, index) => {
        return (
          <section key={index} className="experience">
            <span className="titleAndTime">
              <h3>{experience.title}</h3>
              <small>
                {experience.time} - {experience.team}
              </small>
            </span>

            <img
              src={experience.imgs[0]}
              alt={experience.title}
              className="formationImg"
              onClick={() => openNewTab(experience.url)}
            />

            <span className="links">
              <a href={experience.url} target="_blank">
                Lien du site
              </a>
              <a href={experience.gitHub} target="_blank">
                Lien du GitHub
              </a>
            </span>

            <div className="translated">
              <small>Traduit en: </small>
              {experience.translation.map((langage) => {
                return <img src={`https://flagcdn.com/${langage.iso}.svg`} alt={langage.langage} />;
              })}
            </div>
            <small>Type: {experience.type}</small>
            <small>Theme: {experience.theme}</small>
            <small>
              Stack:{" "}
              {experience.stack.map((stack, index) => {
                return (
                  <span key={stack}>
                    {stack}
                    {index < experience.stack.length - 1 ? ", " : "."}
                  </span>
                );
              })}
            </small>
            <small>
              Competences:{" "}
              {experience.details.map((detail, index) => {
                return (
                  <span key={detail}>
                    {detail}
                    {index < experience.details.length - 1 ? ", " : "."}
                  </span>
                );
              })}
            </small>
            <p>{experience.description}</p>
            <p>Voir les photos</p>
          </section>
        );
      })}
    </article>
  );
}
