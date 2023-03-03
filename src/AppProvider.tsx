import { useState } from "react";

// Context
import { AppContext } from "./AppContext";
import { languages } from "./languages/languages";

// Types
import { Iso } from "./types/types";

export function AppProvider(props: object) {
  const [language, setLanguage] = useState<Iso>("fr");

  function text(text: string) {
    return languages[text][language];
  }

  const contextValue = {
    // States
    language,
    setLanguage,

    // Functions
    text,
  };

  return <AppContext.Provider {...props} value={contextValue} />;
}
