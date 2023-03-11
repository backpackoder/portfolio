// Hooks
import { openNewTab } from "../hooks/openNewTab";

// Types
import { ContactsListProps } from "../types/types";

// Utils
import { contacts } from "../utils/contacts";

export function ContactsList({ classNameSuffix }: ContactsListProps) {
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
