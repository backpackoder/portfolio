// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
} from "../../commons/commons";

// Utils
import { myStacks } from "../../utils/myStacks";

// Context
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { personality } from "../../utils/personality";
import { AppProviderContextTypes, Iso } from "../../types/types";
import { hobbies } from "../../utils/hobbies";

type Text = (text: string) => string;
type Props = { language: Iso; text: Text };

export function Presentation() {
  const { aboutRef, language, text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <article ref={aboutRef} className="presentation">
      <Stacks text={text} />
      <Description text={text} />
      <Personality language={language} text={text} />
      <Langages text={text} />
      <Hobbies language={language} text={text} />
    </article>
  );
}

function Stacks({ text }: { text: Text }) {
  return (
    <section className="stacks">
      <h2>{text("stacks")}</h2>

      <ul className="mySkills list">
        {myStacks.map((stack) => {
          return (
            <li key={stack.name}>
              <img src={stack.img} alt={stack.name} />
              <p>{stack.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Description({ text }: { text: Text }) {
  return (
    <section className="description">
      <h2>{text("informations")}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("description") }}></p>
    </section>
  );
}

function Personality({ language, text }: Props) {
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

function Langages({ text }: { text: Text }) {
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

function Hobbies({ language, text }: Props) {
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
