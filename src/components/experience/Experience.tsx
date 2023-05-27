import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import { AppContext } from "../../AppContext";

// Hooks
import { stringForUrl } from "../../hooks/stringForUrl";

// Utils
import { experienceData } from "../../utils/experienceData";

// Types
import { AppProviderContextTypes, ExperienceProps } from "../../types/types";

// Components
import { PageNotFound } from "../PageNotFound";

export function Experience() {
  const { title } = useParams();

  const { language, text }: AppProviderContextTypes = useContext(AppContext);

  const mapTitle = experienceData.map((data) => stringForUrl(data.title));
  const findIndex = mapTitle.findIndex((data) => stringForUrl(data) === title);
  const data = experienceData[findIndex];

  return findIndex === -1 ? (
    <PageNotFound />
  ) : (
    <section key={data.title} className="experience">
      <div className="titleAndTime">
        <h3>{data.title}</h3>
        <span>
          {data.time[language]} - {data.team[language]}
        </span>
      </div>

      <div className="bannerWrapper">
        <img src={`../${data.imgs[0]}`} alt={data.title} />
      </div>

      <div className="links">
        <a href={data.url} target="_blank">
          {text("websiteLink")}
        </a>
        <a href={data.gitHub} target="_blank">
          {text("gitHubLink")}
        </a>
      </div>

      <Properties data={data} />

      <p className="description">{data.description[language]}</p>
    </section>
  );
}

function Properties({ data }: { data: ExperienceProps }) {
  const { language, text }: AppProviderContextTypes = useContext(AppContext);

  return (
    <div className="properties">
      <p className="type">
        <span className="title">{text("type")}</span>
        <span className="content">{data.type[language]}</span>
      </p>

      <p className="theme">
        <span className="title">{text("theme")}</span>
        <span className="content">{data.theme[language]}</span>
      </p>

      <p className="stack">
        <span className="title">{text("stack")}</span>
        <span className="content stack">
          {data.stack.map((stack) => {
            return <img key={stack} src={stack} alt={stack} className="stackImg" />;
          })}
        </span>
      </p>

      <p className="skills">
        <span className="title">{text("skills")}</span>
        <span className="content">
          {data.details.map((detail) => {
            return (
              <Fragment key={detail}>
                {detail}
                <br />
              </Fragment>
            );
          })}
        </span>
      </p>

      <p className="translatedIn">
        <span className="title">{text("translatedIn")}</span>
        <span className="content language">
          {data.translation.map((translation) => {
            return (
              <span key={translation.iso}>
                <img
                  src={`https://flagcdn.com/${translation.iso}.svg`}
                  alt={translation.translation[language]}
                  className="translationImg"
                />
                <span>{translation.translation[language]}</span>
                <br />
              </span>
            );
          })}
        </span>
      </p>
    </div>
  );
}
