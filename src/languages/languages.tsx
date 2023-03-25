// Types
import { Languages } from "../types/types";

export function translation(fr: string, en: string, es: string) {
  return {
    fr,
    en,
    es,
  };
}

// About me
export const NAMES = "Thibaut Barbiera";
export const PSEUDO = "backpackoder";
export const JOB = translation(
  "Développeur web front-end",
  "Front-end web developer",
  "Desarrollador web front-end"
);

export const languages: Languages = {
  h1: translation(
    `Bonjour, je m'appelle <span>${NAMES}</span>,<br />votre futur <span>${JOB.fr}</span>.`,
    `Hello, I'm <span>${NAMES}</span>,<br />your future <span>${JOB.en}</span>.`,
    `Hola, soy <span>${NAMES}</span>,<br />su futuro <span>${JOB.es}</span>.`
  ),
  videoNotFound: translation(
    "La vidéo n'a pas pu se charger.",
    "The video could not be loaded.",
    "El video no ha podido cargarse."
  ),
  howToGetMyAttention: translation(
    "Faites un double-clique sur ma tête pour attirer mon attention",
    "Double-click on my face to get my attention",
    "Haga doble clic en mi cabeza para llamar mi atención"
  ),
  howToAskMeAQuestion: translation(
    "Cliquez sur le menu pour me poser des questions",
    "Click on the menu to ask me questions",
    "Haga clic en el menú para hacerme preguntas"
  ),
  askMeSmall: translation(
    "Je vous réponds en vidéo",
    "I answer you in video",
    "Le respondo en video"
  ),
  selectAQuestion: translation(
    "Sélectionnez une question",
    "Select a question",
    "Seleccione una pregunta"
  ),
  questionAboutPresentation: translation(
    "Présente-toi en quelques mots.",
    "Introduce yourself in a few words.",
    "Presentate en pocas palabras."
  ),
  questionAboutStack: translation(
    "Quelles sont tes compétences ?",
    "What are your skills ?",
    "¿Cuáles son tus habilidades?"
  ),
  questionAboutFormation: translation(
    "Comment t'es-tu formé ?",
    "How did you get trained ?",
    "¿Cómo te formaste?"
  ),
  questionAboutExperience: translation(
    "Quelle est ton expérience ?",
    "What is your experience ?",
    "¿Cuál es tu experiencia?"
  ),
  questionAboutProgramming: translation(
    "Qu'est-ce que tu aimes dans la programmation ?",
    "What do you like about programming ?",
    "¿Qué te gusta de la programación?"
  ),
  questionHired: translation("Vous avez le job!", "You got the job!", "¡Tienes el trabajo!"),
  // questionAboutHobbies: translation(
  //   "Quels sont tes passions ?",
  //   "What are your hobbies ?",
  //   "¿Cuáles son tus pasiones?"
  // ),
  downloadMyCV: translation(
    "Télécharger mon CV en PDF",
    "Download my CV in PDF",
    "Descargar mi CV en PDF"
  ),
  stacks: translation("Mes stacks", "My stacks", "Mis stacks"),
  yourProject: translation("Votre projet", "Your project", "Su proyecto"),
  yourProjectDescription: translation(
    `Je serais ravi de vous aider dès que possible dans vos projets en intégrant votre équipe en
  tant que dev frontend React.js - TypeScript.
  <br />
  Je suis capable de créer des sites sur mesure avec un résultat responsive pour tout écran,
  gérer des données venant d'API, comme plein d'autres choses. Je peux aussi effectuer des
  tests avec la méthode TDD pour un code de qualité.`,
    `I would be delighted to help you as soon as possible in your projects by integrating your team as a
    frontend dev React.js - TypeScript.
    <br />
    I am able to create custom sites with a responsive result for any screen, manage data coming from
    API, and many other things. I can also perform tests with the TDD method for quality code.`,
    `Me encantaría ayudarlo lo antes posible en sus proyectos integrando su equipo como un
    dev frontend React.js - TypeScript.
    <br />
    Soy capaz de crear sitios personalizados con un resultado adaptable para cualquier pantalla,
    administrar datos provenientes de API, y muchas otras cosas. También puedo realizar pruebas
    con el método TDD para un código de calidad.`
  ),
  ethic: translation(`Mon éthique de travail`, `My work ethic`, `Mi ética de trabajo`),
  ethicDescription: translation(
    `Je suis une personne méticuleuse qui aime le travail bien fait. Je choisis des projets qui
    allument une flamme en moi et qui me font travailler sans voir les heures passer, car le
    plus important, c'est le projet. Mon but est de dépasser vos attentes pour vous satisfaire
    au maximum.`,
    `I am a meticulous person who likes to do a good job. I choose projects that light a flame in
    me and that make me work without seeing the hours pass, because the most important thing
    is the project. My goal is to exceed your expectations to satisfy you as much as possible.`,
    `Soy una persona meticulosa que le gusta hacer un buen trabajo. Elijo proyectos que encienden
    una llama en mí y que me hacen trabajar sin ver las horas pasar, porque lo más importante
    es el proyecto. Mi objetivo es superar sus expectativas para satisfacerlo lo más posible.`
  ),
  teamwork: translation(`Le travail en équipe`, `Teamwork`, `Trabajo en equipo`),
  teamworkDescription: translation(
    `Aimant les sports collectifs, je suis conscient de l'importance de créer un groupe soudé,
      qui se respecte mutuellement et surtout qui communique un maximum afin que les objectifs
      puissent se réaliser le plus facilement et rapidement possible. Je me rends disponible à
      tout moment si un membre de l'équipe en a besoin.`,
    `Loving team sports, I am aware of the importance of creating a solid group, which
      respects each other and especially communicates as much as possible so that the goals
      can be achieved as easily and quickly as possible. I am available at any time if a team
      member needs me.`,
    `Amante de los deportes colectivos, soy consciente de la importancia de crear un grupo
      unido, que se respeta mutuamente y sobre todo que se comunica al máximo para que los
      objetivos puedan realizarse lo más fácil y rápido posible. Me pongo a disposición en
      cualquier momento si un miembro del equipo lo necesita.`
  ),
  aboutMe: translation(`À propos de moi`, `About me`, `Sobre mí`),
  aboutMeDescription: translation(
    `Passionné de programmation, j'ai commencé mon activité professionnelle en 2022 en tant que
      développeur web front end avec React.js ⚛️. Je peux travailler en remote comme en
      présentiel. J'habite près de Nice sur la côte d'azur. Le français est ma langue maternelle.
      Je parle aussi l'anglais, ainsi que couramment l'espagnol car j'ai vécu au Mexique pendant quelques années`,
    `Passionate about programming, I started my professional activity in 2022 as a web
      front end developer with React.js ⚛️. I can work remotely or in person. I live near Nice
      on the French Riviera. French is my mother tongue. I also speak English, as well as
      Spanish fluently because I lived in Mexico for a few years`,
    `Apasionado por la programación, comencé mi actividad profesional en 2022 como
      desarrollador web front end con React.js ⚛️. Puedo trabajar de forma remota o en
      persona. Vivo cerca de Niza en la Costa Azul. El francés es mi lengua materna. También
      hablo inglés, así como español fluidamente porque viví en México durante unos años`
  ),
  toolsAndSkills: translation(
    `Mes outils & compétences`,
    `My tools & skills`,
    `Mis herramientas y habilidades`
  ),
  toolsAndSkillsDescription: translation(
    `🗣️ Langages humains : français, anglais, espagnol
      <br />
      👨‍💻 Langages informatiques : Typescript, Javascript, HTML5, CSS3
      <br />
      🧰 Framework / Library : React.js
      <br />
      👨‍🔬 Tests : méthode TDD, Jest, React Testing Library, MSW...
      <br />
      📞 Communication : Zoom, Slack, Skype, Discord…`,
    `🗣️ Human languages : french, english, spanish
      <br />
      👨‍💻 Computer languages : Typescript, Javascript, HTML5, CSS3
      <br />
      🧰 Framework / Library : React.js
      <br />
      👨‍🔬 Tests : TDD method, Jest, React Testing Library, MSW...
      <br />
      📞 Communication : Zoom, Slack, Skype, Discord…`,
    `🗣️ Lenguajes humanos : francés, inglés, español
      <br />
      👨‍💻 Lenguajes informáticos : Typescript, Javascript, HTML5, CSS3
      <br />
      🧰 Framework / Biblioteca : React.js
      <br />
      👨‍🔬 Pruebas : método TDD, Jest, React Testing Library, MSW...
      <br />
      📞 Comunicación : Zoom, Slack, Skype, Discord…`
  ),
  personality: translation(
    "Mes qualités et défauts",
    "My qualities and flaws",
    "Mis cualidades y defectos"
  ),
  personality_description: translation(
    `Pour chaque trait de caractère, certains le voient comme une qualité, et d'autres comme un défaut.
  <br />
  Voici donc des adjectifs qui me définissent, à vous de juger si vous le prenez comme un atout ou bien comme une faiblesse.`,
    `For each character trait, some see it as a quality, and others as a flaw.
    <br />
    So here are some adjectives that define me, it's up to you to judge whether you take it as an asset or a weakness.`,
    `Para cada rasgo de carácter, algunos lo ven como una cualidad y otros como un defecto.
    <br />
    Así que aquí están unos adjetivos que me definen, depende de usted juzgar si lo toma como un activo o una debilidad.`
  ),
  languages: translation("Langues maîtrisées", "Mastered languages", "Idiomas dominados"),
  french: translation("Français", "French", "Francés"),
  english: translation("Anglais", "English", "Inglés"),
  spanish: translation("Espagnol", "Spanish", "Español"),
  hobbies: translation("Mes passions", "My hobbies", "Mis pasiones"),
  form: translation("Formulaire de contact", "Contact form", "Formulario de contacto"),
  formDescription: translation(
    `Vous pouvez me contacter via ce formulaire, je vous répondrai dans les plus brefs délais.`,
    `You can contact me via this form, I will answer you as soon as possible.`,
    `Puede contactarme a través de este formulario, le responderé lo antes posible.`
  ),
  emailForm: translation("Votre email", "Your email", "Su correo electrónico"),
  phoneForm: translation("Téléphone", "Phone", "Teléfono"),
  optionalForm: translation("facultatif", "optional", "opcional"),
  subjectForm: translation("Sujet", "Subject", "Asunto"),
  messageForm: translation("Message", "Message", "Mensaje"),
  sendForm: translation("J'envoie le mail", "I send the mail", "Envío el correo"),

  // Projects
  websiteLink: translation("🌐 Lien du site", "🌐 Website link", "🌐 Enlace del sitio"),
  gitHubLink: translation(
    "📂 Lien du repository GitHub",
    "📂 GitHub repository link",
    "📂 Enlace del repositorio GitHub"
  ),
  type: translation("Type", "Type", "Tipo"),
  theme: translation("Thème", "Theme", "Tema"),
  stack: translation("Stack", "Stack", "Stack"),
  skills: translation("Compétences", "Skills", "Habilidades"),
  translatedIn: translation("Traduit en", "Translated in", "Traducido en"),

  // Formation
  yearOfLearning: translation("Année d'apprentissage", "Year of learning", "Año de aprendizaje"),
  formationLink: translation(
    "Lien vers la formation",
    "Link to the formation",
    "Enlace a la formación"
  ),
  whatDidWeLearned: translation("Ce que nous avons appris", "What we learned", "Lo que aprendimos"),
  conclusion: translation("Pour conclure", "To conclude", "Para concluir"),
};
