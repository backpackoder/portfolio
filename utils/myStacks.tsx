type stack = {
  name: string;
  img: string;
};

export enum myStacksEnum {
  next = 0,
  react,
  TS,
  JS,
  HTML,
  CSS,
}

export const myStacks: stack[] = [
  {
    name: "Next",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  },
];

export const NEXT = myStacks[myStacksEnum.next];
export const REACT = myStacks[myStacksEnum.react];
export const TS = myStacks[myStacksEnum.TS];
export const JS = myStacks[myStacksEnum.JS];
export const HTML = myStacks[myStacksEnum.HTML];
export const CSS = myStacks[myStacksEnum.CSS];
