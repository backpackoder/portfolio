import { openNewTab } from "../../hooks/openNewTab";
import { experienceData } from "../../utils/experienceData";

export function Experience() {
  return (
    <>
      {experienceData.map((experience, index) => {
        return (
          <div key={index} className="experience">
            <h3>{experience.title}</h3>
            <small>{experience.time}</small>
            <small>{experience.team}</small>

            <span className="links">
              <a href={experience.adress}>Lien du site</a>
              <a href={experience.gitHub}>Lien du GitHub</a>
            </span>

            <img
              src={experience.imgs[0]}
              alt={experience.title}
              className="formationImg"
              onClick={() => openNewTab(experience.adress)}
            />

            <small>{experience.type}</small>
            <small>{experience.theme}</small>
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
          </div>
        );
      })}
    </>
  );
}
