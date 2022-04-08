import React, { useState } from "react";
import { Navbar } from "../../Navbar";
import { useGetProjects } from "./useGetProjecs";

export const ProjectComponent = () => {
  const [projectData, setProjectData] = useState();

  useGetProjects(setProjectData);

  return (
    <div className="project-component__wrapper">
      <Navbar />
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
          <img
            src="https://hatch.macleay.net/wp-content/uploads/2019/04/Stanley_Kubrick_-_WB_promo.jpg"
            height="300px"
          ></img>
        </div>
      </div>
      <div className="">
        <h1>What I'm about</h1>
      </div>
      <hr
        style={{
          width: "80%",
          marginBottom: "40px",
          height: "0.5px",
          color: "black",
          backgroundColor: "black",
          opacity: "0.7",
        }}
      ></hr>
      <div className="description__wrapper">
        <p>
          Hashtag fanny paleo chicharrones twee! Marfa distillery offal swag
          venmo them kickstarter. Biodiesel tacos plaid deep raclette meggings
          shoreditch banjo letterpress bread you haven't mustache ennui mustache
          tile yolo drinking party kitsch charcoal mumblecore snackwave
          messenger artisan chic carry coffee trade jianbing brooklyn echo axe
        </p>
      </div>
      <hr
        style={{
          width: "80%",
          marginBottom: "40px",
          height: "0.5px",
          color: "black",
          backgroundColor: "black",
          opacity: "0.7",
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
  );
};
