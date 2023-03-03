// Commons
import {
  ROUTE_EXPERIENCE,
  ROUTE_EXPERIENCE_LABEL,
  ROUTE_FORMATION,
  ROUTE_FORMATION_LABEL,
  ROUTE_PRESENTATION,
  ROUTE_PRESENTATION_LABEL,
} from "../commons/commons";

// Types
import { Part } from "../types/types";

export const parts: Part<string>[] = [
  { name: ROUTE_PRESENTATION_LABEL, route: ROUTE_PRESENTATION },
  { name: ROUTE_EXPERIENCE_LABEL, route: ROUTE_EXPERIENCE },
  { name: ROUTE_FORMATION_LABEL, route: ROUTE_FORMATION },
];
