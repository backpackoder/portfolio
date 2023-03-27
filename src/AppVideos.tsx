import { useReducer } from "react";

// Context
import { AppVideoContext } from "./AppContext";

// Languages
import { translation } from "./languages/languages";

// Types
import { initialStatesProps } from "./types/types";

export function AppVideos(props: object) {
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

  function reducer(state: initialStatesProps, action: any): any {
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
        throw new Error("Reducer error");
    }
  }

  const contextValue = {
    state,
    dispatch,
  };

  return <AppVideoContext.Provider {...props} value={contextValue} />;
}
