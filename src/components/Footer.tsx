// Commons
import { JOB, NAMES } from "../commons/commons";

// Utils
import { myContacts } from "../utils/contact";

export function Footer() {
  return (
    <footer>
      {myContacts}
      {/* {NAMES}, {JOB} */}
    </footer>
  );
}
