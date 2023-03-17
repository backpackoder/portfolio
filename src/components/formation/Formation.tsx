// Hooks
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { ROUTE_FORMATION_LABEL } from "../../commons/commons";
import { openNewTab } from "../../hooks/openNewTab";
import { Iso } from "../../types/types";

// Utils
import { formationData } from "../../utils/formationData";

export function Formation() {
  const {
    formationRef,
    language,
  }: { formationRef: React.RefObject<HTMLDivElement>; language: Iso } = useContext(AppContext);

  return (
    <article ref={formationRef} className="formations">
      <h2>{ROUTE_FORMATION_LABEL[language]}</h2>
      {formationData.map((formation, index) => {
        const { introduction, content, conclusion } = formationData[index].description;

        return (
          <section key={index} className="formation">
            <h3>{formation.title}</h3>
            <small>
              Année d'apprentissage: {formation.time} |{" "}
              <a href={formation.url} target="_blank">
                Lien vers la formation
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
            {formation.url !== "" && <p className="part">Ce que nous avons appris:</p>}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <br />
            {formation.url !== "" && <p className="part">Pour conclure:</p>}
            <p dangerouslySetInnerHTML={{ __html: conclusion }}></p>
          </section>
        );
      })}
    </article>
  );
}
