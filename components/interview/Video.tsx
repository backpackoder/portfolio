"use client";

import { FaVolumeMute, FaVolumeUp, FaList } from "react-icons/fa";

import { useAppContext } from "@/app/context/AppProvider";
import { VideoProps } from "@/types/props";
import { useCallback, useEffect, useState } from "react";

export function Video({ title, state, dispatch }: VideoProps) {
  const { language, text } = useAppContext();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      className={`videoWrapper ${blockOrNone} ${isHeaderVisible ? "relative" : "fixed"} ${
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

      {muteBtn ? (
        <FaVolumeMute
          size="35px"
          className="volumeIcon"
          onClick={() => dispatch({ type: "volumeIconClicked", switchBoolean: !muteBtn })}
        />
      ) : (
        <FaVolumeUp
          size="35px"
          className="volumeIcon"
          onClick={() => dispatch({ type: "volumeIconClicked", switchBoolean: !muteBtn })}
        />
      )}

      {hasHelloEnded && !isResponding && (
        <>
          <div
            className="questionIconWrapper"
            onClick={() => setIsQuestionListVisible(!isQuestionListVisible)}
          >
            <FaList size="35px" className="questionIcon" />
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
