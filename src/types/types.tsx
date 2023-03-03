export interface LanguageStrings<T> {
  fr: T;
  en: T;
  es: T;
}
export type Part<T> = {
  name: LanguageStrings<T>;
  route: string;
};
export interface LanguageObject<T> {
  [key: string]: LanguageStrings<T>;
}
export type Iso = "fr" | "en" | "es";
