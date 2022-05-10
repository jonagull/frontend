import React, { useState } from "react";
import { useGetProjects } from "./useGetProjecs";
import { Rotate as Hamburger } from "hamburger-react";
import { useGetPortfolioContent } from "./useGetPortfolioContent";
import { apiUrl } from "../../../apiShit";
import { Sidebar } from "../Sidebar";

export const ProjectComponent = () => {
  const [projectData, setProjectData] = useState();
  const [portfolioContentData, setPortfolioContentData] = useState();

  useGetProjects(setProjectData);
  useGetPortfolioContent(setPortfolioContentData);

  return (
    <React.Fragment>
      {/* <div className="hamburger__container">
        <Hamburger size={50} mr={10} />
      </div> */}

      <div className="project-component__wrapper">
        <div className="duk-page__wrapper">
          <div className="duk-content__wrapper">
            <div className="header__container">
              <h1>
                {portfolioContentData &&
                  portfolioContentData.data.attributes.title}
              </h1>
            </div>
            <div className="desc__container" style={{ color: "black" }}>
              <p>
                {portfolioContentData &&
                  portfolioContentData.data.attributes.description}
              </p>
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
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
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
