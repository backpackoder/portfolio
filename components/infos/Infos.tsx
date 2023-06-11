"use client";

import Image from "next/image";
import { useAppContext } from "@/app/context/AppProvider";

// Types
import { withInfoProps } from "../../types/types";

// Utils
import { hobbies } from "../../utils/hobbies";
import { myStacks } from "../../utils/myStacks";
import { personality } from "../../utils/personality";

// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
} from "../../commons/commons";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

const withInfo = ({ WrappedComponent, title, emoji }: withInfoProps) => {
  const WithSection = (props: object) => {
    const { isNextInfo, text } = useAppContext();

    return (
      <section
        className={`flex flex-col h-full duration-1000 animation ${
          isNextInfo ? "nextInfo" : "prevInfo"
        }`}
      >
        <h3 className={styles.titles.h3}>
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
    <ul className="flex items-center justify-center flex-wrap gap-2 text-center line-height-2 py-2 px-1 m-auto">
      {myStacks.map((stack, index) => {
        return (
          index < 3 && (
            <li
              key={stack.name}
              className="flex items-center gap-2 bg-[#ebebeb] py-2 px-3 rounded-lg"
            >
              <Image src={stack.img} alt={stack.name} width={25} height={25} />
              <p className="leading-8 py-1 px-2 m-auto">{stack.name}</p>
            </li>
          )
        );
      })}
    </ul>
  );
}

export function YourProjectWithInfo() {
  const { text } = useAppContext();

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text("yourProjectDescription") }}
      className="leading-8 py-1 px-2 m-auto"
    ></p>
  );
}

export function AboutMeWithInfo() {
  const { text } = useAppContext();

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text("aboutMeDescription") }}
      className="leading-8 py-1 px-2 m-auto"
    ></p>
  );
}

export function PersonalityWithInfo() {
  const { language, text } = useAppContext();

  return (
    <>
      <p
        dangerouslySetInnerHTML={{ __html: text("personality_description") }}
        className="leading-8 py-1 px-2 m-auto"
      ></p>
      <ul className="flex justify-center flex-wrap gap-2 text-center leading-8 py-1 px-2 m-auto">
        {personality.map((personality, index) => {
          return (
            <li key={index} className="flex items-center gap-2 bg-[#ebebeb] py-1 px-2 rounded-lg">
              {personality[language]}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function EthicWithInfo() {
  const { text } = useAppContext();

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text("ethicDescription") }}
      className="leading-8 py-1 px-2 m-auto"
    ></p>
  );
}

export function TeamworkWithInfo() {
  const { text } = useAppContext();

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text("teamworkDescription") }}
      className="leading-8 py-1 px-2 m-auto"
    ></p>
  );
}

export function ToolsAndSkillsWithInfo() {
  const { text } = useAppContext();

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text("toolsAndSkillsDescription") }}
      className="leading-8 py-1 px-2 m-auto"
    ></p>
  );
}

export function LangagesWithInfo() {
  const { text } = useAppContext();

  return (
    <ul className="flex justify-center flex-wrap gap-2 text-center leading-8 py-1 px-2 m-auto">
      <li className="flex items-center gap-2 bg-[#ebebeb] py-1 px-2 rounded-lg">
        <FLAG_FR_HTMLElement width={25} height={15} />
        {text("french")}
      </li>
      <li className="flex items-center gap-2 bg-[#ebebeb] py-1 px-2 rounded-lg">
        <FLAG_EN_HTMLElement width={25} height={15} />
        {text("english")}
      </li>
      <li className="flex items-center gap-2 bg-[#ebebeb] py-1 px-2 rounded-lg">
        <FLAG_ES_HTMLElement width={25} height={15} />
        {text("spanish")}
      </li>
    </ul>
  );
}

export function HobbiesWithInfo() {
  const { language } = useAppContext();

  return (
    <ul className="flex justify-center flex-wrap gap-2 text-center leading-8 py-1 px-2 m-auto">
      {hobbies.map((hobby, index) => {
        return (
          <li key={index} className="flex items-center gap-2 bg-[#ebebeb] py-1 px-2 rounded-lg">
            {hobby.icon}
            <p className="leading-8 h-full py-1 px-2 m-auto">{hobby.text[language]}</p>
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
  <Stacks key={"stack"} />,
  <YourProject key={"your project"} />,
  <AboutMe key={"about me"} />,
  <Personality key={"personnality"} />,
  <Ethic key={"ethic"} />,
  <Teamwork key={"teamwork"} />,
  <ToolsAndSkills key={"tools and skills"} />,
  <Languages key={"languages"} />,
  <Hobbies key={"hobbies"} />,
];
