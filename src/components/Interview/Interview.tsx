import { useCallback, useContext, useEffect, useState } from "react";

// Context
import { AppContext, AppVideoContext } from "../../AppContext";

// Types
import { AppProviderContextTypes, AppVideosContextTypes } from "../../types/types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListSquares, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

// Components
import { ContactsList } from "../Contacts";
import { Info } from "../info/Info";

export function Interview() {
  const { changeInfo, setChangeInfo, text }: AppProviderContextTypes = useContext(AppContext);
  const { state }: AppVideosContextTypes = useContext(AppVideoContext);
  const { videos } = state;

  const { intro, pay_attention, questions } = videos;
  const questionsTitle = [
    questions.presentation.title,
    questions.stacks.title,
    questions.formation.title,
    questions.experience.title,
  ];

  useEffect(() => {
    setChangeInfo(changeInfo);
  }, [changeInfo]);

  return (
    <section className="header">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

      <div className="mainContent">
        <article className="interview">
          <div className="letInterviewAtSameHeight"></div>

          {/* Videos intro */}
          <Video title={intro.cannot_click.title} />
          <Video title={intro.can_click.title} />

          {/* Videos paying attention */}
          <Video title={pay_attention.cannot_click.title} />
          <Video title={pay_attention.can_click.title} />

          {/* Videos questions */}
          {questionsTitle.map((title, index) => {
            return <Video key={index} title={title} />;
          })}
        </article>

        <Info />
      </div>

      <ContactsList classNameSuffix={"info"} />

      <a href="/thibaut-barbiera-CV.pdf" target="_blank" className="downloadMyCV">
        {text("downloadMyCV")}
      </a>
    </section>
  );
}

function Video({ title }: { title: string }) {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);
  const { state, dispatch }: AppVideosContextTypes = useContext(AppVideoContext);

  const { videoPlaying } = state;
  const { muteBtn, isIntroPlaying, isIntroClickable, hasHelloEnded, isResponding } =
    state.conditions;
  const { questions } = state.videos;

  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(false);

  const blockOrNone = isIntroPlaying
    ? title === "intro" || title === "clickable"
      ? title === "intro"
        ? isIntroClickable
          ? "none"
          : "block"
        : title === "clickable"
        ? isIntroClickable
          ? "block"
          : "none"
        : "none"
      : "none"
    : title === "hello"
    ? hasHelloEnded
      ? "none"
      : "block"
    : title === "waiting"
    ? hasHelloEnded && !isResponding
      ? "block"
      : "none"
    : isResponding && title === videoPlaying
    ? "block"
    : "none";

  function videoRef(element: HTMLVideoElement) {
    setVideoElement(element);
  }

  function videoEnded() {
    if (title === "intro") {
      dispatch({ type: "introBecomesClickable" });
    } else if (title === "hello") {
      dispatch({ type: "helloEnded" });
    } else if (isResponding) {
      dispatch({ type: "questionEnded" });
    }
  }

  function resetVideo() {
    if (videoElement) {
      state.videoPlaying === title ? videoElement.play() : videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  const handleHeaderObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsHeaderVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    resetVideo();
  }, [state.videoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleHeaderObserver, { threshold: 0 });
    const headerElement = document.querySelector(".interview") as HTMLDivElement;

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, [handleHeaderObserver]);

  return (
    <div
      className={`videoWrapper ${blockOrNone} ${isHeaderVisible ? "static" : "fixed"} ${
        isQuestionListVisible ? "active" : "inactive"
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted={muteBtn ? true : false}
        loop={title === "clickable" || title === "waiting"}
        onDoubleClick={() => title === "clickable" && dispatch({ type: "getMyAttention" })}
        onTouchEnd={() => title === "clickable" && dispatch({ type: "getMyAttention" })}
        onEnded={() => videoEnded()}
        className="video"
      >
        <source src={`/${title}.mp4`} type="video/mp4" />
        {text("videoNotFound")}
      </video>

      {((isIntroPlaying && isIntroClickable) || (hasHelloEnded && !isResponding)) && (
        <p className="hint">
          {hasHelloEnded ? text("howToAskMeAQuestion") : text("howToGetMyAttention")}
          <br />
          <small>({text("askMeSmall")})</small>
        </p>
      )}

      <FontAwesomeIcon
        icon={muteBtn ? faVolumeMute : faVolumeHigh}
        className="volumeIcon"
        onClick={() => dispatch({ type: "volumeIconClicked", switchBoolean: !muteBtn })}
      />

      {hasHelloEnded && !isResponding && (
        <>
          <div
            className={`questionIconWrapper`}
            onClick={() => setIsQuestionListVisible(!isQuestionListVisible)}
          >
            <FontAwesomeIcon icon={faListSquares} className="questionIcon" />
          </div>

          <ul
            className="questionList"
            onClick={() => setIsQuestionListVisible(!isQuestionListVisible)}
          >
            <li
              onClick={() =>
                dispatch({ type: "questionPlayed", payload: questions.presentation.title })
              }
            >
              {questions.presentation.question[language]}
            </li>
            <li
              onClick={() => dispatch({ type: "questionPlayed", payload: questions.stacks.title })}
            >
              {questions.stacks.question[language]}
            </li>
            <li
              onClick={() =>
                dispatch({ type: "questionPlayed", payload: questions.formation.title })
              }
            >
              {questions.formation.question[language]}
            </li>
            <li
              onClick={() =>
                dispatch({ type: "questionPlayed", payload: questions.experience.title })
              }
            >
              {questions.experience.question[language]}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

{
  // REFACTORING WITH 2 ERRORS TO SOLVE :
  /* {Object.keys(questions).map((key, index) => {
              // const question = questions[key];
              return (
                <li
                  key={index}
                  onClick={() =>
                    dispatch({ type: "questionPlayed", payload: questions[key].title })
                  }
                >
                  {questions[key].question[language]}
                </li>
              );
            })} */
}
