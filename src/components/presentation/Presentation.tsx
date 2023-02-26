// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faGamepad,
  faPlane,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

// Utils
import { myContacts } from "../../utils/contact";

// Components
import { Stacks } from "../Stacks";

export function Presentation() {
  return (
    <section className="presentation">
      {myContacts}
      <img src="src/assets/img/profil2.jpg" className="myFace" />

      <Stacks />
      <Skills />
      <Langages />
      <Hobbies />
    </section>
  );
}

function Skills() {
  return (
    <>
      <h3>Mes compétences</h3>
    </>
  );
}

function Langages() {
  return (
    <>
      <h3>Langues</h3>
      <ul className="langages">
        <li>
          <img src="https://flagcdn.com/fr.svg" width="25" height="15" alt="Français" />
          français
        </li>
        <li>
          <img src="https://flagcdn.com/gb.svg" width="25" height="15" alt="Anglais" />
          anglais
        </li>
        <li>
          <img src="https://flagcdn.com/es.svg" width="25" height="15" alt="Espagnol" />
          espagnol
        </li>
      </ul>
    </>
  );
}

function Hobbies() {
  return (
    <>
      <h3>Mes passions</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPlane} size="lg" width="50" /> Partir en voyage
        </li>
        <li>
          <FontAwesomeIcon icon={faSoccerBall} size="lg" width="50" /> Jouer au football
        </li>
        <li>
          <FontAwesomeIcon icon={faGamepad} size="lg" width="50" /> Jouer aux jeux vidéos
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} size="lg" width="50" /> Programmer
        </li>
        <li>
          <FontAwesomeIcon icon={faBook} size="lg" width="50" /> Apprendre de nouvelles choses
        </li>
      </ul>
    </>
  );
}
