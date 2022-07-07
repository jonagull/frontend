import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";
import { useGetMisc } from "./useGetMisc";

export const MiscPage = () => {
  const [miscData, setMiscData] = useState("");

  useGetMisc(setMiscData);

  return (
    <div className="mics__wrapper">
      <div className="mic-products__wrapper">
        {miscData &&
          miscData.data.map((x, key) => (
            <div className="mic-content__wrapper">
              <div
                key={key}
                className="mic-content__container"
                style={{ color: "white" }}
              >
                <h2>{x.attributes.title && x.attributes.title}</h2>
                <p>{x.attributes.description && x.attributes.description}</p>
                <Button
                  variant="contained"
                  href={x.attributes.hygglo_link && x.attributes.hygglo_link}
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
                  src={
                    x.attributes.thumbnail.data
                      ? `${apiUrl}${x.attributes.thumbnail.data.attributes.url}`
                      : null
                  }
                ></img>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
