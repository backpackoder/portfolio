// Hooks
import { openNewTab } from "../../hooks/openNewTab";

// Utils
import { formationData } from "../../utils/formationData";

export function Formation() {
  return (
    <article className="formations">
      {formationData.map((formation, index) => {
        const { introduction } = formationData[index].description;
        const { content } = formationData[index].description;
        const { conclusion } = formationData[index].description;

        return (
          <section key={index} className="formation">
            <h3>{formation.title}</h3>
            <small>Date: {formation.time}</small>
            <img
              src={formation.image}
              alt={formation.title}
              className="formationImg"
              onClick={() => openNewTab(formation.url)}
            />
            <p dangerouslySetInnerHTML={{ __html: introduction }}></p>
            <br />
            {formation.url !== "" && <h4>Ce que nous avons appris:</h4>}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <br />
            {formation.url !== "" && <h4>Pour conclure:</h4>}
            <p dangerouslySetInnerHTML={{ __html: conclusion }}></p>
          </section>
        );
      })}
    </article>
  );
}
