import React, { useState } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";
import { MarkDownWrapper } from "../../../../Components/MarkDownWrapper";
import { useGetDukProjects } from "./useGetDukProjects";

export const DukProjects = () => {
  const [dukProjects, setDukProjects] = useState("");

  useGetDukProjects(setDukProjects);

  return (
    <React.Fragment>
      <div className="duk-projects__wrapper">
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
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
                  <MarkDownWrapper markdown={x.attributes.description} />
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
