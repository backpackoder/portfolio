// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
} from "../../commons/commons";

// Utils
import { myStacks } from "../../utils/myStacks";

// Components
import { ContactsList } from "../Contacts";

// Context
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { personality } from "../../utils/personality";
import { Iso } from "../../types/types";
import { hobbies } from "../../utils/hobbies";

export function Presentation() {
  const { language, text } = useContext(AppContext);

  return (
    <article className="presentation">
      <Header text={text} />
      <Stacks text={text} />
      <Description text={text} />
      <Langages text={text} />
      <Hobbies language={language} text={text} />
      <Personality language={language} text={text} />
    </article>
  );
}

function Header({ text }: { text: Function }) {
  return (
    <div className="presentation-header">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

      <ContactsList classNameSuffix={"presentation"} />

      <img src="src/assets/img/profil2.jpg" className="myFace" />

      <button>
        {text("askMe")}
        <br />
        <small>({text("askMeSmall")})</small>
      </button>
    </div>
  );
}

function Stacks({ text }: { text: Function }) {
  return (
    <section className="stacks">
      <h2>{text("stacks")}</h2>

      <ul className="mySkills list">
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

function Description({ text }: { text: Function }) {
  return (
    <section className="description">
      <h2>{text("informations")}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("description") }}></p>
    </section>
  );
}

function Langages({ text }: { text: Function }) {
  return (
    <section className="langages">
      <h2>{text("languages")}</h2>

      <ul className="langages-list">
        <li>
          {FLAG_FR_HTMLElement(25, 15)}
          {text("french")}
        </li>
        <li>
          {FLAG_EN_HTMLElement(25, 15)}
          {text("english")}
        </li>
        <li>
          {FLAG_ES_HTMLElement(25, 15)}
          {text("spanish")}
        </li>
      </ul>
    </section>
  );
}

function Hobbies({ language, text }: { language: Iso; text: Function }) {
  return (
    <section className="hobbies">
      <h2>{text("hobbies")}</h2>

      <ul className="hobbies list">
        {hobbies.map((hobby, index) => {
          return (
            <li key={index}>
              {hobby.icon}
              <p>{hobby.text[language]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Personality({ language, text }: { language: Iso; text: Function }) {
  return (
    <section className="personality">
      <h2>{text("personality")}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("personality_description") }}></p>
      <ul className="personality list">
        {personality.map((personality, index) => {
          return <li key={index}>{personality[language]}</li>;
        })}
      </ul>
    </section>
  );
}
