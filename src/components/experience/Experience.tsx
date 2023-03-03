import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

// Hooks
import { getUrl } from "../../hooks/getUrl";
import { Iso } from "../../types/types";

// Utils
import { experienceData } from "../../utils/experienceData";

type ExperienceProps = {
  setExperienceID: (index: number) => void;
};

export function Experience({ setExperienceID }: ExperienceProps) {
  const { language }: { language: Iso } = useContext(AppContext);

  return (
    <article className="experiences">
      {experienceData.map((experience, index) => {
        return (
          <section key={index} className="experience">
            <Link
              to={getUrl(["experience", experience.title.toLowerCase()])}
              onClick={() => setExperienceID(index)}
            >
              <img src={experience.imgs[0]} alt={experience.title} className="banner" />

              <h3>{experience.title}</h3>

              <small>
                {experience.time[language]} - {experience.team[language]}
              </small>
              <small>Type: {experience.type[language]}</small>
              <small>Theme: {experience.theme[language]}</small>
            </Link>
          </section>
        );
      })}
    </article>
  );
}
