import { useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
} from "../../commons/commons";

// Types
import { AppProviderContextTypes, withInfoProps } from "../../types/types";

// Utils
import { hobbies } from "../../utils/hobbies";
import { myStacks } from "../../utils/myStacks";
import { personality } from "../../utils/personality";

const withInfo = ({ WrappedComponent, title, emoji }: withInfoProps) => {
  const WithSection = (props: object) => {
    const { isNextInfo, text }: AppProviderContextTypes = useContext(AppContext);

    return (
      <section className={`${title} ${isNextInfo ? "next" : "prev"}`}>
        <h3>
          {emoji} {text(title)}
        </h3>

        <WrappedComponent {...props} />
      </section>
    );
  };

  return WithSection;
};

export function StacksWithInfo() {
  return (
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
  );
}

export function YourProjectWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return <p dangerouslySetInnerHTML={{ __html: text("yourProjectDescription") }}></p>;
}

export function AboutMeWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return <p dangerouslySetInnerHTML={{ __html: text("aboutMeDescription") }}></p>;
}

export function PersonalityWithInfo() {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: text("personality_description") }}></p>
      <ul className="personality list">
        {personality.map((personality, index) => {
          return <li key={index}>{personality[language]}</li>;
        })}
      </ul>
    </>
  );
}

export function EthicWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return <p dangerouslySetInnerHTML={{ __html: text("ethicDescription") }}></p>;
}

export function TeamworkWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return <p dangerouslySetInnerHTML={{ __html: text("teamworkDescription") }}></p>;
}

export function ToolsAndSkillsWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return <p dangerouslySetInnerHTML={{ __html: text("toolsAndSkillsDescription") }}></p>;
}

export function LangagesWithInfo() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return (
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
  );
}

export function HobbiesWithInfo() {
  const { language }: AppProviderContextTypes = useContext(AppContext);

  return (
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
  );
}

export const Stacks = withInfo({ WrappedComponent: StacksWithInfo, title: "stacks", emoji: "🛠️" });
export const YourProject = withInfo({
  WrappedComponent: YourProjectWithInfo,
  title: "yourProject",
  emoji: "🚀",
});
export const AboutMe = withInfo({
  WrappedComponent: AboutMeWithInfo,
  title: "aboutMe",
  emoji: "👨‍🚀",
});
export const Personality = withInfo({
  WrappedComponent: PersonalityWithInfo,
  title: "personality",
  emoji: "👍👎",
});
export const Ethic = withInfo({ WrappedComponent: EthicWithInfo, title: "ethic", emoji: "👔" });
export const Teamwork = withInfo({
  WrappedComponent: TeamworkWithInfo,
  title: "teamwork",
  emoji: "🤝",
});
export const ToolsAndSkills = withInfo({
  WrappedComponent: ToolsAndSkillsWithInfo,
  title: "toolsAndSkills",
  emoji: "🛠️",
});
export const Languages = withInfo({
  WrappedComponent: LangagesWithInfo,
  title: "languages",
  emoji: "🗣️",
});
export const Hobbies = withInfo({
  WrappedComponent: HobbiesWithInfo,
  title: "hobbies",
  emoji: "🔥",
});

export const infoComponentList: JSX.Element[] = [
  <Stacks />,
  <YourProject />,
  <AboutMe />,
  <Personality />,
  <Ethic />,
  <Teamwork />,
  <ToolsAndSkills />,
  <Languages />,
  <Hobbies />,
];
