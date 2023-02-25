import { createContext } from "react";

// Context
import { AppContext } from "./AppContext";

export function AppProvider(props: any) {
  const contextValue = {};

  return <AppContext.Provider {...props} value={contextValue} />;
}
