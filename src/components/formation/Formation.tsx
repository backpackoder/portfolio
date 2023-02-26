import { FORMATION_REACT_MASTERY_IMAGE } from "../../commons/commons";
import { openNewTab } from "../../hooks/openNewTab";
import { formationData } from "../../utils/formationData";

export function Formation() {
  return (
    <>
      <div>
        <h3>En autodidacte</h3>
        <p>J'ai appris le HTML, le CSS et le JavaScript en autodidacte grâce à de super sites.</p>
      </div>
      <FormationList />
    </>
  );
}

function FormationList() {
  return (
    <>
      {formationData.map((formation, index) => {
        return (
          <div key={index}>
            <h3>{formation.title}</h3>
            <small>{formation.year}</small>
            <img
              src={formation.image}
              alt={formation.title}
              className="formationImg"
              onClick={() => openNewTab(formation.link)}
            />
            <p>{formation.description}</p>
          </div>
        );
      })}
    </>
  );
}
