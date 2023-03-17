import { useCallback, useContext, useEffect, useState } from "react";

// Context
import { AppContext, AppVideoContext } from "../../AppContext";

// Types
import { AppProviderContextTypes, AppVideosContextTypes, VideoProps } from "../../types/types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import { ContactsList } from "../Contacts";
import {
  faCircleQuestion,
  faList,
  faList12,
  faListAlt,
  faListCheck,
  faListSquares,
  faQuestion,
  faQuestionCircle,
  faRectangleList,
  faTableList,
  faThList,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

export function Interview() {
  const { text }: AppProviderContextTypes = useContext(AppContext);
  const {
    isIntro,
    introMuted,
    hasIntroEnded,
    introClickableMuted,
    videoTitleList,
    videoSrcList,
    isMutedList,
    hasHelloEnded,
    isResponding,
  }: AppVideosContextTypes = useContext(AppVideoContext);

  return (
    <div className="interview">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

      <div className="videosWrapper">
        {/* Videos intro */}
        <Video title={"intro"} src={"intro_carre"} isMuted={introMuted} />
        <Video title={"introClickable"} src={"intro_after_carre"} isMuted={introClickableMuted} />

        {/* Videos paying attention */}
        <Video title={"hello"} src={"bjr_attente_carre"} isMuted={introClickableMuted} />
        <Video title={"waiting"} src={"waiting_carre"} isMuted={introClickableMuted} />

        {/* Videos questions */}
        {videoTitleList.map((title, index) => {
          return (
            <Video
              key={index}
              title={title}
              src={videoSrcList[index]}
              isMuted={isMutedList[index]}
            />
          );
        })}

        {((isIntro && hasIntroEnded) || (hasHelloEnded && !isResponding)) && (
          <p className="hint">
            {hasHelloEnded ? text("howToAskMeAQuestion") : text("howToGetMyAttention")}
            <br />
            <small>({text("askMeSmall")})</small>
          </p>
        )}
      </div>

      <ContactsList classNameSuffix={"presentation"} />
    </div>
  );
}

function Video({ title, src, isMuted }: VideoProps) {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);
  const {
    muteBtn,
    setMuteBtn,
    videoSelected,
    setVideoSelected,
    isIntro,
    getMyAttention,
    hasIntroEnded,
    setHasIntroEnded,
    hasHelloEnded,
    setHasHelloEnded,
    isResponding,
    setIsResponding,
    videoTitleList,
    questionAsked,
  }: AppVideosContextTypes = useContext(AppVideoContext);

  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isQuestionListVisible, setIsQuestionListVisible] = useState(false);

  const blockOrNone = isIntro
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
      ? hasHelloEnded && !isResponding
        ? "block"
        : "none"
      : isResponding && title === videoSelected
      ? "block"
      : "none"
    : "none";

  function videoRef(element: HTMLVideoElement) {
    setVideoElement(element);
  }

  function videoEnded() {
    if (isIntro) {
      introEnded();
    } else if (isResponding) {
      questionEnded();
    } else {
      helloEnded();
    }
  }
  function introEnded() {
    setHasIntroEnded && setHasIntroEnded(true);
  }
  function helloEnded() {
    setHasHelloEnded && setHasHelloEnded(true);
    setVideoSelected("waiting");
  }
  function questionEnded() {
    setIsResponding && setIsResponding(false);
    setVideoSelected("waiting");
  }

  function resetVideo() {
    if (videoElement) {
      videoSelected === title ? videoElement.play() : videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  const handleHeaderObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsHeaderVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    resetVideo();
  }, [videoSelected]);

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
        muted={muteBtn ? true : isMuted}
        loop={title === "introClickable" || title === "waiting"}
        onDoubleClick={() => title === "introClickable" && getMyAttention()}
        onTouchEnd={() => title === "introClickable" && getMyAttention()}
        onEnded={() => videoEnded()}
        className="video"
      >
        <source src={`public/videos/${src}_${language}.mp4`} type="video/mp4" />
        {text("videoNotFound")}
      </video>

      <FontAwesomeIcon
        icon={muteBtn ? faVolumeMute : faVolumeHigh}
        className="volumeIcon"
        onClick={() => setMuteBtn(!muteBtn)}
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
            {videoTitleList.map((title, index) => {
              return (
                <li key={index} onClick={() => questionAsked(title)}>
                  {title}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
