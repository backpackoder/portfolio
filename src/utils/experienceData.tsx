import {
  PROJECT_AU_VERGER_GITHUB_LINK,
  PROJECT_AU_VERGER_LINK,
  PROJECT_DRESSLY_GITHUB_LINK,
  PROJECT_DRESSLY_LINK,
  PROJECT_MANGANIME_GITHUB_LINK,
  PROJECT_MANGANIME_LINK,
  PROJECT_MY_PORTFOLIO_GITHUB_LINK,
  PROJECT_MY_PORTFOLIO_LINK,
} from "../commons/commons";

interface experienceType {
  title: string;
  imgs: string[];
  adress: string;
  gitHub: string;
  type: Type[];
  theme: string;
  time: string;
  team: Team;
  stack: Stack[];
  details: string[];
  description: string;
}
type Type = "Site vitrine" | "Site e-commerce" | "Site web" | "Application mobile";
type Stack = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React";
type Team = "en solo" | "en équipe";

export const experienceData: experienceType[] = [
  {
    title: "Manganime",
    imgs: ["src/assets/img/Manganime - infos.png"],
    adress: PROJECT_MANGANIME_LINK,
    gitHub: PROJECT_MANGANIME_GITHUB_LINK,
    type: ["Site web"],
    theme: "Loisirs et divertissements",
    time: "Janvier 2023",
    team: "en équipe",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    details: ["API", "GraphQL", "Material-UI", "React-Query", "React-Router"],
    description: `Dans un groupe de 4 développeurs, nous avons créé un site web qui permet de rechercher des mangas et des animes.
      Nous avons utilisé l'API du site anilist.co pour récupérer les données des mangas et des animes avec GraphQL.
      Nous avons utilisé le framework Material-UI pour créer les composants,
      React-Query pour gérer les requêtes HTTP de l'application,
      React-Router pour gérer les routes de l'application.`,
  },
  {
    title: "Au verger",
    imgs: ["src/assets/img/Au verger - home page.jpg"],
    adress: PROJECT_AU_VERGER_LINK,
    gitHub: PROJECT_AU_VERGER_GITHUB_LINK,
    type: ["Site vitrine"],
    theme: "Météorologie",
    time: "2022",
    team: "en solo",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    details: ["API"],
    description: `J'ai créé un site vitrine pour une chambre d'hôte sur Booking.com située dans le 06.`,
  },
  {
    title: "Dressly",
    imgs: ["src/assets/img/Dressly - Paris mobile.jpg"],
    adress: PROJECT_DRESSLY_LINK,
    gitHub: PROJECT_DRESSLY_GITHUB_LINK,
    type: ["Site web"],
    theme: "Immobilier",
    time: "2022",
    team: "en solo",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    details: ["API", "Material-UI", "React-Query", "React-Router", "Local Storage"],
    description: `J'ai créé un site qui annonce la météo du jour et de la semaine partout sur terre.
    J'ai utilisé l'API de OpenWeatherMap pour récupérer les données météo.
    Je récupère la longitude et la latitude de l'utilisateur pour afficher le temps de la ville où l'utilisateur se trouve.`,
  },
  {
    title: "Mon portfolio",
    imgs: ["src/assets/img/Mon portfolio - home page.jpg"],
    adress: PROJECT_MY_PORTFOLIO_LINK,
    gitHub: PROJECT_MY_PORTFOLIO_GITHUB_LINK,
    type: ["Site vitrine"],
    theme: "Professionnel",
    time: "2023",
    team: "en solo",
    stack: ["React", "TypeScript", "HTML", "CSS"],
    details: [],
    description: `J'ai créé Mon portfolio pour présenter mes projets et mes compétences.
    J'ai utilisé React.js et TypeScript pour créer ce site.`,
  },
];
