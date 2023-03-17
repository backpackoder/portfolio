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
import { Experiences } from "./components/experience/Experiences";
import { Formation } from "./components/formation/Formation";
import { Experience } from "./components/experience/Experience";
import { Interview } from "./components/Interview/Interview";
import { PageNotFound } from "./components/PageNotFound";

export function AppConsumer() {
  return (
    <>
      <Router>
        <Header />

        <Interview />

        <main>
          <Routes>
            <Route path={ROUTE_PRESENTATION} element={<Presentation />} />

            <Route path={ROUTE_EXPERIENCE} element={<Experiences />} />
            <Route path={ROUTE_EXPERIENCE_DETAILLED} element={<Experience />} />

            <Route path={ROUTE_FORMATION} element={<Formation />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}
