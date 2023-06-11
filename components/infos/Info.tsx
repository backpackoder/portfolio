// Components
import { Navigation } from "./Navigation";
import { InfoShowed } from "./InfoShowed";

export function Info() {
  return (
    <article
      className="flex flex-col justify-center min-w-[300px] w-[500px] max-w-full p-2 rounded-lg shadow-[0_0px_8px_-4px]
    animate-[fadeInAt50] overflow-hidden"
    >
      <InfoShowed />
      <Navigation />
    </article>
  );
}
