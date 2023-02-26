// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Commons
import { EMAIL_LINK, GIHTUB_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from "../commons/commons";

// Functions
import { openNewTab } from "../hooks/openNewTab";

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2x" />;
const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} size="2x" />;

export const contacts = [
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    link: LINKEDIN_LINK,
  },
  {
    name: "GitHub",
    icon: githubIcon,
    link: GIHTUB_LINK,
  },
  {
    name: "Email",
    icon: mailIcon,
    link: EMAIL_LINK,
  },
  {
    name: "whatsApp",
    icon: whatsappIcon,
    link: WHATSAPP_LINK,
  },
];

export const myContacts = (
  <ul className="contactList">
    {contacts.map((contact, index) => {
      return (
        <li key={index} onClick={() => openNewTab(contact.link)}>
          {contact.icon}
        </li>
      );
    })}
  </ul>
);
