import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { AppContext } from "../../AppContext";

// Hooks
import { getUrl } from "../../hooks/getUrl";
import { stringForUrl } from "../../hooks/stringForUrl";

// Types
import { Iso } from "../../types/types";

// Utils
import { experienceData } from "../../utils/experienceData";

// Commons
import { ROUTE_EXPERIENCE_LABEL } from "../../commons/commons";

export function Experiences() {
  const {
    experienceRef,
    language,
  }: { experienceRef: React.RefObject<HTMLDivElement>; language: Iso } = useContext(AppContext);

  return (
    <>
      <article ref={experienceRef} className="experiences">
        <h2>🏆 {ROUTE_EXPERIENCE_LABEL[language]}</h2>
        <section>
          {experienceData.map((experience, index) => {
            return (
              <div key={index} className="item">
                <Link key={index} to={getUrl(["experience", stringForUrl(experience.title)])}>
                  <span>
                    <img src={experience.imgs[0]} alt={experience.title} className="banner" />

                    <h3>{experience.title}</h3>
                  </span>
                  <ul>
                    <li>{experience.team[language]}</li>
                    <li>{experience.type[language]}</li>
                    <li>{experience.theme[language]}</li>
                  </ul>
                </Link>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
}
