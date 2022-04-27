import React, { useState } from "react";
import { Navbar } from "../../Navbar";
import { useGetProjects } from "./useGetProjecs";
import { ReactComponent as HomeIcon } from "../../../assets/home.svg";
import { flexbox } from "@mui/system";
import { Rotate as Hamburger } from "hamburger-react";

export const ProjectComponent = () => {
  const [projectData, setProjectData] = useState();

  useGetProjects(setProjectData);

  return (
    <React.Fragment>
      <div className="hamburger__container">
        <Hamburger size={50} />
        {/* <HomeIcon
          style={{
            height: "40px",
            marginLeft: "-150px",
            marginTop: "40px",
          }} */}
        {/* /> */}
      </div>
      <div className="project-component__wrapper">
        <div className="top-section__wrapper">
          <div className="text-button__container">
            <h1>
              Less
              <br />
              IS
              <br /> MORE
            </h1>
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
          <h1 style={{ fontWeight: 600, marginBottom: "15px" }}> Om:</h1>
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
            - Daniel Johannessen
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
