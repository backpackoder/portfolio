// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

import {
  PROJECT_AU_VERGER_GITHUB_URL,
  PROJECT_AU_VERGER_URL,
  PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL,
  PROJECT_CHALLENGES_FRONTEND_MENTOR_URL,
  PROJECT_DRESSLY_GITHUB_URL,
  PROJECT_DRESSLY_URL,
  PROJECT_MANGANIME_GITHUB_URL,
  PROJECT_MANGANIME_URL,
  PROJECT_MY_PORTFOLIO_GITHUB_URL,
  PROJECT_MY_PORTFOLIO_URL,
} from "../commons/commons";

interface experienceType {
  title: string;
  imgs: string[];
  url: string;
  gitHub: string;
  type: Type[];
  theme: string;
  time: string;
  team: Team;
  stack: Stack[];
  details: string[];
  description: string;
  translation: {
    langage: string;
    iso: string;
  }[];
}

type Type = "Site vitrine" | "Site e-commerce" | "Site web" | "Application mobile" | "Challenges";
type Stack = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React";
type Team = "en solo" | "en équipe";

export const experienceData: experienceType[] = [
  {
    title: "Manganime",
    imgs: ["src/assets/img/Manganime - infos.png"],
    url: PROJECT_MANGANIME_URL,
    gitHub: PROJECT_MANGANIME_GITHUB_URL,
    type: ["Site web"],
    theme: "Loisirs et divertissements",
    time: "Janvier 2023",
    team: "en équipe",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    details: ["API", "GraphQL", "Material-UI", "React-Query", "React-Router"],
    description: `Dans un groupe de 4 développeurs, nous avons créé un site web qui permet de rechercher des
    mangas et des animes. Le travail a duré un mois, divisé en 4 sprints d'une semaine chacun,
    en suivant la méthodologie agile SCRUM. Nous avons utilisé l'API du site anilist.co pour récupérer
    les données des mangas et des animes avec GraphQL. Nous avons utilisé la library Material-UI pour créer
    les composants et leur design, React-Query pour gérer les requêtes HTTP de l'application,
    et React-Router pour gérer les routes de l'application. Pour le côté serveur, nous avons utilisé firestore
    pour garder en mémoire les comptes et les données des utilisateurs.
    Je me suis occupé de la partie search (la page qui permet de rechercher les mangas) et
    info (la page qui donne toutes les infos d'un anime ou manga).`,
    translation: [{ langage: "Anglais", iso: "gb" }],
  },
  {
    title: "Au verger",
    imgs: ["src/assets/img/Au verger - home page.jpg"],
    url: PROJECT_AU_VERGER_URL,
    gitHub: PROJECT_AU_VERGER_GITHUB_URL,
    type: ["Site vitrine"],
    theme: "Météorologie",
    time: "2022",
    team: "en solo",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    details: ["API"],
    description: `J'ai créé un site vitrine pour une chambre d'hôte sur Booking.com située dans le 06.
    Je me suis aussi occupé du design du site car je n'avais pas de maquette.
    J'ai utilisé une API pour récupérer les commentaires des clients sur Booking.com les plus récents,
    ainsi que l'API de OpenStreetMap pour indiquer la localisation de la chambre d'hôte sur une carte.
    J'ai utilisé React-Router pour gérer les routes de l'application.
    J'ai utilisé la library "Aos" pour créer des animations sur le site au scroll.`,
    translation: [
      { langage: "Français", iso: "fr" },
      { langage: "Anglais", iso: "gb" },
      { langage: "Espagnol", iso: "es" },
    ],
  },
  {
    title: "Dressly",
    imgs: ["src/assets/img/Dressly - Paris mobile.jpg"],
    url: PROJECT_DRESSLY_URL,
    gitHub: PROJECT_DRESSLY_GITHUB_URL,
    type: ["Site web"],
    theme: "Immobilier",
    time: "2022",
    team: "en solo",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    details: ["API", "Material-UI", "React-Query", "React-Router", "Local Storage"],
    description: `J'ai créé un site qui annonce la météo du jour et de la semaine partout sur terre.
    J'ai utilisé l'API de OpenWeatherMap pour récupérer les données météo.
    Je récupère la longitude et la latitude de l'utilisateur pour afficher le temps de la ville où l'utilisateur se trouve.`,
    translation: [{ langage: "Espagnol", iso: "es" }],
  },
  {
    title: "Mes challenges Frontend Mentor",
    imgs: ["src/assets/img/ecommerce-product-page.png"],
    url: PROJECT_CHALLENGES_FRONTEND_MENTOR_URL,
    gitHub: PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL,
    type: ["Challenges"],
    theme: "Challenges",
    time: "2022",
    team: "en solo",
    stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    details: ["Responsive", "Mobile first"],
    description: `J'ai réussi plusieurs challenges au fil du temps sur le site Frontend Mentor.
    Les challenges m'ont beaucoup aidé au début pour progresser, vous pouvez aller voir les résultats
    en cliquant sur les liens au-dessus.`,
    translation: [{ langage: "Anglais", iso: "gb" }],
  },
  {
    title: "Mon portfolio",
    imgs: ["src/assets/img/Mon portfolio - home page.jpg"],
    url: PROJECT_MY_PORTFOLIO_URL,
    gitHub: PROJECT_MY_PORTFOLIO_GITHUB_URL,
    type: ["Site vitrine"],
    theme: "Professionnel",
    time: "2023",
    team: "en solo",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    details: [],
    description: `J'ai créé Mon portfolio pour présenter mes projets et mes compétences.
    J'ai utilisé React.js et TypeScript pour créer ce site.`,
    translation: [
      { langage: "Français", iso: "fr" },
      { langage: "Anglais", iso: "gb" },
      { langage: "Espagnol", iso: "es" },
    ],
  },
];
