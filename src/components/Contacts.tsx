// Hooks
import { openNewTab } from "../hooks/openNewTab";

// Utils
import { contacts } from "../utils/contacts";

type ContactsProps = { classNameSuffix: string };

export function ContactsList({ classNameSuffix }: ContactsProps) {
  return (
    <ul className={`contactList-${classNameSuffix}`}>
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
