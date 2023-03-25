// Components
import { Navigation } from "./Navigation";
import { InfoShowed } from "./InfoShowed";

export function Info() {
  return (
    <article className="info">
      <InfoShowed />
      <Navigation />
    </article>
  );
}
