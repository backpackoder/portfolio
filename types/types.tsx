// Types
import { Translation } from "@/languages/languages";

export type FlagImageDimensions = number | `${number}`;

export type Languages = {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
  };
};

export type LanguageStrings = {
  fr: string;
  en: string;
  es: string;
};

export type PARTS_TYPE = {
  [key: string]: {
    LABEL: Translation;
    ID: PartID;
  };
};
export type Part = {
  id: PartID;
  name: LanguageStrings;
};
export type PartID = "interview" | "experience" | "experiences" | "formation" | "form";
export interface LanguageObject {
  [key: string]: LanguageStrings;
}

export type Iso = "fr" | "en" | "es";

export type ExperienceProps = {
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
  catchphrase: LanguageStrings;
  description: LanguageStrings;
  translation: {
    translation: LanguageStrings;
    iso: "fr" | "gb" | "es";
  }[];
};
export type Experience_type = {
  [key: string]: Translation;
};

export type formationDataType = {
  title: Translation;
  image: string;
  url: string;
  time: Translation;
  stack: string[];
  catchphrase: Translation;
  description: {
    introduction: Translation;
    content: Translation;
    conclusion: Translation;
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
export type ContactsListProps = { style: string };

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
    title: string;
    question?: LanguageStrings;
  }[];
};
