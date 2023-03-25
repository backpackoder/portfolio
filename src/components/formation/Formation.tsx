import { useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Types
import { AppProviderContextTypes } from "../../types/types";

// Hooks
import { openNewTab } from "../../hooks/openNewTab";

// Commons
import { ROUTE_FORMATION_LABEL } from "../../commons/commons";

// Utils
import { formationData } from "../../utils/formationData";

export function Formation() {
  const { formationRef, language, text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <article ref={formationRef} className="formations">
      <h2>🎓 {ROUTE_FORMATION_LABEL[language]}</h2>
      {formationData.map((formation, index) => {
        const { introduction, content, conclusion } = formationData[index].description;

        return (
          <section key={index} className="formation">
            <h3>{formation.title}</h3>
            <small>
              {text("yearOfLearning")}: {formation.time} |{" "}
              <a href={formation.url} target="_blank">
                {text("formationLink")}
              </a>
            </small>
            <img
              src={formation.image}
              alt={formation.title}
              className="formationImg"
              onClick={() => openNewTab(formation.url)}
            />
            <p dangerouslySetInnerHTML={{ __html: introduction }}></p>
            <br />
            {formation.url !== "" && <p className="part">{text("whatDidWeLearned")}:</p>}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <br />
            {formation.url !== "" && <p className="part">{text("conclusion")}:</p>}
            <p dangerouslySetInnerHTML={{ __html: conclusion }}></p>
          </section>
        );
      })}
    </article>
  );
}
