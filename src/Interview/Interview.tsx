import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppContext, AppVideoContext } from "../AppContext";
import { FLAG_EN_HTMLElement, FLAG_ES_HTMLElement, FLAG_FR_HTMLElement } from "../commons/commons";
import { ContactsList } from "../components/Contacts";
import { Text } from "../types/types";

export function Interview() {
  const { text }: { text: Text } = useContext(AppContext);

  const {
    introMuted,
    videoSelected,
    setVideoSelected,
    isIntro,
    hasIntroEnded,
    setHasIntroEnded,
    hasHelloEnded,
    setHasHelloEnded,
    introClickableMuted,
    getMyAttention,
    isAskingQuestion,
    setIsAskingQuestion,
    videoTitleList,
    videoSrcList,
    isMutedList,
    isPayingAttention,
    questionAsked,
  }: {
    introMuted: boolean;
    videoSelected: string;
    setVideoSelected: Function;
    isIntro: boolean;
    hasIntroEnded: boolean;
    setHasIntroEnded: Function;
    hasHelloEnded: boolean;
    setHasHelloEnded: Function;
    introClickableMuted: boolean;
    getMyAttention: Function;
    isAskingQuestion: boolean;
    setIsAskingQuestion: Function;
    videoTitleList: string[];
    videoSrcList: string[];
    isMutedList: boolean[];
    isPayingAttention: boolean;
    questionAsked: Function;
  } = useContext(AppVideoContext);

  return (
    <div className={"videos"}>
      <h1 dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>
      <ContactsList classNameSuffix={"presentation"} />
      <>
        {/* Videos intro */}
        <Video
          title={"intro"}
          src={"intro_carre"}
          isFirstVideo={true}
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
          isMuted={introClickableMuted}
          getMyAttention={getMyAttention}
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

      {isIntro && hasIntroEnded && (
        <p className="interviewBtn">
          {text("askMe")}
          <br />
          <small>({text("askMeSmall")})</small>
        </p>
      )}
      {isPayingAttention && hasHelloEnded && !isAskingQuestion && (
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

function Video({
  title,
  src,
  isFirstVideo,
  isMuted,
  getMyAttention,
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
  isFirstVideo?: boolean;
  isMuted: boolean;
  getMyAttention?: Function;
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
  const { language } = useContext(AppContext);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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
        isHeaderVisible ? "big" : "small"
      } ${
        isIntro
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
          : "none"
      }`}
    >
      <source src={`public/videos/${src}_${language}.mp4`} type="video/mp4" />
      La vidéo n'a pas pu se charger.
    </video>
  );
}
