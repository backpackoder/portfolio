import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Commons
import {
  ROUTE_EXPERIENCE,
  ROUTE_EXPERIENCE_DETAILLED,
  ROUTE_FORMATION,
  ROUTE_PRESENTATION,
} from "./commons/commons";

// Components
import { Header } from "./components/Header";
import { Presentation } from "./components/presentation/Presentation";
import { Footer } from "./components/Footer";
import { Experience } from "./components/experience/Experience";
import { Formation } from "./components/formation/Formation";
import { ExperienceDetailled } from "./components/experience/ExperienceDetailled";
import { Interview } from "./Interview/Interview";

export function AppConsumer() {
  const [experienceID, setExperienceID] = useState(0);

  return (
    <>
      <Router>
        <Header />

        <Interview />

        <main>
          <Routes>
            <Route path={ROUTE_PRESENTATION} element={<Presentation />} />

            <Route
              path={ROUTE_EXPERIENCE}
              element={<Experience setExperienceID={setExperienceID} />}
            />
            <Route
              path={ROUTE_EXPERIENCE_DETAILLED}
              element={<ExperienceDetailled experienceID={experienceID} />}
            />

            <Route path={ROUTE_FORMATION} element={<Formation />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}
