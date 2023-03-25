import { useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Types
import { AppProviderContextTypes } from "../../types/types";

// Components
import { infoComponentList } from "./Infos";

export function InfoShowed() {
  const { changeInfo }: AppProviderContextTypes = useContext(AppContext);

  return infoComponentList[changeInfo];
}
