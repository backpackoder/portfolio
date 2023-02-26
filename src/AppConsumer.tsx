import { useContext, useEffect, useMemo, useState } from "react";

// Context
import { AppContext } from "./AppContext";

// Commons
import { JOB, NAMES } from "./commons/commons";

// Components
import { Header } from "./components/Header";
import { Presentation } from "./components/presentation/Presentation";
import { Footer } from "./components/Footer";
import { Experience } from "./components/experience/Experience";
import { Formation } from "./components/formation/Formation";
import { Parts } from "./components/Parts";

export function AppConsumer() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const [presentation, setPresentation] = useState(true);
  const [experience, setExperience] = useState(false);
  const [formation, setFormation] = useState(false);
  // console.log("presentation", presentation);
  // console.log("experience", experience);
  // console.log("formation", formation);

  const partList = [presentation, experience, formation];
  const setPartList: React.Dispatch<React.SetStateAction<boolean>>[] = [
    setPresentation,
    setExperience,
    setFormation,
  ];
  const partsComponents = [<Presentation />, <Experience />, <Formation />];
  // const componentShowed = partsComponents[partList.indexOf(true)];

  function changePart(setter: React.Dispatch<React.SetStateAction<boolean>>) {
    setPartList.map((part) => part(false));
    setter(true);
  }

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  return (
    <>
      <Header changePart={changePart} setPartList={setPartList} />
      <h1 style={{ marginTop: headerHeight }}>
        Bonjour, je m'appelle <span>{NAMES}</span>, votre futur <span>{JOB}</span>.
      </h1>
      <Parts componentShowed={partsComponents[partList.indexOf(true)]} />
      <Footer />
    </>
  );
}
