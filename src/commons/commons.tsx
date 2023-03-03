// Languages
import { translation } from "../languages/languages";

// Routes
export const ROUTE_PRESENTATION = "/";
export const ROUTE_PRESENTATION_LABEL = translation("Je me présente", "About me", "Sobre mí");
export const ROUTE_EXPERIENCE = "/experience";
export const ROUTE_EXPERIENCE_LABEL = translation(
  "Mon expérience",
  "My experience",
  "Mi experiencia"
);
export const ROUTE_EXPERIENCE_DETAILLED = `${ROUTE_EXPERIENCE}/:title`;
export const ROUTE_FORMATION = "/formation";
export const ROUTE_FORMATION_LABEL = translation("Formation", "Formation", "Formación");

// About me
export const NAMES = "Thibaut Barbiera";
export const PSEUDO = "backpackoder";
export const JOB = translation(
  "développeur web front-end",
  "Front-end web developer",
  "desarrollador web front-end"
);

// Contact
export const EMAIL = "th.barbiera@outook.fr";
export const PHONE = "+33 6 74 02 05 02";
export const PHONE_WITHOUT_SPACE = PHONE.replace(/\s/g, "");

export const LINKEDIN_URL = `https://www.linkedin.com/in/${PSEUDO}`;
export const GIHTUB_URL = `https://github.com/${PSEUDO}`;
export const EMAIL_URL = `mailto:${EMAIL}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_WITHOUT_SPACE}`;

// Formations
export const FORMATION_REACT_MASTERY_IMAGE =
  "https://camo.githubusercontent.com/162dd31999112e507bc27e06dde98adbf23f2c7c8cd100e2d3d48bfd57bd196b/68747470733a2f2f6d696b65636f646575722e636f6d2f6d696b652f6173736574732f636f75727365732f72656163742d6d6173746572792e706e67";
export const FORMATION_REACT_MASTERY_URL = "https://training.mikecodeur.com/p/react-mastery";
export const FORMATION_TYPESCRIPT_PRO_IMAGE =
  "https://cdn.filestackcontent.com/VgG8BQeMSTuMn5LqRgT5";
export const FORMATION_TYPESCRIPT_PRO_URL = "https://training.mikecodeur.com/p/typescript-pro";
export const FORMATION_AUTODIDACTE_IMAGE =
  "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg";

// Projects
// My portfolio
export const PROJECT_MY_PORTFOLIO_URL = "https://thibautbarbiera.netlify.app/";
export const PROJECT_MY_PORTFOLIO_GITHUB_URL = "https://github.com/backpackoder/my-portfolio";
// Challenges Frontend Mentor
export const PROJECT_CHALLENGES_FRONTEND_MENTOR_URL =
  "https://www.frontendmentor.io/profile/MrFougasse";
export const PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL =
  "https://github.com/backpackoder/challenges-frontend-mentor";
// Au verger
export const PROJECT_AU_VERGER_URL = "https://au-verger.pages.dev/";
export const PROJECT_AU_VERGER_GITHUB_URL = "https://github.com/backpackoder/auverger";
// Dressly
export const PROJECT_DRESSLY_URL = "https://dressly.netlify.app/";
export const PROJECT_DRESSLY_GITHUB_URL = "https://github.com/backpackoder/dressly";
// Manganime
export const PROJECT_MANGANIME_URL = "https://manganime.infodocbib.net/";
export const PROJECT_MANGANIME_GITHUB_URL = "https://github.com/backpackoder/manganime";

// Flags
// France
export const FLAG_FR = "https://flagcdn.com/fr.svg";
export function FLAG_FR_HTMLElement(
  width: string | number = "100%",
  height: string | number = "100%"
) {
  return <img src={FLAG_FR} width={width} height={height} alt="Français" />;
}
// England
export const FLAG_EN = "https://flagcdn.com/gb.svg";
export function FLAG_EN_HTMLElement(
  width: string | number = "100%",
  height: string | number = "100%"
) {
  return <img src={FLAG_EN} width={width} height={height} alt="Anglais" />;
}
// Spain
export const FLAG_ES = "https://flagcdn.com/es.svg";
export function FLAG_ES_HTMLElement(
  width: string | number = "100%",
  height: string | number = "100%"
) {
  return <img src={FLAG_ES} width={width} height={height} alt="Espagnol" />;
}
