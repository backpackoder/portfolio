import Image from "next/image";

// Types
import { FlagImageDimensions, PARTS_TYPE } from "@/types/types";

// Languages
import { PSEUDO, translation } from "../languages/languages";

// Routes
export const ROUTES = {
  HOME: "/",
  EXPERIENCE: "/experience",
  EXPERIENCES: "/experiences",
  FORMATION: "/formation",
};

// Parts
export const PARTS: PARTS_TYPE = {
  INTERVIEW: {
    LABEL: translation("Entretien", "Interview", "Entrevista"),
    ID: "interview",
  },
  EXPERIENCES: {
    LABEL: translation("Mon expérience", "My experience", "Mi experiencia"),
    ID: "experiences",
  },
  EXPERIENCE: {
    LABEL: translation("Mon expérience", "My experience", "Mi experiencia"),
    ID: "experience",
  },
  FORMATION: {
    LABEL: translation("Formation", "Formation", "Formación"),
    ID: "formation",
  },
  FORM: {
    LABEL: translation("Me contacter", "Contact me", "Contactarme"),
    ID: "form",
  },
};

// Contact
export const EMAIL = "th.barbiera@outook.fr";
export const PHONE = "+33 6 74 02 05 02";
export const PHONE_WITHOUT_SPACE = PHONE.replace(/\s/g, "");

export const LINKEDIN_URL = `https://www.linkedin.com/in/${PSEUDO}`;
export const GIHTUB_URL = `https://github.com/${PSEUDO}`;
export const EMAIL_URL = `mailto:${EMAIL}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_WITHOUT_SPACE}`;

// Formations
export const FORMATION_AUTODIDACTE_IMAGE =
  "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg";
export const FORMATION_REACT_MASTERY_IMAGE =
  "https://camo.githubusercontent.com/162dd31999112e507bc27e06dde98adbf23f2c7c8cd100e2d3d48bfd57bd196b/68747470733a2f2f6d696b65636f646575722e636f6d2f6d696b652f6173736574732f636f75727365732f72656163742d6d6173746572792e706e67";
export const FORMATION_REACT_MASTERY_URL = "https://training.mikecodeur.com/p/react-mastery";
export const FORMATION_TYPESCRIPT_PRO_IMAGE =
  "https://cdn.filestackcontent.com/VgG8BQeMSTuMn5LqRgT5";
export const FORMATION_TYPESCRIPT_PRO_URL = "https://training.mikecodeur.com/p/typescript-pro";
export const FORMATION_NEXTJS_THE_FULL_COURSE_IMAGE =
  "https://fireship.io/courses/nextjs/img/featured.webp";
export const FORMATION_NEXTJS_THE_FULL_COURSE_URL = "https://fireship.io/courses/nextjs/";

// Projects
// My portfolio
export const PROJECT_MY_PORTFOLIO_URL = "https://thibautbarbiera.com/";
export const PROJECT_MY_PORTFOLIO_GITHUB_URL = "https://github.com/backpackoder/portfolio";
// Challenges Frontend Mentor
export const PROJECT_CHALLENGES_FRONTEND_MENTOR_URL =
  "https://www.frontendmentor.io/profile/MrFougasse";
export const PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL =
  "https://github.com/backpackoder/challenges-frontend-mentor";
// Au verger
export const PROJECT_AU_VERGER_URL = "https://auverger.com";
export const PROJECT_AU_VERGER_GITHUB_URL = "https://github.com/backpackoder/auverger";
// Dressly
export const PROJECT_DRESSLY_URL = "https://dressly.netlify.app/";
export const PROJECT_DRESSLY_GITHUB_URL = "https://github.com/backpackoder/dressly";
// Manganime
export const PROJECT_MANGANIME_URL = "https://manganimerm.netlify.app/";
export const PROJECT_MANGANIME_GITHUB_URL = "https://github.com/backpackoder/manganime";
// Nations quiz
export const PROJECT_NATIONS_QUIZ_URL = "https://nations-quiz.netlify.app/";
export const PROJECT_NATIONS_QUIZ_GITHUB_URL = "https://github.com/backpackoder/nationsquiz";
// My wise quotes
export const PROJECT_MY_WISE_QUOTES_URL = "https://mywisequotes.vercel.app/";
export const PROJECT_MY_WISE_QUOTES_GITHUB_URL = "https://github.com/backpackoder/mywisequotes";

// Flags
export const FLAGS = {
  FR: "https://flagcdn.com/fr.svg",
  EN: "https://flagcdn.com/gb.svg",
  ES: "https://flagcdn.com/es.svg",
};
