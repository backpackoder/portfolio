// Hooks
import { openNewTab } from "@/hooks/openNewTab";

// Types
import { ContactsListProps } from "@/types/types";

// Utils
import { contacts } from "@/utils/contacts";

export function ContactsList({ style }: ContactsListProps) {
  return (
    <ul className={`${style} animation appearsAndScale-3s`}>
      {contacts.map((contact, index) => {
        return (
          <li
            key={index}
            className="hover:scale-[125%] hover:transition-[0.25s]"
            onClick={() => openNewTab(contact.url)}
          >
            {contact.icon}
          </li>
        );
      })}
    </ul>
  );
}
