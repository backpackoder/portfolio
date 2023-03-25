import { useRef, useState } from "react";

// Context
import { AppContext } from "./AppContext";

// Languages
import { languages } from "./languages/languages";

// Types
import { Iso } from "./types/types";

// Components
import { infoComponentList } from "./components/info/Infos";

export function AppProvider(props: object) {
  const formRef = useRef(null);
  const experienceRef = useRef(null);
  const formationRef = useRef(null);
  const refList = [formRef, experienceRef, formationRef];

  const [language, setLanguage] = useState<Iso>("fr");
  const [changeInfo, setChangeInfo] = useState(0);
  const [isNextInfo, setIsNextInfo] = useState(true);

  type handleNextInfoType = {
    isNext: boolean;
    isArrow?: boolean;
    index?: number;
  };

  function handleNextInfo({ isNext, isArrow = true, index = 0 }: handleNextInfoType) {
    if (isNext) {
      setChangeInfo(
        isArrow ? (changeInfo >= infoComponentList.length - 1 ? 0 : changeInfo + 1) : index
      );
      setIsNextInfo(true);
    } else {
      setChangeInfo(
        isArrow ? (changeInfo <= 0 ? infoComponentList.length - 1 : changeInfo - 1) : index
      );
      setIsNextInfo(false);
    }
  }

  function changeLanguage(language: Iso) {
    setLanguage(language);
  }

  function text(text: string) {
    return languages[text][language];
  }

  const contextValue = {
    // Refs
    formRef,
    experienceRef,
    formationRef,
    refList,

    // States
    language,
    setLanguage,
    changeInfo,
    setChangeInfo,
    isNextInfo,
    setIsNextInfo,

    // Functions
    handleNextInfo,
    changeLanguage,
    text,
  };

  return <AppContext.Provider {...props} value={contextValue} />;
}
