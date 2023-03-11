// Icons
import {
  faBook,
  faBowlFood,
  faCode,
  faGamepad,
  faPlane,
  faSkiing,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

// Languages
import { translation } from "../languages/languages";

// Utils
import { fontMaker } from "./fontMaker";

export const hobbies = [
  {
    icon: fontMaker({ icon: faPlane }),
    text: translation("Partir en voyage", "Travel", "Viajar"),
  },
  {
    icon: fontMaker({ icon: faSoccerBall }),
    text: translation("Jouer au football", "Play football", "Jugar al fútbol"),
  },
  {
    icon: fontMaker({ icon: faGamepad }),
    text: translation("Jouer aux jeux vidéos", "Play video games", "Jugar a los videojuegos"),
  },
  {
    icon: fontMaker({ icon: faCode }),
    text: translation("Programmer", "Programmation", "Programar"),
  },
  {
    icon: fontMaker({ icon: faBook }),
    text: translation("Apprendre de nouvelles choses", "Learn new things", "Aprender cosas nuevas"),
  },
  {
    icon: fontMaker({ icon: faSkiing }),
    text: translation("Faire du ski", "Go skiing", "Esquiar"),
  },
  {
    icon: fontMaker({ icon: faBowlFood }),
    text: translation("Goûter des plats typiques", "Taste typical dishes", "Probar platos típicos"),
  },
];
