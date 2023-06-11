// Commons
import { FLAG_EN_HTMLElement, FLAG_ES_HTMLElement, FLAG_FR_HTMLElement } from "../commons/commons";

// Types
import { Iso } from "../types/types";

type LanguageBtn = {
  language: Iso;
  flag: JSX.Element;
}[];

export const languageBtn: LanguageBtn = [
  {
    language: "fr",
    flag: <FLAG_FR_HTMLElement width={50} height={30} />,
  },
  {
    language: "en",
    flag: <FLAG_EN_HTMLElement width={50} height={30} />,
  },
  {
    language: "es",
    flag: <FLAG_ES_HTMLElement width={50} height={30} />,
  },
];
