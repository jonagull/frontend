import React, { useState } from "react";
import { useGetDukContent } from "./useGetDukContent";

export const DukPage = () => {
  const [dukContent, setDukContent] = useState("");

  useGetDukContent(setDukContent);

  console.log("yooO", dukContent);
  //   console.log(dukContent.data[0].attributes.description);

  return (
    <React.Fragment>
      {/* <h1
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontSize: "150px",
        }}
      >
        DUK
      </h1> */}
      <div className="duk-page__wrapper">
        <div className="duk-content__wrapper">
          <div className="header__container">
            <h1>{dukContent && dukContent.data[0].attributes.title}</h1>
          </div>
          <div className="desc__container">
            <p>{dukContent && dukContent.data[0].attributes.description}</p>
          </div>
        </div>
        <div className="image__container">
          <img
            src={`http://localhost:1337${
              dukContent &&
              dukContent.data[0].attributes.profilepic.data.attributes.url
            }`}
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};
