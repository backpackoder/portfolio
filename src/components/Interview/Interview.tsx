import { faListSquares, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import { useCallback, useContext, useEffect, useState } from "react";

// Context
import { AppContext, AppVideoContext } from "../../AppContext";

// Types
import { AppProviderContextTypes, AppVideosContextTypes } from "../../types/types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import { ContactsList } from "../Contacts";

export function Interview() {
  const { text }: AppProviderContextTypes = useContext(AppContext);
  const { state }: AppVideosContextTypes = useContext(AppVideoContext);

  const questionsTitle = [
    state.videos.questions.presentation.title,
    state.videos.questions.stacks.title,
    state.videos.questions.formation.title,
    state.videos.questions.experience.title,
  ];

  return (
    <div className="interview">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

      <div className="videosWrapper">
        {/* Videos intro */}
        <Video title={state.videos.intro.cannot_click.title} />
        <Video title={state.videos.intro.can_click.title} />

        {/* Videos paying attention */}
        <Video title={state.videos.pay_attention.cannot_click.title} />
        <Video title={state.videos.pay_attention.can_click.title} />

        {/* Videos questions */}
        {questionsTitle.map((title, index) => {
          return <Video key={index} title={title} />;
        })}

        {((state.conditions.isIntroPlaying && state.conditions.isIntroClickable) ||
          (state.conditions.hasHelloEnded && !state.conditions.isResponding)) && (
          <p className="hint">
            {state.conditions.hasHelloEnded
              ? text("howToAskMeAQuestion")
              : text("howToGetMyAttention")}
            <br />
            <small>({text("askMeSmall")})</small>
          </p>
        )}
      </div>

      <ContactsList classNameSuffix={"presentation"} />
    </div>
  );
}

function Video({ title }: { title: string }) {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);
  const { state, dispatch }: AppVideosContextTypes = useContext(AppVideoContext);

  const { videoPlaying } = state;
  const {
    muteBtn,
    isIntroPlaying,
    isIntroClickable,
    hasHelloEnded,
    isPayingAttention,
    isResponding,
  } = state.conditions;
  const { questions } = state.videos;

  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(false);

  const blockOrNone = isIntroPlaying
    ? title === "intro" || title === "introClickable"
      ? title === "intro"
        ? isIntroClickable
          ? "none"
          : "block"
        : title === "introClickable"
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
    const headerElement = document.querySelector(".videosWrapper") as HTMLDivElement;

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
        loop={title === "introClickable" || title === "waiting"}
        onDoubleClick={() => title === "introClickable" && dispatch({ type: "getMyAttention" })}
        onTouchEnd={() => title === "introClickable" && dispatch({ type: "getMyAttention" })}
        onEnded={() => videoEnded()}
        className="video"
      >
        <source src={`../videos/${title}.mp4`} type="video/mp4" />
        {text("videoNotFound")}
      </video>

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
            {Object.keys(questions).map((key, index) => {
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
            })}
          </ul>
        </>
      )}
    </div>
  );
}
