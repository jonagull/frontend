import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useGetMics } from "./useGetMics";

export const MicsPage = () => {
  const [micData, setMicData] = useState();

  useGetMics(setMicData);
  console.log(micData);

  return (
    <div className="mics__wrapper">
      <div className="mic-products__wrapper">
        {micData &&
          micData.data.map((x, key) => (
            <div className="mic-content__wrapper">
              <div
                key={key}
                className="mic-content__container"
                style={{ color: "white" }}
              >
                <h2>{x.attributes.title}</h2>
                {console.log(x.attributes.title)}
                <p>{x.attributes.description}</p>
                <Button
                  variant="contained"
                  href={x.attributes.hygglo_link}
                  target="_blank"
                  style={{
                    width: "70px",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    marginTop: "10px",
                  }}
                >
                  <h4 style={{ fontSize: "15px", fontWeight: "800" }}>Link</h4>
                </Button>
              </div>
              <div className="mic-image__container">
                <img
                  src={`http://localhost:1337${x.attributes.thumbnail.data.attributes.url}`}
                ></img>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
