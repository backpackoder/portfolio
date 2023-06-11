"use client";

import { useEffect, useReducer } from "react";
import { useAppContext } from "@/app/context/AppProvider";

// Components
import { Video } from "./Video";
import { Info } from "../infos/Info";
import { ContactsList } from "../Contacts";

// Commons
import { PARTS, RESUME_URL } from "@/commons/commons";

// Types
import { initialStatesProps } from "@/types/types";

// Languages
import { translation } from "@/languages/languages";

// Styles
import { styles } from "@/app/assets/tailwindstyles";

export function Interview() {
  const { changeInfo, setChangeInfo, text } = useAppContext();

  const initialState: initialStatesProps = {
    videoPlaying: "intro",

    conditions: {
      muteBtn: true,
      isIntroPlaying: true,
      isIntroClickable: false,
      isPayingAttention: false,
      hasHelloEnded: false,
      isResponding: false,
    },

    videos: [
      // Intro
      {
        title: "intro",
      },
      {
        title: "clickable",
      },

      // Paying attention
      {
        title: "hello",
      },
      {
        title: "waiting",
      },

      // Questions
      {
        title: "presentation",
        question: translation(
          "Présente-toi en quelques mots.",
          "Introduce yourself in a few words.",
          "Presentate en pocas palabras."
        ),
      },
      {
        title: "stacks",
        question: translation(
          "Quelles sont tes compétences ?",
          "What are your skills ?",
          "¿Cuáles son tus habilidades?"
        ),
      },
      {
        title: "formation",
        question: translation(
          "Comment t'es-tu formé ?",
          "How did you get trained ?",
          "¿Cómo te formaste?"
        ),
      },
      {
        title: "experience",
        question: translation(
          "Quelle est ton expérience ?",
          "What is your experience ?",
          "¿Cuál es tu experiencia?"
        ),
      },
    ],
  };

  const [state, dispatch] = useReducer<React.Reducer<initialStatesProps, any>>(
    reducer,
    initialState
  );

  function reducer(state: initialStatesProps, action: any) {
    switch (action.type) {
      case "volumeIconClicked":
        return {
          ...state,
          conditions: { ...state.conditions, muteBtn: action.switchBoolean },
        };

      case "newVideoPlayed":
        return {
          ...state,
          conditions: { ...state.conditions },
        };

      case "introBecomesClickable":
        return {
          ...state,
          videoPlaying: "clickable",
          conditions: { ...state.conditions, muteBtn: false, isIntroClickable: true },
        };

      case "getMyAttention":
        return {
          ...state,
          videoPlaying: "hello",
          conditions: { ...state.conditions, isIntroPlaying: false, isPayingAttention: true },
        };

      case "helloEnded":
        return {
          ...state,
          videoPlaying: "waiting",
          conditions: { ...state.conditions, hasHelloEnded: true },
        };

      case "questionPlayed":
        return {
          ...state,
          videoPlaying: action.payload,
          conditions: { ...state.conditions, isResponding: true },
        };

      case "questionEnded":
        return {
          ...state,
          videoPlaying: "waiting",
          conditions: { ...state.conditions, isResponding: false },
        };

      default:
        throw new Error("Unexpected action");
    }
  }

  useEffect(() => {
    setChangeInfo(changeInfo);
  }, [changeInfo, setChangeInfo]);

  return (
    <section id={PARTS.INTERVIEW.ID} className="header">
      <h1 className={styles.titles.h1} dangerouslySetInnerHTML={{ __html: text("h1") }}></h1>

      <div className="mainContent">
        <article className="interview">
          <div className="letInterviewAtSameHeight"></div>

          {state.videos.map((data, index) => {
            return <Video key={index} title={data.title} state={state} dispatch={dispatch} />;
          })}
        </article>

        <Info />
      </div>

      <ContactsList style={"flex items-center justify-evenly gap-5 py-2 cursor-pointer"} />

      <a href={RESUME_URL} target="_blank" className="lookAtMyResume">
        {text("lookAtMyResume")}
      </a>
    </section>
  );
}
