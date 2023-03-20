import { useContext, useReducer } from "react";
import { AppContext, AppVideoContext } from "./AppContext";

// Context
import { initialStatesProps } from "./types/types";

export function AppVideos(props: object) {
  const { text }: { text: (text: string) => string } = useContext(AppContext);

  const videoTitleList = [
    text("questionAboutPresentation"),
    text("questionAboutStack"),
    text("questionAboutFormation"),
    text("questionAboutExperience"),
  ];

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

    videos: {
      // Intro
      intro: {
        cannot_click: {
          title: "intro",
        },
        can_click: {
          title: "introClickable",
        },
      },
      // Paying attention
      pay_attention: {
        cannot_click: {
          title: "hello",
        },
        can_click: {
          title: "waiting",
        },
      },
      // Questions
      questions: {
        presentation: {
          title: "presentation",
          question: {
            fr: "Présente-toi en quelques mots.",
            en: "Introduce yourself in a few words.",
            es: "Presentate en pocas palabras.",
          },
        },
        stacks: {
          title: "stacks",
          question: {
            fr: "Quelles sont tes compétences ?",
            en: "What are your skills ?",
            es: "¿Cuáles son tus habilidades?",
          },
        },
        formation: {
          title: "formation",
          question: {
            fr: "Comment t'es-tu formé ?",
            en: "How did you get trained ?",
            es: "¿Cómo te formaste?",
          },
        },
        experience: {
          title: "experience",
          question: {
            fr: "Quelle est ton expérience ?",
            en: "What is your experience ?",
            es: "¿Cuál es tu experiencia?",
          },
        },
      },
    },
  };

  const [state, dispatch] = useReducer<React.Reducer<initialStatesProps, any>>(
    reducer,
    initialState
  );
  console.log("state", state);

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
          videoPlaying: "introClickable",
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
