// Commons
import { JOB, NAMES } from "../commons/commons";

// Components
import { ContactsList } from "./Contacts";

export function Footer() {
  return (
    <footer>
      <ContactsList contactList={"footer"} />
      {/* {NAMES}, {JOB} */}
    </footer>
  );
}
