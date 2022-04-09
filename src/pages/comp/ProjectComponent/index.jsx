import React, { useState } from "react";
import { Navbar } from "../../Navbar";
import { useGetProjects } from "./useGetProjecs";
import { ReactComponent as HomeIcon } from "../../../assets/home.svg";
import { flexbox } from "@mui/system";

export const ProjectComponent = () => {
  const [projectData, setProjectData] = useState();

  useGetProjects(setProjectData);

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <HomeIcon
          style={{
            height: "40px",
            marginLeft: "-150px",
            marginTop: "40px",
          }}
        />
      </div>
      <div className="project-component__wrapper">
        <div className="top-section__wrapper">
          <div className="text-button__container">
            <h1>
              LESS
              <br />
              IS
              <br /> MORE
            </h1>
            <button>Press</button>
          </div>
          <div className="image__container">
            <img src="https://hatch.macleay.net/wp-content/uploads/2019/04/Stanley_Kubrick_-_WB_promo.jpg"></img>
          </div>
        </div>
        <div className="header-text__container"></div>
        <hr
          style={{
            width: "80%",
            marginBottom: "40px",
          }}
        ></hr>
        <div className="description__wrapper">
          <h1 style={{ fontWeight: 600, marginBottom: "15px" }}> About:</h1>
          <p style={{ fontSize: "40px", marginBottom: "15px" }}>
            Hashtag fanny paleo chicharrones twee! Marfa distillery offal swag
            venmo them kickstarter. Biodiesel tacos plaid deep raclette meggings
            shoreditch banjo letterpress bread you haven't mustache ennui
            mustache tile yolo drinking party kitsch charcoal mumblecore
            snackwave messenger artisan chic carry coffee trade jianbing
            brooklyn echo axe
          </p>
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: 600,
            }}
          >
            - Jan Banan
          </h1>
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
          <h1>Projects:</h1>
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
                  <p>{x.attributes.ProjectDesciption}</p>
                </div>
                <div className="image__container">
                  <img
                    style={{ width: "400px", height: "auto" }}
                    src={
                      "http://localhost:1337" +
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
