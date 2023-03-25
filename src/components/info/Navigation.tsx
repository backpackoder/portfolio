import { useContext } from "react";

// Context
import { AppContext } from "../../AppContext";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

// Types
import { AppProviderContextTypes } from "../../types/types";

// Components
import { infoComponentList } from "./Infos";

export function Navigation() {
  const { changeInfo, handleNextInfo }: AppProviderContextTypes = useContext(AppContext);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < infoComponentList.length; i++) {
    dots.push(
      <button
        key={i}
        className={i === changeInfo ? "dot active" : "dot inactive"}
        onClick={() => handleNextInfo({ isNext: i > changeInfo, isArrow: false, index: i })}
      ></button>
    );
  }

  return (
    <div className="navigation">
      <button className="arrow" onClick={() => handleNextInfo({ isNext: false })}>
        <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" color="blue" />
      </button>

      <div className="dots">{dots.map((item) => item)}</div>

      <button className="arrow" onClick={() => handleNextInfo({ isNext: true })}>
        <FontAwesomeIcon icon={faArrowCircleRight} size="2x" color="blue" />
      </button>
    </div>
  );
}
