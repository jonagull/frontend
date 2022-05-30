import React, { useState } from "react";
import { useGetProjects } from "./useGetProjecs";
import { useGetPortfolioContent } from "./useGetPortfolioContent";
import { apiUrl } from "../../../apiShit";
import { useGetYoutubeUrl } from "./useGetYoutubeUrl";
import { Navbar } from "../../Navbar";
import EmailModal from "../../../EmailForm";

export const PortfolioPage = () => {
  const [projectData, setProjectData] = useState();
  const [portfolioContentData, setPortfolioContentData] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();

  useGetProjects(setProjectData);
  useGetPortfolioContent(setPortfolioContentData);
  useGetYoutubeUrl(setYoutubeUrl);

  return (
    <React.Fragment>
      <Navbar color={{ color: "black" }} />
      <div className="project-component__wrapper">
        <div className="duk-page__wrapper">
          <div className="duk-content__wrapper">
            <div className="header__container">
              <h1 style={{ color: "black" }}>
                {portfolioContentData &&
                  portfolioContentData.data.attributes.title}
              </h1>
            </div>
            <div className="desc__container" style={{ color: "black" }}>
              <p>
                {portfolioContentData &&
                  portfolioContentData.data.attributes.description}
              </p>
              <EmailModal invert={true} />
            </div>
            <div className="arrow-10"></div>
          </div>
          <div className="image__container">
            <img
              src={`${apiUrl}${
                portfolioContentData &&
                portfolioContentData.data.attributes.image.data.attributes.url
              }`}
            ></img>
          </div>
        </div>

        <hr
          style={{
            width: "80%",
            marginBottom: "40px",
          }}
        ></hr>
        <div className="video__container">
          <iframe
            style={{ borderRadius: "20px" }}
            width="900"
            height="500"
            src={youtubeUrl && youtubeUrl.data[0].attributes.youtube_link}
          ></iframe>
        </div>
        <hr
          style={{
            marginTop: "40px",
            width: "80%",
            marginBottom: "40px",
          }}
        ></hr>
        <div>
          <h1 style={{ marginBottom: "30px" }}>Prosjekter:</h1>
          {projectData &&
            projectData.data.map((x, key) => (
              <div
                key={key}
                className={
                  key % 2
                    ? "project-left-component__wrapper"
                    : "project-right-component__wrapper"
                }
              >
                <div className="content__container">
                  <h1>{x.attributes.ProjectTitle}</h1>
                  <p>{x.attributes.ProjectDescription}</p>
                </div>
                <div className="image__container">
                  <img
                    style={{ width: "400px", height: "auto" }}
                    src={
                      apiUrl +
                      x.attributes.project_thumbnail.data.attributes.formats
                        .thumbnail.url
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};