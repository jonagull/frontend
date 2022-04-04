import React, { useState } from "react";
import { Navbar } from "../../Navbar";
import { useGetProjects } from "./useGetProjecs";

export const ProjectComponent = () => {
  const [projectData, setProjectData] = useState();

  useGetProjects(setProjectData);

  return (
    <div className="project-component__wrapper">
      <Navbar />
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
