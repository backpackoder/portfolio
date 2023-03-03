import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { AppContext } from "../AppContext";

// Commons
import { FLAG_EN_HTMLElement, FLAG_ES_HTMLElement, FLAG_FR_HTMLElement } from "../commons/commons";

// Utils
import { parts } from "../utils/parts";
import { languageBtn } from "../utils/languageBtns";

// Types
import { Iso, Part } from "../types/types";

export function Header() {
  const { language, setLanguage }: { language: Iso; setLanguage: Function } =
    useContext(AppContext);
  const navigate = useNavigate();

  const [openLanguageList, setOpenLanguageList] = useState(false);

  function handleLanguage(language: string) {
    setLanguage(language);
    setOpenLanguageList(!openLanguageList);
  }

  const FLAG_FOR_ACTUAL_LANGUAGE = useMemo(() => {
    switch (language) {
      case "fr":
        return FLAG_FR_HTMLElement(50, 30);
      case "en":
        return FLAG_EN_HTMLElement(50, 30);
      case "es":
        return FLAG_ES_HTMLElement(50, 30);

      default:
        return FLAG_FR_HTMLElement(50, 30);
    }
  }, [language]);

  return (
    <header>
      <ul className="parts">
        {parts.map((part: Part<string>, index) => {
          return (
            <li key={index} onClick={() => navigate(part.route)}>
              {part.name[language]}
            </li>
          );
        })}

        <div className="changeLanguage">
          <button
            className="changeLanguageBtn"
            onClick={() => setOpenLanguageList(!openLanguageList)}
          >
            {FLAG_FOR_ACTUAL_LANGUAGE}
          </button>
          <div className={`openLanguage ${openLanguageList ? "active" : "inactive"}`}>
            {languageBtn.map((btn) => {
              return (
                <button key={btn.language} onClick={() => handleLanguage(btn.language)}>
                  {btn.flag}
                </button>
              );
            })}
          </div>
        </div>
      </ul>
    </header>
  );
}
