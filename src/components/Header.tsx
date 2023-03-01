import { useNavigate } from "react-router-dom";

import {
  ROUTE_EXPERIENCE,
  ROUTE_EXPERIENCE_LABEL,
  ROUTE_FORMATION,
  ROUTE_FORMATION_LABEL,
  ROUTE_PRESENTATION,
  ROUTE_PRESENTATION_LABEL,
} from "../commons/commons";

// Utils
import { parts } from "../utils/parts";

export function Header() {
  const navigate = useNavigate();

  function changePart(route: string, navigate: (route: string) => void) {
    switch (route) {
      case ROUTE_PRESENTATION:
        navigate(ROUTE_PRESENTATION);
        break;
      case ROUTE_EXPERIENCE:
        navigate(ROUTE_EXPERIENCE);
        break;
      case ROUTE_FORMATION:
        navigate(ROUTE_FORMATION);
        break;

      default:
        throw new Error("Option dans le menu app bar non défini");
    }
  }

  return (
    <header>
      <ul className="parts">
        {parts.map((part, index) => {
          return (
            <li key={index} onClick={() => changePart(part.route, navigate)}>
              {part.name}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
