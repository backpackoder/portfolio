// Commons
import {
  FLAG_EN_HTMLElement,
  FLAG_ES_HTMLElement,
  FLAG_FR_HTMLElement,
} from "../../commons/commons";

// Utils
import { myStacks } from "../../utils/myStacks";

// Components
import { ContactsList } from "../Contacts";

// Context
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import { personality } from "../../utils/personality";
import { Iso } from "../../types/types";
import { hobbies } from "../../utils/hobbies";

export function Presentation() {
  const { language, text } = useContext(AppContext);

  return (
    <article className="presentation">
      <Header text={text} />
      <Stacks text={text} />
      <Description text={text} />
      <Langages text={text} />
      <Hobbies language={language} text={text} />
      <Personality language={language} text={text} />
    </article>
  );
}

function Header({ text }: { text: Function }) {
  const [isFirstTime, setIsFirstTime] = useState(true);
  console.log("isFirstTime", isFirstTime);

  // Videos states
  // Intro
  const [intro, setIntro] = useState(true);
  const [introMuted, setIntroMuted] = useState(true);
  const [hasIntroEnded, setHasIntroEnded] = useState(false);

  const [introClickable, setIntroClickable] = useState(false);
  const [introClickableMuted, setIntroClickableMuted] = useState(true);

  // Paying attention
  const [hello, setHello] = useState(false);
  const [helloMuted, setHelloMuted] = useState(true);
  const [hasHelloEnded, setHasHelloEnded] = useState(false);

  const [waiting, setWaiting] = useState(false);
  const [waitingMuted, setWaitingMuted] = useState(true);

  // Questions
  const [presentationQ, setPresentationQ] = useState(false);
  const [presentationQMuted, setPresentationQMuted] = useState(true);

  const [stacksQ, setStacksQ] = useState(false);
  const [stacksQMuted, setStacksQMuted] = useState(true);

  const [experienceQ, setExperienceQ] = useState(false);
  const [experienceQMuted, setExperienceQMuted] = useState(true);

  // Videos lists
  const allVideos = [intro, introClickable, hello, waiting, presentationQ, stacksQ, experienceQ];
  const setAllVideos = [
    setIntro,
    setIntroClickable,
    setHello,
    setWaiting,
    setPresentationQ,
    setStacksQ,
    setExperienceQ,
  ];
  const allVideosMuted = [
    introMuted,
    introClickableMuted,
    helloMuted,
    waitingMuted,
    presentationQMuted,
    stacksQMuted,
    experienceQMuted,
  ];
  const setAllVideosMuted = [
    setIntroMuted,
    setIntroClickableMuted,
    setHelloMuted,
    setWaitingMuted,
    setPresentationQMuted,
    setStacksQMuted,
    setExperienceQMuted,
  ];

  const isPlayingList = [presentationQ, stacksQ, experienceQ];
  const setIsPlayingList = [setPresentationQ, setStacksQ, setExperienceQ];
  const isMutedList = [presentationQMuted, stacksQMuted, experienceQMuted];
  const setIsMutedList = [setPresentationQMuted, setStacksQMuted, setExperienceQMuted];
  const allVideoTitleList = [
    "intro",
    "introClickable",
    "hello",
    "waiting",
    "presentationQ",
    "stacksQ",
    "experienceQ",
  ];
  const videoTitleList = ["presentation", "stacks", "experience"];
  const videoSrcList = ["presentation_carre", "stacks_carre", "experience_carre"];

  // Conditional states
  const [videoSelected, setVideoSelected] = useState("intro");
  const [isIntro, setIsIntro] = useState(true);
  const [isPayingAttention, setIsPayingAttention] = useState(false);
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  console.log("isAskingQuestion", isAskingQuestion);

  function drawAttention() {
    setIsIntro(false);
    setIsPayingAttention(true);
    setVideoSelected("hello");
    setInterval(() => {
      setHelloMuted(false);
    }, 10);
  }

  function questionAsked(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value !== "") {
      setVideoSelected(e.target.value);
      setIsAskingQuestion(true);
    }
  }

  useEffect(() => {
    setAllVideosMuted.forEach((isMuted) => {
      isMuted(true);
    });

    allVideoTitleList.forEach((title, index) => {
      console.log(`videoSelected OUT (${title})`, videoSelected);
      if (title === videoSelected) {
        console.log(`videoSelected YES (${title})`, videoSelected);
        setAllVideos[index](true);
        if (isFirstTime) {
          setIsFirstTime(false);
        } else {
          setInterval(() => {
            setAllVideosMuted[index](false);
          }, 10);
        }
      } else {
        console.log(`videoSelected NO (${title})`, videoSelected);
        setAllVideos[index](false);
        !isFirstTime && setAllVideosMuted[index](false);
      }
    });
  }, [videoSelected]);

  return (
    <div className="presentation-header">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>
      <ContactsList classNameSuffix={"presentation"} />
      <>
        {/* Videos intro */}
        <Video
          title={"intro"}
          src={"intro_carre"}
          setIsFirstTime={setIsFirstTime}
          isMuted={introMuted}
          videoSelected={videoSelected}
          setVideoSelected={setVideoSelected}
          isIntro={isIntro}
          hasIntroEnded={hasIntroEnded}
          setHasIntroEnded={setHasIntroEnded}
          hasHelloEnded={hasHelloEnded}
          setHasHelloEnded={setHasHelloEnded}
        />
        <Video
          title={"introClickable"}
          src={"intro_after_carre"}
          setIsFirstTime={setIsFirstTime}
          isMuted={introClickableMuted}
          drawAttention={drawAttention}
          videoSelected={videoSelected}
          setVideoSelected={setVideoSelected}
          isIntro={isIntro}
          hasIntroEnded={hasIntroEnded}
          hasHelloEnded={hasHelloEnded}
          setHasHelloEnded={setHasHelloEnded}
        />
        {/* Videos paying attention */}
        <Video
          title={"hello"}
          src={"bjr_attente_carre"}
          setIsFirstTime={setIsFirstTime}
          isMuted={introClickableMuted}
          videoSelected={videoSelected}
          setVideoSelected={setVideoSelected}
          isIntro={isIntro}
          hasIntroEnded={hasIntroEnded}
          hasHelloEnded={hasHelloEnded}
          setHasHelloEnded={setHasHelloEnded}
        />
        <Video
          title={"waiting"}
          src={"waiting_carre"}
          setIsFirstTime={setIsFirstTime}
          isMuted={introClickableMuted}
          videoSelected={videoSelected}
          setVideoSelected={setVideoSelected}
          isIntro={isIntro}
          hasIntroEnded={hasIntroEnded}
          hasHelloEnded={hasHelloEnded}
          setHasHelloEnded={setHasHelloEnded}
          isAskingQuestion={isAskingQuestion}
          setIsAskingQuestion={setIsAskingQuestion}
        />
        {/* Videos questions */}
        {videoTitleList.map((title, index) => {
          return (
            <Video
              key={index}
              title={title}
              src={videoSrcList[index]}
              setIsFirstTime={setIsFirstTime}
              isMuted={isMutedList[index]}
              isIntro={isIntro}
              videoSelected={videoSelected}
              setVideoSelected={setVideoSelected}
              hasHelloEnded={hasHelloEnded}
              setHasHelloEnded={setHasHelloEnded}
              isAskingQuestion={isAskingQuestion}
              setIsAskingQuestion={setIsAskingQuestion}
            />
          );
        })}
      </>

      {isPayingAttention && hasHelloEnded && !isAskingQuestion && (
        <select defaultValue={""} onChange={(e) => questionAsked(e)}>
          <option value={""}>Sélectionnez une question</option>
          {videoTitleList.map((title, index) => {
            return (
              <option key={index} value={title}>
                {title}
              </option>
            );
          })}
        </select>
      )}

      <button onClick={() => {}}>
        {text("askMe")}
        <br />
        <small>({text("askMeSmall")})</small>
      </button>
    </div>
  );
}

function Video({
  title,
  src,
  setIsFirstTime,
  isMuted,
  drawAttention,
  videoSelected,
  setVideoSelected,
  isIntro,
  hasIntroEnded,
  setHasIntroEnded,
  hasHelloEnded,
  setHasHelloEnded,
  isAskingQuestion,
  setIsAskingQuestion,
}: {
  title: string;
  src: string;
  setIsFirstTime: Function;
  isMuted: boolean;
  drawAttention?: Function;
  videoSelected: string;
  setVideoSelected: Function;
  isIntro: boolean;
  hasIntroEnded?: boolean;
  setHasIntroEnded?: Function;
  hasHelloEnded?: boolean;
  setHasHelloEnded?: Function;
  isAskingQuestion?: boolean;
  setIsAskingQuestion?: Function;
}) {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  function videoRef(element: HTMLVideoElement) {
    setVideoElement(element);
  }

  function videoEnded() {
    if (isIntro) {
      introEnded();
    } else if (isAskingQuestion) {
      questionEnded();
    } else {
      helloEnded();
    }
  }
  function introEnded() {
    setHasIntroEnded && setHasIntroEnded(true);
    setIsFirstTime(false); // utile ?
  }
  function helloEnded() {
    setHasHelloEnded && setHasHelloEnded(true);
    setVideoSelected("waiting");
  }
  function questionEnded() {
    setIsAskingQuestion && setIsAskingQuestion(false);
    setVideoSelected("waiting");
  }

  function resetVideo() {
    if (videoElement) {
      videoSelected === title ? videoElement.play() : videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  useEffect(() => {
    resetVideo();
  }, [videoSelected]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={isMuted}
      loop={title === "introClickable" || title === "waiting"}
      onDoubleClick={() => drawAttention && drawAttention()}
      onEnded={() => videoEnded()}
      className={`video`}
      style={{
        display: isIntro
          ? title === "intro" || title === "introClickable"
            ? title === "intro"
              ? hasIntroEnded
                ? "none"
                : "block"
              : title === "introClickable"
              ? hasIntroEnded
                ? "block"
                : "none"
              : "none"
            : "none"
          : title !== "intro" && title !== "introClickable"
          ? title === "hello"
            ? hasHelloEnded
              ? "none"
              : "block"
            : title === "waiting"
            ? hasHelloEnded && !isAskingQuestion
              ? "block"
              : "none"
            : isAskingQuestion && title === videoSelected
            ? "block"
            : "none"
          : "none",
      }}
    >
      <source src={`public/videos/${src}.mp4`} type="video/mp4" />
      La vidéo n'a pas pu se charger.
    </video>
  );
}

function Stacks({ text }: { text: Function }) {
  return (
    <section className="stacks">
      <h2>{text("stacks")}</h2>

      <ul className="mySkills list">
        {myStacks.map((stack) => {
          return (
            <li key={stack.name}>
              <img src={stack.img} />
              <p>{stack.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Description({ text }: { text: Function }) {
  return (
    <section className="description">
      <h2>{text("informations")}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("description") }}></p>
    </section>
  );
}

function Langages({ text }: { text: Function }) {
  return (
    <section className="langages">
      <h2>{text("languages")}</h2>

      <ul className="langages-list">
        <li>
          {FLAG_FR_HTMLElement(25, 15)}
          {text("french")}
        </li>
        <li>
          {FLAG_EN_HTMLElement(25, 15)}
          {text("english")}
        </li>
        <li>
          {FLAG_ES_HTMLElement(25, 15)}
          {text("spanish")}
        </li>
      </ul>
    </section>
  );
}

function Hobbies({ language, text }: { language: Iso; text: Function }) {
  return (
    <section className="hobbies">
      <h2>{text("hobbies")}</h2>

      <ul className="hobbies list">
        {hobbies.map((hobby, index) => {
          return (
            <li key={index}>
              {hobby.icon}
              <p>{hobby.text[language]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Personality({ language, text }: { language: Iso; text: Function }) {
  return (
    <section className="personality">
      <h2>{text("personality")}</h2>

      <p dangerouslySetInnerHTML={{ __html: text("personality_description") }}></p>
      <ul className="personality list">
        {personality.map((personality, index) => {
          return <li key={index}>{personality[language]}</li>;
        })}
      </ul>
    </section>
  );
}
