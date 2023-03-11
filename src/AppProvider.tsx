import { useRef, useState } from "react";

// Context
import { AppContext } from "./AppContext";
import { languages } from "./languages/languages";

// Types
import { Iso } from "./types/types";

export function AppProvider(props: object) {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const formationRef = useRef(null);
  const refList = [aboutRef, experienceRef, formationRef];

  const [language, setLanguage] = useState<Iso>("fr");

  function changeLanguage(language: Iso) {
    setLanguage(language);
  }

  function text(text: string) {
    return languages[text][language];
  }

  const contextValue = {
    // Refs
    aboutRef,
    experienceRef,
    formationRef,
    refList,

    // States
    language,
    setLanguage,

    // Functions
    changeLanguage,
    text,
  };

  return <AppContext.Provider {...props} value={contextValue} />;
}
