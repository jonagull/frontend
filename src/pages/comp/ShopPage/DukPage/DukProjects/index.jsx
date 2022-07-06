import React, { useState } from "react";
import { apiUrl } from "../../../../../apiShit";
import { MarkDownWrapper } from "../../../MarkDownWrapper";
import { useGetDukProjects } from "./useGetDukProjects";

export const DukProjects = () => {
  const [dukProjects, setDukProjects] = useState("");

  useGetDukProjects(setDukProjects);

  return (
    <React.Fragment>
      <div className="duk-projects__wrapper">
        <h1
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100vw",
          }}
        >
          Tidligere arbeid:
        </h1>
        <div>
          {dukProjects &&
            dukProjects.data.map((x) => (
              <div className="duk-project__container">
                <div className="duk-content__container">
                  <h1>{x.attributes.title}</h1>
                  <MarkDownWrapper
                    markdown={x.attributes.description}
                  />
                </div>
                <div className="duk-image__container">
                  <img
                    src={`${apiUrl}${x.attributes.thumbnail.data.attributes.url}`}
                  ></img>
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};
