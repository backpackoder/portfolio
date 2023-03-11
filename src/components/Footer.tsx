// Commons
// import { JOB, NAMES } from "../commons/commons";

// Components
import { ContactsList } from "./Contacts";

export function Footer() {
  return (
    <footer>
      <ContactsList classNameSuffix={"footer"} />
      {/* {NAMES}, {JOB} */}
    </footer>
  );
}
