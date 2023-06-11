"use client";

import { useContext, useRef, useState } from "react";
import { AppContext } from "./AppContext";

// Components
import { infoComponentList } from "@/components/infos/Infos";

// Types
import { handleNextInfoType } from "@/types/context";
import { ProviderProps } from "@/types/props";
import { Iso } from "@/types/types";

// Languages
import { languages } from "@/languages/languages";

export function AppProvider({ children }: ProviderProps) {
  const formRef = useRef(null);
  const experienceRef = useRef(null);
  const formationRef = useRef(null);
  const refList = [formRef, experienceRef, formationRef];

  const [language, setLanguage] = useState<Iso>("fr");
  const [changeInfo, setChangeInfo] = useState(0);
  const [isNextInfo, setIsNextInfo] = useState(true);

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

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
