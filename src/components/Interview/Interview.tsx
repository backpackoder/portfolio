import { useCallback, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Context
import { AppContext, AppVideoContext } from "../../AppContext";

// Types
import { AppProviderContextTypes, AppVideosContextTypes } from "../../types/types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListSquares, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

// Components
import { Info } from "../info/Info";
import { ContactsList } from "../Contacts";

export function Interview() {
  const { changeInfo, setChangeInfo, text }: AppProviderContextTypes = useContext(AppContext);
  const { state }: AppVideosContextTypes = useContext(AppVideoContext);

  useEffect(() => {
    setChangeInfo(changeInfo);
  }, [changeInfo]);

  return (
    <>
      <section className="header">
        <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

        <div className="mainContent">
          <article className="interview">
            <div className="letInterviewAtSameHeight"></div>

            {state.videos.map((data, index) => {
              return <Video key={index} title={data.title} />;
            })}
          </article>

          <Info />
        </div>

        <ContactsList classNameSuffix={"info"} />

        <a href="/thibaut-barbiera-CV.pdf" target="_blank" className="lookAtMyResume">
          {text("lookAtMyResume")}
        </a>
      </section>

      <Outlet />
    </>
  );
}

function Video({ title }: { title: string }) {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);
  const { state, dispatch }: AppVideosContextTypes = useContext(AppVideoContext);

  const { videoPlaying } = state;
  const { muteBtn, isIntroPlaying, isIntroClickable, hasHelloEnded, isResponding } =
    state.conditions;

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
            className="questionIconWrapper"
            onClick={() => setIsQuestionListVisible(!isQuestionListVisible)}
          >
            <FontAwesomeIcon icon={faListSquares} className="questionIcon" />
          </div>

          <ul
            className="questionList"
            onClick={() => setIsQuestionListVisible(!isQuestionListVisible)}
          >
            {state.videos.map((data, index) => {
              return data?.question ? (
                <li
                  key={index}
                  onClick={() => dispatch({ type: "questionPlayed", payload: data.title })}
                >
                  {data.question[language]}
                </li>
              ) : null;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
