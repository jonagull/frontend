import React, { useState } from "react";
import { useGetDukProjects } from "./useGetDukProjects";

export const DukProjects = () => {
  const [dukProjects, setDukProjects] = useState("");

  async function example(a) {}

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
                  <p>{x.attributes.description}</p>
                </div>
                <div className="duk-image__container">
                  <img
                    src={`http://localhost:1337${x.attributes.thumbnail.data.attributes.url}`}
                  ></img>
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};
