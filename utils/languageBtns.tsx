// Commons
import { FLAGS } from "../commons/commons";

// Types
import { Iso } from "../types/types";

type LanguageBtn = {
  language: Iso;
  flag: string;
}[];

export const languageBtn: LanguageBtn = [
  {
    language: "fr",
    flag: FLAGS.FR,
  },
  {
    language: "en",
    flag: FLAGS.EN,
  },
  {
    language: "es",
    flag: FLAGS.ES,
  },
];
