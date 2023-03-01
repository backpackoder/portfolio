// Hooks
import { openNewTab } from "../hooks/openNewTab";

// Utils
import { contacts } from "../utils/contacts";

type ContactsProps = { contactList: string };

export function ContactsList({ contactList }: ContactsProps) {
  return (
    <ul className={`contactList-${contactList}`}>
      {contacts.map((contact, index) => {
        return (
          <li key={index} onClick={() => openNewTab(contact.url)}>
            {contact.icon}
          </li>
        );
      })}
    </ul>
  );
}
