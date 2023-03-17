import { useContext, useEffect, useState } from "react";

// Context
import { AppContext, AppVideoContext } from "./AppContext";

export function AppVideos(props: object) {
  const { text }: { text: (text: string) => string } = useContext(AppContext);

  const [isFirstTime, setIsFirstTime] = useState(true);
  const [muteBtn, setMuteBtn] = useState(false);

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
  const setAllVideos = [
    setIntro,
    setIntroClickable,
    setHello,
    setWaiting,
    setPresentationQ,
    setStacksQ,
    setExperienceQ,
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
  const isMutedList = [presentationQMuted, stacksQMuted, experienceQMuted];
  const allVideoTitleList = [
    "intro",
    "introClickable",
    "hello",
    "waiting",
    "presentationQ",
    "stacksQ",
    "experienceQ",
  ];
  const videoTitleList = [
    text("questionAboutPresentation"),
    text("questionAboutStack"),
    text("questionAboutFormation"),
    text("questionAboutExperience"),
  ];
  const videoSrcList = [`presentation`, `stack`, `formation`, `experience`];

  // Conditional states
  const [videoSelected, setVideoSelected] = useState("intro");
  const [isIntro, setIsIntro] = useState(true);
  const [isPayingAttention, setIsPayingAttention] = useState(false);
  const [isResponding, setIsResponding] = useState(false);

  function getMyAttention() {
    setIsIntro(false);
    setIsPayingAttention(true);
    setVideoSelected("hello");
    setInterval(() => {
      setHelloMuted(false);
    }, 10);
  }

  function questionAsked(title: string) {
    const findCityInFavs = videoTitleList.find((item) => item === title);

    setVideoSelected(findCityInFavs ?? "waiting");
    setIsResponding(true);
  }

  useEffect(() => {
    setAllVideosMuted.forEach((isMuted) => {
      isMuted(true);
    });

    allVideoTitleList.forEach((title, index) => {
      if (muteBtn) {
        setAllVideosMuted[index](true);
      } else {
        if (title === videoSelected) {
          setAllVideos[index](true);
          if (isFirstTime) {
            setIsFirstTime(false);
          } else {
            setAllVideosMuted[index](false);
          }
        } else {
          setAllVideos[index](false);
          !isFirstTime && setAllVideosMuted[index](false);
        }
      }
    });
  }, [videoSelected]);

  const contextValue = {
    // STATES
    isFirstTime,
    // Muted
    muteBtn,
    setMuteBtn,
    // Intro
    intro,
    setIntro,
    introMuted,
    setIntroMuted,
    hasIntroEnded,
    setHasIntroEnded,
    introClickable,
    setIntroClickable,
    introClickableMuted,
    setIntroClickableMuted,
    // Paying attention
    hello,
    setHello,
    helloMuted,
    setHelloMuted,
    hasHelloEnded,
    setHasHelloEnded,
    waiting,
    setWaiting,
    waitingMuted,
    setWaitingMuted,
    // Questions
    presentationQ,
    setPresentationQ,
    presentationQMuted,
    setPresentationQMuted,
    stacksQ,
    setStacksQ,
    stacksQMuted,
    setStacksQMuted,
    experienceQ,
    setExperienceQ,
    experienceQMuted,
    setExperienceQMuted,
    // Conditional states
    videoSelected,
    setVideoSelected,
    isIntro,
    setIsIntro,
    isPayingAttention,
    setIsPayingAttention,
    isResponding,
    setIsResponding,

    // LISTS
    // Videos lists
    setAllVideos,
    setAllVideosMuted,
    isMutedList,
    allVideoTitleList,
    videoTitleList,
    videoSrcList,

    // FUNCTIONS
    getMyAttention,
    questionAsked,
  };

  return <AppVideoContext.Provider {...props} value={contextValue} />;
}
