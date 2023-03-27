import { useContext } from "react";

// Context
import { AppContext } from "../AppContext";

// Types
import { AppProviderContextTypes } from "../types/types";

export function PageNotFound() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <div className="pageNotFound">
      <h3>{text("pageNotFound")}</h3>

      <video autoPlay muted loop>
        <source src={`/page_not_found.mp4`} type="video/mp4" />
        {text("videoNotFound")}
      </video>

      <p>{text("pageNotFoundDescription")}</p>
    </div>
  );
}
