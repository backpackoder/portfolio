// Types
import { initialStatesProps } from "./types";

export type ProviderProps = {
  children: React.ReactNode;
};

export type VideoProps = {
  title: string;
  state: initialStatesProps;
  dispatch: React.Dispatch<any>;
};

export type FlagProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
