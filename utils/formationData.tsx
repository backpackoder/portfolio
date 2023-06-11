// Utils
import { CSS, HTML, JS, NEXT, REACT, TS } from "./myStacks";

// Types
import { formationDataType } from "@/types/types";

// Commons
import {
  FORMATION_AUTODIDACTE_IMAGE,
  FORMATION_NEXTJS_THE_FULL_COURSE_IMAGE,
  FORMATION_NEXTJS_THE_FULL_COURSE_URL,
  FORMATION_REACT_MASTERY_IMAGE,
  FORMATION_REACT_MASTERY_URL,
  FORMATION_TYPESCRIPT_PRO_IMAGE,
  FORMATION_TYPESCRIPT_PRO_URL,
} from "../commons/commons";

// Languages
import { translation } from "@/languages/languages";

export const formationData: formationDataType[] = [
  {
    title: translation("En autodidacte", "Self-taught", "Autodidacta"),
    image: FORMATION_AUTODIDACTE_IMAGE,
    url: "",
    time: translation(
      "depuis toujours et pour toujours",
      "since always and forever",
      "desde siempre y para siempre"
    ),
    stack: [NEXT.img, REACT.img, TS.img, JS.img, HTML.img, CSS.img],
    catchphrase: translation(
      `La meilleure façon d'apprendre est de faire des recherches sur Internet.`,
      `The best way to learn is to do research on the Internet.`,
      `La mejor manera de aprender es investigar en Internet.`
    ),
    description: {
      introduction: translation(
        `Et oui, j'ai commencé à apprendre la programmation en autodidacte avec le HTML, le CSS et
    le JavaScript grâce à plein de super sites sur internet.
    Dès que j'apprends quelque chose de nouveau, je fais toujours des recherches sur Internet par moi-même.`,
        `Indeed, I started learning programming on my own with HTML, CSS and JavaScript thanks to
        many great websites on the internet.
        As soon as I learn something new, I always do research on the Internet by myself.`,
        `Así es, empecé a aprender programación por mi cuenta con HTML, CSS y JavaScript gracias a
        muchos sitios web geniales en Internet.
        Tan pronto como aprendo algo nuevo, siempre investigo en Internet por mi cuenta.`
      ),
      content: translation(
        `Je pense que tout programmeur doit avoir un esprit autodidacte, peu importe la stack qu'il
    utilise car les languages évoluent au fil du temps donc il faut regarder les docs pour
    rester à jour, et car personne ne sait tout à 100% d'un language donc des fois on ne sait
    pas comment résoudre un problème donc il faut savoir trouver les informations sur Internet
    afin de résoudre les problèmes rencontrés.`,
        `I think every programmer must have a self-taught mind, no matter what stack he uses
        because languages evolve over time so you have to look at the docs to
        stay up to date, and because no one knows everything 100% of a language so sometimes we don't know
        how to solve a problem so you have to know how to find information on the Internet
        in order to solve the problems encountered.`,
        `Creo que todo programador debe tener una mente autodidacta, sin importar la stack que use
        porque los lenguajes evolucionan con el tiempo, por lo que hay que mirar la documentación para
        mantenerse al día, y porque nadie sabe todo al 100% de un lenguaje, así que a veces no sabemos
        cómo resolver un problema, así que hay que saber cómo encontrar información en Internet
        para resolver los problemas encontrados.`
      ),
      conclusion: translation(
        `Je suis donc quelqu'un qui fait toujours des recherches sur Internet pour apprendre
      et je fais la veille technologique très régulièrement.`,
        `So I am someone who always does research on the Internet to learn
        and I do technological monitoring very regularly.`,
        `Así que soy alguien que siempre hace investigaciones en Internet para aprender
        y hago un seguimiento tecnológico muy regularmente.`
      ),
    },
  },
  {
    title: translation("React Mastery", "React Mastery", "React Mastery"),
    image: FORMATION_REACT_MASTERY_IMAGE,
    url: FORMATION_REACT_MASTERY_URL,
    time: translation("2022", "2022", "2022"),
    stack: [REACT.img, JS.img, HTML.img, CSS.img],
    catchphrase: translation(
      `La formation React complète qui m'a converti en développeur front-end confirmé.`,
      `The complete React training that made me a confirmed front-end developer.`,
      `La formación completa de React que me convirtió en un desarrollador front-end confirmado.`
    ),
    description: {
      introduction: translation(
        `Je suis devenu un développeur front-end confirmé avec le framework React grâce à cette formation.`,
        `I became a confirmed front-end developer with the React framework thanks to this training.`,
        `Me convertí en un desarrollador front-end confirmado con el framework React gracias a esta formación.`
      ),
      content: translation(
        `Premièrement, nous avons revu les bases du JavaScript qui sont utiles pour bien maîtriser React.<br />
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
      À la fin de la formation, j'ai commencé un projet en équipe pour avoir une expérience de travail en entreprise.<br />
      Le projet s'appelle "Manganime" et vous pouvez le voir dans la partie "Projets" de mon portfolio.`,
        `First, we reviewed the basics of JavaScript that are useful for mastering React.<br />
        We saw how to modify the DOM and the use of JSX.<br />
        Then, we learned how to create React components and manage props.<br />
        We learned the basic design pattern of React (Prop functions, HOC, state hoisting, Lifting state up, etc...).<br />
        We saw the use of common and more advanced hooks (useState, useEffect, useMemo, useCallback etc...).<br />
        We refactored an IOS calculator application from class component to function component with hooks.<br />
        We learned how to make and manage simple and advanced HTTP calls with Axios.<br />
        Finally, we studied advanced design patterns (Composite components, Props control, state reducer, etc...).<br />
        Then, we saw how to do unit tests with libraries such as Jest or React Testing Library.<br />
        Black box tests, types of mocks, unit tests, API, custom hooks, integration,
        end-to-end, etc...<br />
        Then, we created a Time Tracker application to master everything we learned.<br />
        After this application, we created the Netflix clone, which is a complete project that proves our level, and
        we saw more things like MUI, fetching and skeletons, managing routes with React Router DOM, managing
        authentication, cache, and finally production and deployment.<br />
        At the end of the training, I started a team project to have a work experience in a company.<br />
        The project is called "Manganime" and you can see it in the "Projects" section of my portfolio.`,
        `Primero, revisamos los conceptos básicos de JavaScript que son útiles para dominar React.<br />
        Vimos cómo modificar el DOM y el uso de JSX.<br />
        Luego, aprendimos a crear componentes React y administrar props.<br />
        Aprendimos el patrón de diseño básico de React (funciones de prop, HOC, elevación de estado, elevación de estado, etc...).<br />
        Vimos el uso de hooks comunes y más avanzados (useState, useEffect, useMemo, useCallback etc...).<br />
        Refactorizamos una aplicación de calculadora IOS de componente de clase a componente de función con hooks.<br />
        Aprendimos a hacer y administrar llamadas HTTP simples y avanzadas con Axios.<br />
        Finalmente, estudiamos patrones de diseño avanzados (Componentes compuestos, Control de props, reductor de estado, etc...).<br />
        Luego, vimos cómo hacer pruebas unitarias con bibliotecas como Jest o React Testing Library.<br />
        Pruebas de caja negra, tipos de mocks, pruebas unitarias, API, hooks personalizados, integración,
        end-to-end, etc...<br />
        Luego, creamos una aplicación de Time Tracker para dominar todo lo que aprendimos.<br />
        Después de esta aplicación, creamos el clon de Netflix, que es un proyecto completo que demuestra nuestro nivel, y
        vimos más cosas como MUI, fetching y skeletons, administrar rutas con React Router DOM, administrar
        autenticación, caché, y finalmente producción y despliegue.<br />
        Al final de la formación, comencé un proyecto en equipo para tener una experiencia laboral en una empresa.<br />
        El proyecto se llama "Manganime" y puedes verlo en la sección "Proyectos" de mi portfolio.`
      ),
      conclusion: translation(
        `Je suis très satisfait de ce que cette formation m'a apporté, et je la recommande donc
      à tous ceux qui veulent devenir développeur React.`,
        `I am very satisfied with what this training has brought me, and I therefore recommend it
        to anyone who wants to become a React developer.`,
        `Estoy muy satisfecho con lo que me ha aportado esta formación, y por lo tanto la recomiendo
        a cualquiera que quiera convertirse en desarrollador React.`
      ),
    },
  },
  {
    title: translation("Typescript Pro", "Typescript Pro", "Typescript Pro"),
    image: FORMATION_TYPESCRIPT_PRO_IMAGE,
    url: FORMATION_TYPESCRIPT_PRO_URL,
    time: translation("2022", "2022", "2022"),
    stack: [TS.img, REACT.img],
    catchphrase: translation(
      `Formation sur TypeScript pour avoir un code de qualité supérieure`,
      `Training on TypeScript to have a higher quality code`,
      `Formación sobre TypeScript para tener un código de mayor calidad`
    ),
    description: {
      introduction: translation(
        `Suite à la formation de React Mastery, je me suis formé sur TypeScript avec la formation
      "TypeScript PRO" pour pouvoir utiliser React.js avec TypeScript.`,
        `Following the React Mastery training, I trained on TypeScript with the training
        "TypeScript PRO" to be able to use React.js with TypeScript.`,
        `Tras la formación de React Mastery, me formé en TypeScript con la formación
        "TypeScript PRO" para poder utilizar React.js con TypeScript.`
      ),
      content: translation(
        `Nous avons appris à installer TypeScript et à configurer le projet.<br />
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
        `We learned how to install TypeScript and configure the project.<br />
        We saw the basic types of TypeScript, as well as the advanced types, generics, aliases, interfaces etc...<br />
        Also, we saw enums, tuples, classes, interfaces, modules, signatures, etc...<br />
        For a concrete learning, we created a small application to search for NFTs in native TS,
        then in another module, we made it more complex by using the React.js framework.<br />
        For advanced TypeScript, we saw operators, intersections, unions, narrowing, overloads,
        shorthand, abstract methods, classes, etc...<br />
        Then, for expert level TypeScript, we delved into itators, decorators, utility types,
        Intrinsic String Manipulation Types, how to type API calls, etc...<br />
        Then, we saw design patterns like singleton, factory, proxy, adapter, facade, etc...<br />
        Finally, we saw how to perform tests with TypeScript.`,
        `Aprendimos a instalar TypeScript y a configurar el proyecto.<br />
        Vimos los tipos básicos de TypeScript, así como los tipos avanzados, genéricos, alias, interfaces etc...<br />
        También vimos enums, tuplas, clases, interfaces, módulos, firmas, etc...<br />
        Para un aprendizaje concreto, creamos una pequeña aplicación para buscar NFTs en TS nativo,
        luego en otro módulo, la hicimos más compleja usando el framework React.js.<br />
        Para TypeScript avanzado, vimos operadores, intersecciones, uniones, estrechamientos, sobrecargas,
        shorthand, métodos abstractos, clases, etc...<br />
        Luego, para TypeScript de nivel experto, nos adentramos en itadores, decoradores, tipos de utilidad,
        Intrinsic String Manipulation Types, cómo escribir llamadas a API, etc...<br />
        Luego, vimos patrones de diseño como singleton, factory, proxy, adapter, facade, etc...<br />
        Finalmente, vimos cómo realizar pruebas con TypeScript.`
      ),
      conclusion: translation(
        `Je suis très satisfait de ce que cette formation m'a apporté car j'ai pu actualiser tous
      mes anciens projets JavaScript en TypeScript, je la recommande donc à tous ceux qui veulent devenir bon avec TypeScript.`,
        `I am very satisfied with what this training has brought me because I was able to update all
        my old JavaScript projects in TypeScript, so I recommend it to anyone who wants to become good with TypeScript.`,
        `Estoy muy satisfecho con lo que me ha aportado esta formación porque he podido actualizar todos
        mis antiguos proyectos JavaScript en TypeScript, por lo que la recomiendo a cualquiera que quiera convertirse en bueno
        con TypeScript.`
      ),
    },
  },
  {
    title: translation(
      "Next.js 13 - The Full Course",
      "Next.js 13 - The Full Course",
      "Next.js 13 - The Full Course"
    ),
    image: FORMATION_NEXTJS_THE_FULL_COURSE_IMAGE,
    url: FORMATION_NEXTJS_THE_FULL_COURSE_URL,
    time: translation("2023", "2023", "2023"),
    stack: [NEXT.img, REACT.img, TS.img],
    catchphrase: translation(
      `Formation sur Next.js, le framework indispensable pour React`,
      `Training on Next.js, the essential framework for React`,
      `Formación sobre Next.js, el framework esencial para React`
    ),
    description: {
      introduction: translation(
        `Suite à la formation de React Mastery, je me suis formé sur Next.js pour pouvoir utiliser
        la version 13 de Next avec React.`,
        `Following the React Mastery training, I trained on Next.js to be able to
        use version 13 of Next with React.`,
        `Tras la formación de React Mastery, me formé en Next.js para poder utilizar
        la versión 13 de Next con React.`
      ),
      content: translation(
        `Installation d'un projet Next.js et comment le configurer.<br />
      Les bases de Next.js, les pages, les routes, les liens, les images, les composants, etc...<br />
      Des design patterns avec les React Server Components (RSC).<br />
      Comment choisir les stratégies de rendu optimales.<br />
      NLe routage dynamique et l'organisation du projet.<br />
      Le fetching de données avancé et le caching.<br />
      L'authentification utilisateur avec Auth.js.<br />
      NLa modélisation des données avec Postgres et Prisma.<br />
      Comment migrer des anciennes versions de Next.js.`,
        `Installation of a Next.js project and how to configure it.<br />
      The basics of Next.js, pages, routes, links, images, components, etc...<br />
      Design patterns with React Server Components (RSC).<br />
      How to choose optimal rendering strategies.<br />
      Dynamic routing and project organization.<br />
      Advanced data fetching and caching.<br />
      User authentication with Auth.js.<br />
      Data modeling with Postgres and Prisma.<br />
      How to migrate old versions of Next.js.`,
        `Instalación de un proyecto Next.js y cómo configurarlo.<br />
      Lo básico de Next.js, páginas, rutas, enlaces, imágenes, componentes, etc...<br />
      Patrones de diseño con React Server Components (RSC).<br />
      Cómo elegir las estrategias de renderizado óptimas.<br />
      Enrutamiento dinámico y organización del proyecto.<br />
      Obtención avanzada de datos y almacenamiento en caché.<br />
      Autenticación de usuarios con Auth.js.<br />
      Modelado de datos con Postgres y Prisma.<br />
      Cómo migrar versiones antiguas de Next.js.`
      ),
      conclusion: translation(
        `Dès le premier jour d'utilisation, je suis tombé amoureux de Next.
        J'ai donc décidé d'acquérir une formation afin de me spécialiser dans mon framework back de cœur.
        Je suis très satisfait de ce que cette formation m'a apporté car j'ai pu actualiser certains de
      mes anciens projets React.js en Next.js, je la recommande donc à tous ceux qui veulent devenir bon avec Next.js 13.`,
        `From the first day of use, I fell in love with Next.
        So I decided to acquire a training in order to specialize in my favorite back framework.
        I am very satisfied with what this training has brought me because I was able to update some of
        my old React.js projects in Next.js, so I recommend it to anyone who wants to become good with Next.js 13.`,
        `Desde el primer día de uso, me enamoré de Next.
        Así que decidí adquirir una formación para especializarme en mi framework back favorito.
        Estoy muy satisfecho con lo que me ha aportado esta formación porque he podido actualizar algunos de
          mis antiguos proyectos React.js en Next.js, por lo que la recomiendo a cualquiera que quiera convertirse en bueno con Next.js 13.`
      ),
    },
  },
];
