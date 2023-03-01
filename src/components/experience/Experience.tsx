import { Link } from "react-router-dom";

// Hooks
import { getUrl } from "../../hooks/getUrl";

// Utils
import { experienceData } from "../../utils/experienceData";

type ExperienceProps = {
  setExperienceID: (index: number) => void;
};

export function Experience({ setExperienceID }: ExperienceProps) {
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
                {experience.time} - {experience.team}
              </small>
              <small>Type: {experience.type}</small>
              <small>Theme: {experience.theme}</small>
            </Link>
          </section>
        );
      })}
    </article>
  );
}
