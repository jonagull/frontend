import React, { useState } from "react";
import { apiUrl } from "../../../../apiShit";
import EmailModal from "../../../../EmailForm";
import { useGetDukContent } from "./useGetDukContent";

export const DukPage = () => {
  const [dukContent, setDukContent] = useState("");

  useGetDukContent(setDukContent);

  return (
    <React.Fragment>
      <div className="duk-page__wrapper">
        <div className="duk-content__wrapper">
          <div className="header__container">
            <h1>{dukContent && dukContent.data[0].attributes.title}</h1>
          </div>
          <div className="desc__container">
            <p>{dukContent && dukContent.data[0].attributes.description}</p>
            <EmailModal invert={false} />
          </div>
        </div>
        <div className="image__container">
          <img
            src={`${apiUrl}${
              dukContent &&
              dukContent.data[0].attributes.profilepic.data.attributes.url
            }`}
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};
