// Hooks
import { PROJECT_MANGANIME_LINK } from "../../commons/commons";
import { openNewTab } from "../../hooks/openNewTab";

// Utils
import { formationData } from "../../utils/formationData";

export function Formation() {
  return (
    <section className="formation">
      {formationData.map((formation, index) => {
        return (
          <div key={index}>
            <h3>{formation.title}</h3>
            <small>Date: {formation.time}</small>
            <img
              src={formation.image}
              alt={formation.title}
              className="formationImg"
              onClick={() => formation.link !== "" && openNewTab(formation.link)}
            />
            <p dangerouslySetInnerHTML={{ __html: formation.description.introduction }}></p>
            <br />
            {formation.link !== "" && <h4>Ce que nous avons appris:</h4>}
            <p dangerouslySetInnerHTML={{ __html: formation.description.content }}></p>
            <br />
            {formation.link !== "" && <h4>Pour conclure:</h4>}
            <p dangerouslySetInnerHTML={{ __html: formation.description.conclusion }}></p>
          </div>
        );
      })}
    </section>
  );
}
