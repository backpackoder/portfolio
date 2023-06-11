import { createContext } from "react";

// Types
import { AppContextProps } from "@/types/context";

export const AppContext = createContext<AppContextProps>({
  // Refs
  formRef: null,
  experienceRef: null,
  formationRef: null,
  refList: [],

  // States
  language: "fr",
  setLanguage: () => {},
  changeInfo: 0,
  setChangeInfo: () => {},
  isNextInfo: true,
  setIsNextInfo: () => {},

  // Functions
  handleNextInfo: () => {},
  changeLanguage: () => {},
  text: () => "",
});
