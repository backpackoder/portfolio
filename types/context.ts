// Types
import { Iso, initialStatesProps } from "./types";

export type AppContextProps = {
  // Refs
  formRef: any;
  experienceRef: any;
  formationRef: any;
  refList: any;

  // States
  language: Iso;
  setLanguage: (language: Iso) => void;
  changeInfo: number;
  setChangeInfo: (changeInfo: number) => void;
  isNextInfo: boolean;
  setIsNextInfo: (isNextInfo: boolean) => void;

  // Functions
  handleNextInfo: (handleNextInfo: handleNextInfoType) => void;
  changeLanguage: (language: Iso) => void;
  text: (text: string) => string;
};

export type InterviewContextProps = {
  state: initialStatesProps;
  dispatch: React.Dispatch<any>;
};

export type handleNextInfoType = {
  isNext: boolean;
  isArrow?: boolean;
  index?: number;
};
