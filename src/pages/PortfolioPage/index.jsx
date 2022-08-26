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
import useCheckMobileScreen from "../../useCheckMobileScreen";

export const PortfolioPage = () => {
  const [projectData, setProjectData] = useState();
  const [portfolioContentData, setPortfolioContentData] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();

  const isMobile = useCheckMobileScreen();

  useGetProjects(setProjectData);
  useGetPortfolioContent(setPortfolioContentData);
  useGetYoutubeUrl(setYoutubeUrl);

  console.log(isMobile)

  return (
    <React.Fragment>
      <Navbar invert={false} />
      <div className="project-component__wrapper">
        <div className="duk-page__wrapper" id="top">
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
              src={`${apiUrl}${portfolioContentData &&
                portfolioContentData.data.attributes.image.data.attributes.url
                }`}
            ></img>
          </div>
        </div>


        {youtubeUrl.data[0].attributes.Link && <hr
          style={{
            width: "90%",
            marginBottom: "40px",
          }}
        ></hr>}

        {youtubeUrl.data[0].attributes.Link && (<div className="video__container">
          <iframe
            src={youtubeUrl && youtubeUrl.data[0].attributes.Link}
          ></iframe>
        </div>)}

        <div
          id="hr-prosjekter"
          style={{
            height: "70px",
            width: "90%",
            marginBottom: "20px",
          }}
        >
          <hr
            style={{
              width: "100%",
              position: "relative",
              top: 80,
            }}
          />
        </div>
        <div>
          <h1 className="chosen-projects">Utvalgte Prosjekter:</h1>
          {projectData &&
            projectData.data.map((x, key) => (
              <div
                key={key}
                style={!isMobile ? key % 2 ? { flexDirection: "row-reverse", marginTop: "100px" } : {} : { height: "600px", marginBotton: "20px" }}

                className={
                  key % 2
                    ? "project-right-component__wrapper"
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
                <img
                  style={isMobile ? { width: '350px', height: 'auto' } : { width: '600px', height: 'auto' }}
                  src={
                    apiUrl +
                    x.attributes.project_thumbnail.data.attributes.url
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};
