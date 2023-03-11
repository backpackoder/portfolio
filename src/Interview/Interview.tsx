import { useCallback, useContext, useEffect, useState } from "react";

// Context
import { AppContext, AppVideoContext } from "../AppContext";

// Types
import { AppProviderContextTypes, AppVideosContextTypes, VideoProps } from "../types/types";

// Components
import { ContactsList } from "../components/Contacts";

export function Interview() {
  const { text }: AppProviderContextTypes = useContext(AppContext);
  const {
    introMuted,
    isIntro,
    hasIntroEnded,
    hasHelloEnded,
    introClickableMuted,
    isResponding,
    videoTitleList,
    videoSrcList,
    isMutedList,
    questionAsked,
  }: AppVideosContextTypes = useContext(AppVideoContext);

  return (
    <div className="videos">
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>
      <ContactsList classNameSuffix={"presentation"} />
      <>
        {/* Videos intro */}
        <Video title={"intro"} src={"intro_carre"} isFirstVideo={true} isMuted={introMuted} />
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
      </>

      {isIntro && hasIntroEnded && (
        <p className="interviewBtn">
          {text("askMe")}
          <br />
          <small>({text("askMeSmall")})</small>
        </p>
      )}

      {hasHelloEnded && !isResponding && (
        <select defaultValue={""} onChange={(e) => questionAsked(e)}>
          <option value={""}>{text("selectAQuestion")}</option>
          {videoTitleList.map((title, index) => {
            return (
              <option key={index} value={title}>
                {title}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

function Video({ title, src, isFirstVideo, isMuted }: VideoProps) {
  const { language } = useContext(AppContext);
  const {
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
  }: AppVideosContextTypes = useContext(AppVideoContext);

  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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
    const headerElement = document.querySelector(".videos") as HTMLDivElement;

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
    <video
      ref={videoRef}
      autoPlay
      muted={isMuted}
      loop={title === "introClickable" || title === "waiting"}
      onDoubleClick={() => getMyAttention && getMyAttention()}
      onEnded={() => videoEnded()}
      className={`video ${isFirstVideo ? "isFirstVideo" : ""} ${
        isHeaderVisible ? "static" : "absolute"
      } ${blockOrNone}`}
    >
      <source src={`public/videos/${src}_${language}.mp4`} type="video/mp4" />
      La vidéo n'a pas pu se charger.
    </video>
  );
}
