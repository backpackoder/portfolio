// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Commons
import { EMAIL_URL, GIHTUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "../commons/commons";

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2x" />;
const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} size="2x" />;

export const contacts = [
  {
    name: "URLedIn",
    icon: linkedinIcon,
    url: LINKEDIN_URL,
  },
  {
    name: "GitHub",
    icon: githubIcon,
    url: GIHTUB_URL,
  },
  {
    name: "Email",
    icon: mailIcon,
    url: EMAIL_URL,
  },
  {
    name: "whatsApp",
    icon: whatsappIcon,
    url: WHATSAPP_URL,
  },
];
