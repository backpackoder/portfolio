// Icons
import {
  FaBook,
  FaHamburger,
  FaCode,
  FaGamepad,
  FaPlane,
  FaSkiing,
  FaFootballBall,
} from "react-icons/fa";

// Languages
import { translation } from "../languages/languages";

export const hobbies = [
  {
    icon: <FaPlane />,
    text: translation("Partir en voyage", "Travel", "Viajar"),
  },
  {
    icon: <FaFootballBall />,
    text: translation("Jouer au football", "Play football", "Jugar al fútbol"),
  },
  {
    icon: <FaGamepad />,
    text: translation("Jouer aux jeux vidéos", "Play video games", "Jugar a los videojuegos"),
  },
  {
    icon: <FaCode />,
    text: translation("Programmer", "Programmation", "Programar"),
  },
  {
    icon: <FaBook />,
    text: translation("Apprendre de nouvelles choses", "Learn new things", "Aprender cosas nuevas"),
  },
  {
    icon: <FaSkiing />,
    text: translation("Faire du ski", "Go skiing", "Esquiar"),
  },
  {
    icon: <FaHamburger />,
    text: translation("Goûter des plats typiques", "Taste typical dishes", "Probar platos típicos"),
  },
];
