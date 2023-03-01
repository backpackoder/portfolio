// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBowlFood,
  faCode,
  faGamepad,
  faPlane,
  faSkiing,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

// Utils
import { myStacks } from "../../utils/myStacks";

// Components
import { AskMe } from "../AskMe";
import { ContactsList } from "../Contacts";

export function Presentation() {
  return (
    <article className="presentation">
      <AskMe />
      <Contacts />
      <Stacks />
      <Description />
      <Skills />
      <Langages />
      <Hobbies />
    </article>
  );
}

export function Contacts() {
  return (
    <section className="contacts">
      <h2>🌐 Mes réseaux</h2>
      <ContactsList contactList="presentation" />
    </section>
  );
}

function Stacks() {
  return (
    <section className="stacks">
      <h2>🛠️ Mes stacks</h2>
      <ul className="mySkills-list">
        {myStacks.map((stack) => {
          return (
            <li key={stack.name}>
              <img src={stack.img} />
              <p>{stack.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Description() {
  return (
    <section className="description">
      <h2>📖 Informations</h2>
      <p>
        Je serais ravi de vous aider dès que possible dans vos projets en intégrant votre équipe en
        tant que dev frontend React.js - TypeScript.
        <br />
        Je suis capable de créer des sites sur mesure avec un résultat responsive pour tout écran,
        gérer des données venant d'API, comme plein d'autres choses. Je peux aussi effectuer des
        tests avec la méthode TDD pour un code de qualité.
        <br />
        <br />
        🔹🔹🔹
        <br />
        <br />
        👔 MON ETHIQUE DE TRAVAIL :<br />
        Je suis une personne méticuleuse qui aime le travail bien fait. Je choisis des projets qui
        allument une flamme en moi et qui me font travailler sans voir les heures passer, car le
        plus important, c'est le projet. Mon but est de dépasser vos attentes pour vous satisfaire
        au maximum.
        <br />
        <br />
        - Le travail en équipe : Aimant les sports collectifs, je suis conscient de l'importance de
        créer un groupe soudé, qui se respecte mutuellement et surtout qui communique un maximum
        afin que les objectifs puissent se réaliser le plus facilement et rapidement possible. Je me
        rends disponible à tout moment si un membre de l'équipe en a besoin.
        <br />
        <br />
        🔹🔹🔹
        <br />
        <br />
        👨‍🚀 À PROPOS DE MOI :<br />
        Passionné de programmation, j'ai commencé mon activité professionnelle en 2022 en tant que
        développeur web front end avec React.js ⚛️. Je peux travailler en remote comme en
        présentiel. J'habite près de Nice sur la côte d'azur. Le français est ma langue maternelle.
        Je parle aussi l'anglais, ainsi que couramment l'espagnol car j'ai vécu au Mexique pendant 3
        ans.
        <br />
        <br />
        🔹🔹🔹
        <br />
        <br />
        🛠️ MES OUTILS & COMPÉTENCES :<br />
        🗣️ Langages humains : français, anglais, espagnol
        <br />
        👨‍💻 Langages informatiques : Typescript, Javascript, HTML5, CSS3
        <br />
        🧰 Framework / Library : React.js
        <br />
        👨‍🔬 Tests : méthode TDD, Jest, React Testing Library, MSW...
        <br />
        📞 Communication : Zoom, Slack, Skype, Discord…
        <br />
        <br />
        🔹🔹🔹
        <br />
        <br />
        Je suis ravi que vous m'ayez lu jusqu'ici. J'espère avoir de vos nouvelles et je vous
        souhaite une excellente journée.
        <br />
        <br />
        Thibaut Barbiera, développeur web front-end.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <h2>🏆 Mes compétences</h2>
    </section>
  );
}

function Langages() {
  return (
    <section className="langages">
      <h2>🗣️ Langues maîtrisées</h2>
      <ul className="langages-list">
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
    </section>
  );
}

function Hobbies() {
  return (
    <section className="hobbies">
      <h2>🔥 Mes passions</h2>
      <ul className="hobbies-list">
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
        <li>
          <FontAwesomeIcon icon={faSkiing} size="lg" width="50" /> Faire du ski
        </li>
        <li>
          <FontAwesomeIcon icon={faBowlFood} size="lg" width="50" /> Goûter des plats typiques
        </li>
      </ul>
    </section>
  );
}
