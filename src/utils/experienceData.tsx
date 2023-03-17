// Commons
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

// Languages
import { translation } from "../languages/languages";

// Utils
import { myStacks } from "./myStacks";

// Types
import { ExperienceProps, Experience_type } from "../types/types";

const experience_type: Experience_type = {
  showcase_site: { fr: "Site vitrine", en: "Showcase site", es: "Sitio de exhibición" },
  e_commerce: { fr: "Site E-commerce", en: "E-commerce", es: "E-commerce" },
  website: { fr: "Site web", en: "Website", es: "Sitio web" },
  mobile_app: { fr: "Application mobile", en: "Mobile app", es: "Aplicación móvil" },
  challenges: { fr: "Challenges", en: "Challenges", es: "Desafíos" },
};

const reactImg = myStacks[0].img;
const TSImg = myStacks[1].img;
const JSImg = myStacks[2].img;
const HTMLImg = myStacks[3].img;
const CSSImg = myStacks[4].img;

export const experienceData: ExperienceProps[] = [
  {
    title: "Manganime",
    imgs: ["public/imgs/Manganime - infos.png"],
    url: PROJECT_MANGANIME_URL,
    gitHub: PROJECT_MANGANIME_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Cinématographie", "Cinematography", "Cine"),
    time: translation("Janvier 2023", "January 2023", "Enero 2023"),
    team: translation("En équipe", "In a team", "En equipo"),
    stack: [reactImg, JSImg, HTMLImg, CSSImg],
    details: ["API", "GraphQL", "Material-UI", "React-Query", "React-Router"],
    description: translation(
      `Dans un groupe de 4 développeurs, nous avons créé un site web qui permet de rechercher des
    mangas et des animes. Le travail a duré un mois, divisé en 4 sprints d'une semaine chacun,
    en suivant la méthodologie agile SCRUM. Nous avons utilisé l'API du site anilist.co pour récupérer
    les données des mangas et des animes avec GraphQL. Nous avons utilisé la library Material-UI pour créer
    les composants et leur design, React-Query pour gérer les requêtes HTTP de l'application,
    et React-Router pour gérer les routes de l'application. Pour le côté serveur, nous avons utilisé firestore
    pour garder en mémoire les comptes et les données des utilisateurs.
    Je me suis occupé de la partie search (la page qui permet de rechercher les mangas) et
    info (la page qui donne toutes les infos d'un anime ou manga).
    J'ai' appris beaucoup de nouvelles choses au cours de ce projet, ce fut donc une expérience très positive.`,

      `In a group of 4 developers, we created a website that allows searching for
      manga and anime. The work lasted a month, divided into 4 sprints of one week each,
      following the agile SCRUM methodology. We used the anilist.co website API to retrieve
      manga and anime data with GraphQL. We used the Material-UI library to create
      the components and their design, React-Query to manage the application's HTTP requests,
      and React-Router to manage application routes. For the server side, we used firestore to store user accounts and data.
      I took care of the search part (the page that allows you to search for manga) and
      the info part (the page that gives all the info about an anime or manga).
      I learned a lot of new things during this project so it was a very positive experience.`,

      `En un grupo de 4 desarrolladores, creamos un sitio web que permite buscar
      manga y anime. El trabajo tuvo una duración de un mes, dividido en 4 sprints de una semana cada uno,
      siguiendo la metodología ágil SCRUM. Utilizamos la API del sitio web anilist.co para recuperar
      datos de manga y anime con GraphQL. Usamos la biblioteca Material-UI para crear
      los componentes y su diseño, React-Query para gestionar las solicitudes HTTP de la aplicación,
      y React-Router para administrar rutas de aplicaciones. Para el lado del servidor,
      usamos firestore para almacenar cuentas de usuario y datos.
      Me encargué de la parte de búsqueda (la página que nos permite buscar anime o manga) y
      la información (la página que nos da toda la información sobre un anime o manga).
      Aprendí muchas cosas nuevas durante este proyecto, por lo que fue una experiencia muy positiva.`
    ),
    translation: [{ translation: translation("Anglais", "English", "Inglés"), iso: "gb" }],
  },
  {
    title: "Au verger",
    imgs: ["public/imgs/Au verger - home page.jpg"],
    url: PROJECT_AU_VERGER_URL,
    gitHub: PROJECT_AU_VERGER_GITHUB_URL,
    type: experience_type.showcase_site,
    theme: translation("Immobilier", "Real estate", "Bienes raíces"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [reactImg, TSImg, HTMLImg, CSSImg],
    details: ["Responsive", "Mobile first", "API"],
    description: translation(
      `J'ai créé un site vitrine pour une chambre d'hôte sur Booking.com située dans le 06.
    Je me suis aussi occupé du design du site car je n'avais pas de maquette.
    J'ai utilisé une API pour récupérer les commentaires des clients sur Booking.com les plus récents,
    ainsi que l'API de OpenStreetMap pour indiquer la localisation de la chambre d'hôte sur une carte.
    J'ai utilisé React-Router pour gérer les routes de l'application.
    J'ai utilisé la library "Aos" pour créer des animations sur le site au scroll.`,

      `Not translated yet`,

      `Aún no traducido`
    ),
    translation: [
      { translation: translation("Français", "French", "Francés"), iso: "fr" },
      { translation: translation("Anglais", "English", "Inglés"), iso: "gb" },
      { translation: translation("Espagnol", "Spanish", "Español"), iso: "es" },
    ],
  },
  {
    title: "Dressly",
    imgs: ["public/imgs/Dressly - Paris.jpg"],
    url: PROJECT_DRESSLY_URL,
    gitHub: PROJECT_DRESSLY_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Météorologie", "Meteorology", "Meteorología"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [reactImg, TSImg, HTMLImg, CSSImg],
    details: ["API", "Material-UI", "React-Query", "React-Router", "Local Storage"],
    description: translation(
      `J'ai créé un site qui annonce la météo du jour et de la semaine partout sur terre.
    J'ai utilisé l'API de OpenWeatherMap pour récupérer les données météo.
    Je récupère la longitude et la latitude de l'utilisateur pour afficher le temps de la ville où l'utilisateur se trouve.`,

      `Not translated yet`,

      `Aún no traducido`
    ),
    translation: [{ translation: translation("Espagnol", "Spanish", "Español"), iso: "es" }],
  },
  {
    title: "Mes challenges Frontend Mentor",
    imgs: ["public/imgs/ecommerce-product-page.png"],
    url: PROJECT_CHALLENGES_FRONTEND_MENTOR_URL,
    gitHub: PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL,
    type: experience_type.challenges,
    theme: translation("Challenges", "Challenges", "Desafíos"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [reactImg, TSImg, JSImg, HTMLImg, CSSImg],
    details: ["Responsive", "Mobile first"],
    description: translation(
      `J'ai réussi plusieurs challenges au fil du temps sur le site Frontend Mentor.
    Les challenges m'ont beaucoup aidé au début pour progresser, vous pouvez aller voir les résultats
    en cliquant sur les liens au-dessus.`,
      `Not translated yet`,
      `Aún no traducido`
    ),
    translation: [{ translation: translation("Anglais", "English", "Inglés"), iso: "gb" }],
  },
  {
    title: "Mon portfolio",
    imgs: ["public/imgs/Mon portfolio - home page.jpg"],
    url: PROJECT_MY_PORTFOLIO_URL,
    gitHub: PROJECT_MY_PORTFOLIO_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Professionnel", "Professional", "Profesional"),
    time: translation("2023", "2023", "2023"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [reactImg, TSImg, HTMLImg, CSSImg],
    details: [],
    description: translation(
      `J'ai créé Mon portfolio pour présenter mes projets et mes compétences.
    J'ai utilisé React.js et TypeScript pour créer ce site.`,

      `Not yet translated`,

      `Aún no traducido`
    ),
    translation: [
      { translation: translation("Français", "French", "Francés"), iso: "fr" },
      { translation: translation("Anglais", "English", "Inglés"), iso: "gb" },
      { translation: translation("Espagnol", "Spanish", "Español"), iso: "es" },
    ],
  },
];
