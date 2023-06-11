import { useAppContext } from "@/app/context/AppProvider";

// Components
import { infoComponentList } from "./Infos";

export function InfoShowed() {
  const { changeInfo } = useAppContext();

  return infoComponentList[changeInfo];
}
