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
  state: initialStatesProps;
  dispatch: any;
};

// Types of component's props
export type ContactsListProps = { classNameSuffix: string };

// initialStatesProps
export type initialStatesProps = {
  videoPlaying: string;
  conditions: {
    muteBtn: boolean;
    isIntroPlaying: boolean;
    isIntroClickable: boolean;
    isPayingAttention: boolean;
    hasHelloEnded: boolean;
    isResponding: boolean;
  };
  videos: {
    // Intro
    intro: {
      cannot_click: {
        title: string;
      };
      can_click: {
        title: string;
      };
    };
    // Paying attention
    pay_attention: {
      cannot_click: {
        title: string;
      };
      can_click: {
        title: string;
      };
    };
    // Questions
    questions: {
      presentation: {
        title: string;
        question: string;
      };
      stacks: {
        title: string;
        question: string;
      };
      formation: {
        title: string;
        question: string;
      };
      experience: {
        title: string;
        question: string;
      };
    };
  };
};
