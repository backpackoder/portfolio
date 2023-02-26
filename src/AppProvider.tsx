import { useState } from "react";

// Context
import { AppContext } from "./AppContext";

export function AppProvider(props: any) {
  const [presentation, setPresentation] = useState(true);
  const [experience, setExperience] = useState(false);
  const [formation, setFormation] = useState(false);

  const contextValue = {
    // States
    presentation,
    setPresentation,
    experience,
    setExperience,
    formation,
    setFormation,
  };

  return <AppContext.Provider {...props} value={contextValue} />;
}
