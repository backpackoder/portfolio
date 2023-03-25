import { useContext } from "react";

// Context
import { AppContext } from "../AppContext";

// Types
import { AppProviderContextTypes } from "../types/types";

export function PageNotFound() {
  const { text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <div>
      <p>{text("pageNotFound")}</p>
    </div>
  );
}
