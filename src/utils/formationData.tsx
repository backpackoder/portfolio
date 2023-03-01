// Commons
import {
  FORMATION_AUTODIDACTE_IMAGE,
  FORMATION_REACT_MASTERY_IMAGE,
  FORMATION_REACT_MASTERY_URL,
  FORMATION_TYPESCRIPT_PRO_IMAGE,
  FORMATION_TYPESCRIPT_PRO_URL,
} from "../commons/commons";

type formationDataType = {
  title: string;
  image: string;
  url: string;
  time: string;
  description: {
    introduction: string;
    content: string;
    conclusion: string;
  };
}[];

export const formationData: formationDataType = [
  {
    title: "Formation React Mastery",
    image: FORMATION_REACT_MASTERY_IMAGE,
    url: FORMATION_REACT_MASTERY_URL,
    time: "2022",
    description: {
      introduction: `Je suis devenu un développeur front-end confirmé avec le framework React grâce à cette formation.`,
      content: `Premièrement, nous avons revu les bases du JavaScript qui sont utiles pour bien maîtriser React.<br />
      Nous avons vu comment modifier le DOM et l'utilisation de JSX.<br />
      Ensuite, nous avons appris à créer des composants React et gérer les props.<br />
      Nous avons appris les design pattern de base de React (Prop functions, HOC, state hoisting, Lifting state up, etc...).<br />
      Nous avons vu l'utilisation des hooks communs et plus avancés (useState, useEffect, useMemo, useCallback etc...).<br />
      Nous avons refactorisé une application de calculette IOS de class component en fonction component avec hooks.<br />
      Nous avons appris à appeler et gérer les appels HTTP simples et avancés avec Axios.<br />
      Enfin, nous avons étudié les design patterns avancés (Composants composés, Props control, state reducer, etc...).<br />
      Puis, nous avons vu comment faire des tests unitaires avec des librairies telles que Jest ou React Testing Library.<br />
      Les tests en boîte noire, les types de mockages, les tests unitaires, d'API, de hooks personnalisés, d'intégration,
      end-to-end, etc...<br />
      Ensuite, nous avons créé une application de Tracker de temps pour maîtriser tout ce que nous avons appris.<br />
      Après cette application, nous avons créé le clone de Netflix, qui est un projet complet qui prouve notre niveau, et
      nous avons vu plus de choses comme MUI, le fetching et skeletons, gérer les routes avec le React Router DOM, gérer
      l'authentification, la mémoire cache, et pour finir la mise en production et son deployement.<br />
      À la fin de la formation, j'ai commencé un projet en équipe pour avoir une éxperience de travail en entreprise.<br />
      Le projet s'appelle "Manganime" et vous pouvez le voir dans la partie "Projets" de mon portfolio.`,
      conclusion: `Pour conclure, je suis très satisfait de ce que cette formation m'a apporté, et je la recommande donc
      à tous ceux qui veulent devenir développeur React.`,
    },
  },
  {
    title: "Formation Typescript Pro",
    image: FORMATION_TYPESCRIPT_PRO_IMAGE,
    url: FORMATION_TYPESCRIPT_PRO_URL,
    time: "2022",
    description: {
      introduction: `Suite à la formation de React Mastery, je me suis formé sur TypeScript avec la formation
      "TypeScript PRO" pour pouvoir utiliser React.js avec TypeScript.`,
      content: `Nous avons appris à installer TypeScript et à configurer le projet.<br />
      Nous avons vu les types de base de TypeScript, ainsi que les types avancés, génériques, alias, interfaces etc...<br />
      Aussi, nous avons vu les enums, les tuples, les classes, les interfaces, les modules, les signatures, etc...<br />
      Pour un apprentissage concret, nous avons créé une petite application de recherche de NFTs en TS natif,
      puis dans un autre module, nous l'avons rendu plus complexe en utilisant le framework React.js.<br />
      Pour le TypeScript avancé, nous avons vu les opérateurs, intersections, unions, le narrowing, overloads,
      shorthand, méthodes abstraites, classes, etc...<br />
      Ensuite, pour le TypeScript de niveau expert, nous nous sommes plongés dans les itérators, décorators, utility types,
      Intrinsic String Manipulation Types, comment typer des appels d'API, etc...<br />
      Puis, nous avons vu les design patterns comme le singleton, le factory, le proxy, l'adapter, la facade, etc...<br />
      Pour finir, nous avons vu comment effectuer des tests avec TypeScript.`,
      conclusion: `Pour conclure, je suis très satisfait de ce que cette formation m'a apporté car j'ai pu actualiser tous
      mes anciens projets JavaScript en TypeScript, je la recommande donc à tous ceux qui veulent devenir bon avec TypeScript.`,
    },
  },
  {
    title: "En autodidacte",
    image: FORMATION_AUTODIDACTE_IMAGE,
    url: "",
    time: "depuis toujours et pour toujours",
    description: {
      introduction: `Et oui, j'ai commencé à apprendre la programmation en autodidacte avec le HTML, le CSS et
    le JavaScript grâce à plein de super sites sur internet.`,
      content: `Je pense que tout programmeur doit avoir un esprit autodidacte, peu importe la stack qu'il
    utilise car les languages évoluent au fil du temps donc il faut regarder les docs pour
    rester à jour, et car personne ne sait tout à 100% d'un language donc des fois on ne sait
    pas comment résoudre un problème donc il faut savoir trouver les informations sur Internet
    afin de résoudre les problèmes rencontrés.`,
      conclusion: "",
    },
  },
];
