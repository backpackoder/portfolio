export type Languages = {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
  };
};

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
  formRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  formationRef: React.RefObject<HTMLDivElement>;
  refList: React.MutableRefObject<null>[];

  // States
  language: Iso;
  setLanguage: (language: Iso) => void;
  changeInfo: number;
  setChangeInfo: React.Dispatch<React.SetStateAction<number>>;
  isNextInfo: boolean;
  setIsNextInfo: React.Dispatch<React.SetStateAction<boolean>>;

  // Functions
  handleNextInfo: ({
    isNext,
    isArrow,
    index,
  }: {
    isNext: boolean;
    isArrow?: boolean;
    index?: number;
  }) => void;
  changeLanguage: (language: Iso) => void;
  text: (text: string) => string;
};

export type AppVideosContextTypes = {
  state: initialStatesProps;
  dispatch: any;
};

// Types of component's props
export type ContactsListProps = { classNameSuffix: string };

export type withInfoProps = {
  WrappedComponent: React.ComponentType<object>;
  title: string;
  emoji?: string;
};

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
        question: LanguageStrings;
      };
      stacks: {
        title: string;
        question: LanguageStrings;
      };
      formation: {
        title: string;
        question: LanguageStrings;
      };
      experience: {
        title: string;
        question: LanguageStrings;
      };
    };
  };
};
