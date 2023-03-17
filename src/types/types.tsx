export interface LanguageStrings {
  fr: string;
  en: string;
  es: string;
}
export type Part = {
  name: LanguageStrings;
  route: string;
};
export interface LanguageObject {
  [key: string]: LanguageStrings;
}
export type Iso = "fr" | "en" | "es";
export interface ExperienceProps {
  title: string;
  imgs: string[];
  url: string;
  gitHub: string;
  type: Experience_type[string];
  theme: LanguageStrings;
  time: LanguageStrings;
  team: LanguageStrings;
  stack: string[];
  details: string[];
  description: LanguageStrings;
  translation: {
    translation: LanguageStrings;
    iso: "fr" | "gb" | "es";
  }[];
}
export type Experience_type = {
  [key: string]: {
    fr: "Site vitrine" | "Site E-commerce" | "Site web" | "Application mobile" | "Challenges";
    en: "Showcase site" | "E-commerce" | "Website" | "Mobile app" | "Challenges";
    es: "Sitio de exhibición" | "E-commerce" | "Sitio web" | "Aplicación móvil" | "Desafíos";
  };
};

// Contexts types
export type AppProviderContextTypes = {
  // Refs
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  formationRef: React.RefObject<HTMLDivElement>;
  refList: React.MutableRefObject<null>[];
  // React.RefObject<HTMLDivElement>[];

  // States
  language: Iso;
  setLanguage: (language: Iso) => void;

  // Functions
  changeLanguage: (language: Iso) => void;
  text: (text: string) => string;
};

export type AppVideosContextTypes = {
  // STATES
  isFirstTime: boolean;
  // Muted
  muteBtn: boolean;
  setMuteBtn: React.Dispatch<React.SetStateAction<boolean>>;
  // Intro
  intro: boolean;
  setIntro: React.Dispatch<React.SetStateAction<boolean>>;
  introMuted: boolean;
  setIntroMuted: React.Dispatch<React.SetStateAction<boolean>>;
  hasIntroEnded: boolean;
  setHasIntroEnded: React.Dispatch<React.SetStateAction<boolean>>;
  introClickable: boolean;
  setIntroClickable: React.Dispatch<React.SetStateAction<boolean>>;
  introClickableMuted: boolean;
  setIntroClickableMuted: React.Dispatch<React.SetStateAction<boolean>>;
  // Paying attention
  hello: boolean;
  setHello: React.Dispatch<React.SetStateAction<boolean>>;
  helloMuted: boolean;
  setHelloMuted: React.Dispatch<React.SetStateAction<boolean>>;
  hasHelloEnded: boolean;
  setHasHelloEnded: React.Dispatch<React.SetStateAction<boolean>>;
  waiting: boolean;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
  waitingMuted: boolean;
  setWaitingMuted: React.Dispatch<React.SetStateAction<boolean>>;
  // Questions
  presentationQ: boolean;
  setPresentationQ: React.Dispatch<React.SetStateAction<boolean>>;
  presentationQMuted: boolean;
  setPresentationQMuted: React.Dispatch<React.SetStateAction<boolean>>;
  stacksQ: boolean;
  setStacksQ: React.Dispatch<React.SetStateAction<boolean>>;
  stacksQMuted: boolean;
  setStacksQMuted: React.Dispatch<React.SetStateAction<boolean>>;
  experienceQ: boolean;
  setExperienceQ: React.Dispatch<React.SetStateAction<boolean>>;
  experienceQMuted: boolean;
  setExperienceQMuted: React.Dispatch<React.SetStateAction<boolean>>;
  // Conditional states
  videoSelected: string;
  setVideoSelected: React.Dispatch<React.SetStateAction<string>>;
  isIntro: boolean;
  setIsIntro: React.Dispatch<React.SetStateAction<boolean>>;
  isPayingAttention: boolean;
  setIsPayingAttention: React.Dispatch<React.SetStateAction<boolean>>;
  isResponding: boolean;
  setIsResponding: React.Dispatch<React.SetStateAction<boolean>>;

  // LISTS
  // Videos lists
  setAllVideos: React.Dispatch<React.SetStateAction<boolean>>[];
  setAllVideosMuted: React.Dispatch<React.SetStateAction<boolean>>[];
  isMutedList: boolean[];
  allVideoTitleList: string[];
  videoTitleList: string[];
  videoSrcList: string[];

  // FUNCTIONS
  getMyAttention: () => void;
  questionAsked: (title: string) => void;
};

// Types of component's props
export type VideoProps = {
  title: string;
  src: string;
  isMuted: boolean;
};

export type ContactsListProps = { classNameSuffix: string };
