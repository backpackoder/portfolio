import { useContext } from "react";

// Context
import { AppContext } from "../AppContext";

// Types
import { AppProviderContextTypes } from "../types/types";

// Languages
import { JOB, NAMES } from "../languages/languages";

// Components
import { ContactsList } from "./Contacts";

export function Footer() {
  const { language }: AppProviderContextTypes = useContext(AppContext);

  return (
    <footer>
      <ContactsList classNameSuffix={"footer"} />
      <small>
        <>
          {NAMES} - {JOB[language]}
        </>
      </small>
    </footer>
  );
}
