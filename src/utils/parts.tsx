// Commons
import {
  ROUTE_EXPERIENCE,
  ROUTE_EXPERIENCE_LABEL,
  ROUTE_FORMATION,
  ROUTE_FORMATION_LABEL,
  ROUTE_HOME,
  ROUTE_HOME_LABEL,
} from "../commons/commons";

// Types
import { Part } from "../types/types";

export const parts: Part[] = [
  { name: ROUTE_HOME_LABEL, route: ROUTE_HOME },
  { name: ROUTE_EXPERIENCE_LABEL, route: ROUTE_EXPERIENCE },
  { name: ROUTE_FORMATION_LABEL, route: ROUTE_FORMATION },
];
