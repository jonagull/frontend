import React, { useState } from "react";
import { useGetProjects } from "./useGetProjecs";
import { useGetPortfolioContent } from "./useGetPortfolioContent";
import { useGetYoutubeUrl } from "./useGetYoutubeUrl";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Button from "@mui/material/Button";
import { apiUrl } from "../../constants/baseApiUrl";
import { Navbar } from "../../Components/Navbar";
import EmailModal from "../../Components/EmailForm";
import { MarkDownWrapper } from "../../Components/MarkDownWrapper";

export const PortfolioPage = () => {
  const [projectData, setProjectData] = useState();
  const [portfolioContentData, setPortfolioContentData] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();

  useGetProjects(setProjectData);
  useGetPortfolioContent(setPortfolioContentData);
  useGetYoutubeUrl(setYoutubeUrl);

  return (
    <React.Fragment>
      <Navbar />
      <div className="project-component__wrapper">
        <div className="duk-page__wrapper">
          <div className="duk-content__wrapper">
            <div className="header__container">
              <h1>
                {portfolioContentData &&
                  portfolioContentData.data.attributes.title}
              </h1>
            </div>
            <div className="desc__container">
              <MarkDownWrapper
                markdown={
                  portfolioContentData &&
                  portfolioContentData.data.attributes.description
                }
              />
              <EmailModal invert={false} />
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
            style={{ borderRadius: "20px", border: "none" }}
            width="900"
            height="500"
            src={youtubeUrl && youtubeUrl.data[0].attributes.Link}
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
          <h1 style={{ marginBottom: "30px" }}>Utvalgte Prosjekter:</h1>
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
                <div
                  className="content__container"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  <h1>{x.attributes.ProjectTitle}</h1>
                  <MarkDownWrapper markdown={x.attributes.ProjectDescription} />
                  {x.attributes.youtubelink && (
                    <Button
                      type="submit"
                      value="video"
                      variant="contained"
                      endIcon={<VideoLibraryIcon />}
                      href={x.attributes.youtubelink}
                      target="_blank"
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        marginTop: "10px",
                      }}
                    >
                      Video
                    </Button>
                  )}
                </div>
                <div className="image__container">
                  <img
                    style={{ width: "600px", height: "auto" }}
                    src={
                      apiUrl +
                      x.attributes.project_thumbnail.data.attributes.url
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
