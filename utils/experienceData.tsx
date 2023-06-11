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
  PROJECT_MY_WISE_QUOTES_GITHUB_URL,
  PROJECT_MY_WISE_QUOTES_URL,
  PROJECT_NATIONS_QUIZ_GITHUB_URL,
  PROJECT_NATIONS_QUIZ_URL,
} from "../commons/commons";

// Languages
import { translation } from "../languages/languages";

// Utils
import { CSS, HTML, JS, NEXT, REACT, TS } from "./myStacks";

// Types
import { ExperienceProps, Experience_type } from "../types/types";

const experience_type: Experience_type = {
  showcase_site: translation("Site vitrine", "Showcase site", "Sitio de exhibición"),
  e_commerce: translation("Site E-commerce", "E-commerce", "E-commerce"),
  website: translation("Site web", "Website", "Sitio web"),
  mobile_app: translation("Application mobile", "Mobile app", "Aplicación móvil"),
  challenges: translation("Challenges", "Challenges", "Desafíos"),
};

export const experienceData: ExperienceProps[] = [
  {
    title: "Manganime",
    imgs: ["Manganime - infos.png"],
    url: PROJECT_MANGANIME_URL,
    gitHub: PROJECT_MANGANIME_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Cinématographie", "Cinematography", "Cine"),
    time: translation("Janvier 2023", "January 2023", "Enero 2023"),
    team: translation("En équipe", "In a team", "En equipo"),
    stack: [REACT.img, JS.img],
    details: ["API", "GraphQL", "Material-UI", "React-Query", "React-Router"],
    catchphrase: translation(
      "Site web qui permet de rechercher des mangas et des animes",
      "Website that allows searching for manga and anime",
      "Sitio web que permite buscar manga y anime"
    ),
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
    title: "Nations quiz",
    imgs: ["Nations quiz - home page.png"],
    url: PROJECT_NATIONS_QUIZ_URL,
    gitHub: PROJECT_NATIONS_QUIZ_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Géographie", "Geography", "Geografía"),
    time: translation("Avril 2023", "April 2023", "Abril 2023"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [REACT.img, TS.img],
    details: ["Supabase", "API", "React-Query", "React-Router", "i18n"],
    catchphrase: translation(
      "Jouez à un quiz et testez vos connaissances sur les pays du monde",
      "Play a quiz and test your knowledge of the countries of the world",
      "Juega un cuestionario y prueba tus conocimientos sobre los países del mundo"
    ),
    description: translation(
      `J'ai créé un site web qui permet de tester ses connaissances sur les pays du monde.
    J'ai utilisé l'API du site restcountries.com pour récupérer les données des pays.
    J'ai utilisé la library React-Query pour gérer les requêtes HTTP de l'application, et React-Router pour gérer
    les routes de l'application.
    J'ai approfondi mes connaissances en Javascript car créer des jeux est un bon moyen de s'entraîner.
    J'ai appris beaucoup de nouvelles choses au cours de ce projet, ce fut donc une expérience très positive.`,
      `I created a website that allows you to test your knowledge of the countries of the world.
      I used the API of the restcountries.com website to retrieve country data.
      I used the React-Query library to manage the application's HTTP requests, and React-Router to manage
      application routes.
      I deepened my knowledge of Javascript because creating games is a good way to train.
      I learned a lot of new things during this project so it was a very positive experience.`,
      `Creé un sitio web que permite poner a prueba tus conocimientos sobre los países del mundo.
      Utilicé la API del sitio web restcountries.com para recuperar datos de países.
      Utilicé la biblioteca React-Query para administrar las solicitudes HTTP de la aplicación y React-Router para administrar
      rutas de aplicaciones.
      Profundicé mis conocimientos de Javascript porque crear juegos es una buena manera de entrenar.
      Aprendí muchas cosas nuevas durante este proyecto, por lo que fue una experiencia muy positiva.`
    ),
    translation: [
      { translation: translation("Français", "French", "Francés"), iso: "fr" },
      { translation: translation("Anglais", "English", "Inglés"), iso: "gb" },
      { translation: translation("Espagnol", "Spanish", "Español"), iso: "es" },
    ],
  },

  // {
  //   title: "My wise quotes",
  //   imgs: ["My wise quotes - home page.png"],
  //   url: PROJECT_MY_WISE_QUOTES_URL,
  //   gitHub: PROJECT_MY_WISE_QUOTES_GITHUB_URL,
  //   type: experience_type.website,
  //   theme: translation("Littérature", "Literature", "Literatura"),
  //   time: translation("Mai 2023", "May 2023", "Mayo 2023"),
  //   team: translation("En solo", "Solo", "En solitario"),
  //   stack: [NEXT.img, REACT.img, TS.img],
  //   details: ["Supabase", "next-auth", "API", "Tailwind CSS"],
  //   catchphrase: translation(
  //     "Découvrez des citations et leurs autheurs et gardez vos préférés",
  //     "Discover quotes and their authors and keep your favorites",
  //     "Descubre citas y sus autores y guarda tus favoritos"
  //   ),
  //   description: translation(
  //     `J'ai créé un site web qui permet de découvrir et garder ces citations préférées.
  //   J'ai utilisé l'API "quotable" pour récupérer les citations.
  //   J'ai utilisé la library next-auth pour gérer l'authentification des utilisateurs.
  //   J'ai utilisé Supabase pour stocker les données des utilisateurs.
  //   J'ai utilisé la library Tailwind CSS pour le design du site.
  //   J'ai appris beaucoup de nouvelles choses au cours de ce projet, ce fut donc une expérience très positive.`,
  //     `I created a website that allows you to discover and keep your favorite quotes.
  //     I used the "quotable" API to retrieve quotes.
  //     I used the next-auth library to manage user authentication.
  //     I used Supabase to store user data.
  //     I used the Tailwind CSS library for the design of the site.
  //     I learned a lot of new things during this project so it was a very positive experience.`,
  //     `Creé un sitio web que permite descubrir y guardar tus citas favoritas.
  //     Utilicé la API "quotable" para recuperar citas.
  //     Utilicé la biblioteca next-auth para administrar la autenticación de los usuarios.
  //     Utilicé Supabase para almacenar los datos de los usuarios.
  //     Utilicé la biblioteca Tailwind CSS para el diseño del sitio.
  //     Aprendí muchas cosas nuevas durante este proyecto, por lo que fue una experiencia muy positiva.`
  //   ),
  //   translation: [{ translation: translation("Anglais", "English", "Inglés"), iso: "gb" }],
  // },

  {
    title: "Au verger",
    imgs: ["Au verger - home page.jpg"],
    url: PROJECT_AU_VERGER_URL,
    gitHub: PROJECT_AU_VERGER_GITHUB_URL,
    type: experience_type.showcase_site,
    theme: translation("Immobilier", "Real estate", "Bienes raíces"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [REACT.img, TS.img],
    details: ["Responsive", "Mobile first", "API", "i18n"],
    catchphrase: translation(
      "Site de présentation d'une chambre d'hôte sur la côte d'azur",
      "Showcase site of a guest room on the French Riviera",
      "Sitio de presentación de una habitación de huéspedes en la Riviera francesa"
    ),
    description: translation(
      `J'ai créé un site vitrine pour une chambre d'hôte sur Booking.com située dans le 06.
    Je me suis aussi occupé du design du site car je n'avais pas de maquette.
    J'ai utilisé une API pour récupérer les commentaires des clients sur Booking.com les plus récents,
    ainsi que l'API de OpenStreetMap pour indiquer la localisation de la chambre d'hôte sur une carte.
    J'ai utilisé React-Router pour gérer les routes de l'application.
    J'ai utilisé la library "Aos" pour créer des animations sur le site au scroll.`,
      `I created a showcase site for a guest room on Booking.com located in the 06.
      I also took care of the design of the site because I didn't have a model.
      I used an API to retrieve the most recent customer reviews on Booking.com,
      as well as the OpenStreetMap API to indicate the location of the guest room on a map.
      I used React-Router to manage the routes of the application.
      I used the "Aos" library to create animations on the site when scrolling.`,
      `Creé un sitio web de escaparate para una habitación de huéspedes en Booking.com ubicada en el 06.
      También me encargué del diseño del sitio porque no tenía un modelo.
      Utilicé una API para recuperar las reseñas más recientes de los clientes en Booking.com,
      así como la API de OpenStreetMap para indicar la ubicación de la habitación de huéspedes en un mapa.
      Utilicé React-Router para administrar las rutas de la aplicación.
      Utilicé la biblioteca "Aos" para crear animaciones en el sitio al desplazarse.`
    ),
    translation: [
      { translation: translation("Français", "French", "Francés"), iso: "fr" },
      { translation: translation("Anglais", "English", "Inglés"), iso: "gb" },
      { translation: translation("Espagnol", "Spanish", "Español"), iso: "es" },
    ],
  },
  {
    title: "Dressly",
    imgs: ["Dressly - Paris.jpg"],
    url: PROJECT_DRESSLY_URL,
    gitHub: PROJECT_DRESSLY_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Météorologie", "Meteorology", "Meteorología"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [REACT.img, JS.img],
    details: ["API", "Material-UI", "React-Query", "React-Router", "Local Storage"],
    catchphrase: translation(
      "Site qui annonce la météo du jour et de la semaine partout sur terre",
      "Site that announces the weather of the day and the week everywhere on earth",
      "Sitio que anuncia el clima del día y la semana en todas partes de la tierra"
    ),
    description: translation(
      `J'ai créé un site qui annonce la météo du jour et de la semaine partout sur terre.
    J'ai utilisé l'API de OpenWeatherMap pour récupérer les données météo.
    Je récupère la longitude et la latitude de l'utilisateur pour afficher le temps de la ville où l'utilisateur se trouve.`,
      `I created a site that announces the weather of the day and the week everywhere on earth.
      I used the OpenWeatherMap API to retrieve weather data.
      I retrieve the longitude and latitude of the user to display the weather of the city where the user is.`,
      `Creé un sitio que anuncia el clima del día y la semana en todas partes de la tierra.
      Utilicé la API de OpenWeatherMap para recuperar datos meteorológicos.
      Recupero la longitud y la latitud del usuario para mostrar el clima de la ciudad donde se encuentra el usuario.`
    ),
    translation: [{ translation: translation("Espagnol", "Spanish", "Español"), iso: "es" }],
  },
  {
    title: "Mes challenges Frontend Mentor",
    imgs: ["ecommerce-product-page.png"],
    url: PROJECT_CHALLENGES_FRONTEND_MENTOR_URL,
    gitHub: PROJECT_CHALLENGES_FRONTEND_MENTOR_GITHUB_URL,
    type: experience_type.challenges,
    theme: translation("Challenges", "Challenges", "Desafíos"),
    time: translation("2022", "2022", "2022"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [NEXT.img, REACT.img, TS.img, JS.img, HTML.img, CSS.img],
    details: ["Responsive", "Mobile first"],
    catchphrase: translation(
      "Mes challenges sur Frontend Mentor",
      "My challenges on Frontend Mentor",
      "Mis desafíos en Frontend Mentor"
    ),
    description: translation(
      `J'ai réussi plusieurs challenges au fil du temps sur le site Frontend Mentor.
    Les challenges m'ont beaucoup aidé au début pour progresser, vous pouvez aller voir les résultats
    en cliquant sur les liens au-dessus.`,
      `I succeeded in several challenges over time on the Frontend Mentor site.
      The challenges helped me a lot at the beginning to progress, you can go see the results
      by clicking on the links above.`,
      `Tuve éxito en varios desafíos con el tiempo en el sitio Frontend Mentor.
      Los desafíos me ayudaron mucho al principio a progresar, puedes ir a ver los resultados
      haciendo clic en los enlaces de arriba.`
    ),
    translation: [{ translation: translation("Anglais", "English", "Inglés"), iso: "gb" }],
  },
  {
    title: "Mon portfolio",
    imgs: ["Mon portfolio - home page.png"],
    url: PROJECT_MY_PORTFOLIO_URL,
    gitHub: PROJECT_MY_PORTFOLIO_GITHUB_URL,
    type: experience_type.website,
    theme: translation("Professionnel", "Professional", "Profesional"),
    time: translation("2023", "2023", "2023"),
    team: translation("En solo", "Solo", "En solitario"),
    stack: [NEXT.img, REACT.img, TS.img],
    details: ["Responsive", "Mobile first", "SEO", "Video"],
    catchphrase: translation(
      "Mon portfolio (le site où vous êtes actuellement)",
      "My portfolio (the site you are currently on)",
      "Mi portfolio (el sitio en el que se encuentra actualmente)"
    ),
    description: translation(
      `J'ai créé Mon portfolio avec Next.js et TypeScript pour présenter mes projets et mes compétences.`,
      `I created My portfolio with Next.js and TypeScript to present my projects and my skills.`,
      `Creé Mi portfolio con Next.js y TypeScript para presentar mis proyectos y mis habilidades.`
    ),
    translation: [
      { translation: translation("Français", "French", "Francés"), iso: "fr" },
      { translation: translation("Anglais", "English", "Inglés"), iso: "gb" },
      { translation: translation("Espagnol", "Spanish", "Español"), iso: "es" },
    ],
  },
];
