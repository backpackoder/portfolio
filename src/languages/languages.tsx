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
  "développeur web front-end",
  "Front-end web developer",
  "desarrollador web front-end"
);

type Languages = {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
  };
};

export const languages: Languages = {
  h1: translation(
    `Bonjour, je m'appelle <span>${NAMES ?? ""}</span>,<br />votre futur <span>${
      JOB.fr ?? ""
    }</span>.`,
    `Hello, I'm <span>${NAMES ?? ""}</span>,<br />your future <span>${JOB.en ?? ""}</span>.`,
    `Hola, soy <span>${NAMES ?? ""}</span>,<br />su futuro <span>${JOB.es ?? ""}</span>.`
  ),
  askMe: translation("Posez-moi une question", "Ask me a question", "Pregúnteme algo"),
  askMeSmall: translation(
    "Je vous réponds en vidéo",
    "I answer you in video",
    "Le respondo en video"
  ),
  stacks: translation("🛠️ Mes stacks", "🛠️ My stacks", "🛠️ Mis stacks"),
  informations: translation("📝 Mes informations", "📝 My informations", "📝 Mis informaciones"),
  description: translation(
    `
  Je serais ravi de vous aider dès que possible dans vos projets en intégrant votre équipe en
  tant que dev frontend React.js - TypeScript.
  <br />
  Je suis capable de créer des sites sur mesure avec un résultat responsive pour tout écran,
  gérer des données venant d'API, comme plein d'autres choses. Je peux aussi effectuer des
  tests avec la méthode TDD pour un code de qualité.
  <br />
  <br />
  🔹🔹🔹
  <br />
  <br />
  👔 MON ETHIQUE DE TRAVAIL :<br />
  Je suis une personne méticuleuse qui aime le travail bien fait. Je choisis des projets qui
  allument une flamme en moi et qui me font travailler sans voir les heures passer, car le
  plus important, c'est le projet. Mon but est de dépasser vos attentes pour vous satisfaire
  au maximum.
  <br />
  <br />
  - Le travail en équipe : Aimant les sports collectifs, je suis conscient de l'importance de
  créer un groupe soudé, qui se respecte mutuellement et surtout qui communique un maximum
  afin que les objectifs puissent se réaliser le plus facilement et rapidement possible. Je me
  rends disponible à tout moment si un membre de l'équipe en a besoin.
  <br />
  <br />
  🔹🔹🔹
  <br />
  <br />
  👨‍🚀 À PROPOS DE MOI :<br />
  Passionné de programmation, j'ai commencé mon activité professionnelle en 2022 en tant que
  développeur web front end avec React.js ⚛️. Je peux travailler en remote comme en
  présentiel. J'habite près de Nice sur la côte d'azur. Le français est ma langue maternelle.
  Je parle aussi l'anglais, ainsi que couramment l'espagnol car j'ai vécu au Mexique pendant 3
  ans.
  <br />
  <br />
  🔹🔹🔹
  <br />
  <br />
  🛠️ MES OUTILS & COMPÉTENCES :<br />
  🗣️ Langages humains : français, anglais, espagnol
  <br />
  👨‍💻 Langages informatiques : Typescript, Javascript, HTML5, CSS3
  <br />
  🧰 Framework / Library : React.js
  <br />
  👨‍🔬 Tests : méthode TDD, Jest, React Testing Library, MSW...
  <br />
  📞 Communication : Zoom, Slack, Skype, Discord…
  <br />
  <br />
  🔹🔹🔹
  <br />
  <br />
  Je suis ravi que vous m'ayez lu jusqu'ici. J'espère avoir de vos nouvelles et je vous
  souhaite une excellente journée.
  <br />
  <br />
  Thibaut Barbiera, développeur web front-end.`,
    `I would be delighted to help you as soon as possible in your projects by integrating your team as
    dev frontend React.js - TypeScript.
    <br />
    I am able to create custom sites with responsive results for any screen,
    manage data from APIs, and many other things. I can also do
    tests with the TDD method for a quality code.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    👔 MY WORK ETHIC:<br />
    I am a meticulous person who likes a job well done. I choose projects that
    light a flame in me and make me work without seeing the hours pass because the
    project is more important. My goal is to exceed your expectations to satisfy you.
    <br />
    <br />
    - Teamwork: Loving team sports, I am aware of the importance of
    creating a close-knit group, which respects each other and above all communicates as much as possible
    so that the objectives can be achieved as easily and quickly as possible. I
    make myself available at all times if a team member needs it.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    👨‍🚀 ABOUT ME:<br />
    Passionate about programming, I started my professional activity in 2022 as
    front end web developer with React.js ⚛️. I can work remotely as well as
    face-to-face. I live near Nice on the French Riviera. French is my mother tongue.
    I also speak English, as well as fluent Spanish because I lived in Mexico for 3 years.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    🛠️ MY TOOLS & SKILLS:<br />
    🗣️ Human languages: French, English, Spanish
    <br />
    👨‍💻 Computer languages: Typescript, Javascript, HTML5, CSS3
    <br />
    🧰 Framework / Library: React.js
    <br />
    👨‍🔬 Tests: TDD method, Jest, React Testing Library, MSW...
    <br />
    📞 Communication: Zoom, Slack, Skype, Discord…
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    I'm glad you have read me so far. I hope to hear from you and I wish you a great day.
    <br />
    <br />
    Thibaut Barbiera, front-end web developer.`,
    `Estaría encantado de poder ayudarle lo antes posible en sus proyectos integrando su equipo como
    dev frontend React.js - TypeScript.
    <br />
    Puedo crear sitios personalizados con resultados receptivos para cualquier pantalla,
    administrar datos de API y muchas otras cosas. yo también puedo hacer
    pruebas con el método TDD para un código de calidad.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    👔 MI ÉTICA DE TRABAJO:<br />
    Soy una persona meticulosa a la que le gusta el trabajo bien hecho. Elijo proyectos que
    enciende una llama en mi y que me hace trabajar sin ver pasar las horas porque el
    proyecto es más importante. Mi objetivo es superar sus expectativas para satisfacerle.
    <br />
    <br />
    - Trabajo en equipo: Amante de los deportes de equipo, soy consciente de la importancia de
    crear un grupo unido, que se respete mutuamente y sobre todo se comunique tanto como sea posible
    para que los objetivos se puedan alcanzar de la forma más fácil y rápida posible.
    estoy disponible en todo momento si un miembro del equipo lo necesita.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    👨‍🚀 ACERCA DE MÍ:<br />
    Apasionado de la programación, comencé mi actividad profesional en 2022 como
    Desarrollador web front-end con React.js ⚛️. Puedo trabajar de forma remota, así como
    cara a cara. Vivo cerca de Niza en la Riviera francesa. El francés es mi lengua materna.
    También hablo inglés, así como español fluido porque viví en México durante 3
    años.
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    🛠️ MIS HERRAMIENTAS Y HABILIDADES:<br />
    🗣️ Idiomas humanos: francés, inglés, español
    <br />
    👨‍💻 Lenguajes informáticos: mecanografiado, Javascript, HTML5, CSS3
    <br />
    🧰 Framework/Biblioteca: React.js
    <br />
    👨‍🔬 Pruebas: método TDD, Jest, React Testing Library, MSW...
    <br />
    📞 Comunicación: Zoom, Slack, Skype, Discord…
    <br />
    <br />
    🔹🔹🔹
    <br />
    <br />
    Me alegro de que me haya leído hasta ahora. espero saber de usted pronto,
    que tenga un buen dia.
    <br />
    <br />
    Thibaut Barbiera, desarrollador web front-end.`
  ),
  languages: translation("🗣️ Langues maîtrisées", "🗣️ Mastered languages", "🗣️ Idiomas dominados"),
  french: translation("Français", "French", "Francés"),
  english: translation("Anglais", "English", "Inglés"),
  spanish: translation("Espagnol", "Spanish", "Español"),
  personality: translation(
    "👍 Mes qualités et défauts 👎",
    "👍 My qualities and flaws 👎",
    "👍 Mis cualidades y defectos 👎"
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
  hobbies: translation("🔥 Mes passions", "🔥 My hobbies", "🔥 Mis pasiones"),
};
