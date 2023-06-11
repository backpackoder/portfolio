// Icons
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// Commons
import { EMAIL_URL, GIHTUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "../commons/commons";

const linkedinIcon = <FaLinkedin size="35px" />;
const githubIcon = <FaGithub size="35px" />;
const mailIcon = <FaEnvelope size="35px" />;
const whatsappIcon = <FaWhatsapp size="35px" />;

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
