import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";
import { LinkButtonStyle } from "../../../../constants/theme";
import { useGetMixers } from "./useGetMixers";

export const MixersPage = () => {
  const [mixerData, setMixerData] = useState("");

  useGetMixers(setMixerData);

  return (
    <div className="product-category__wrapper">
      <div className="products__wrapper">
        {mixerData &&
          mixerData.data.map((x, key) => (
            <div className="product-content__wrapper">
              <div key={key} className="product-content__container">
                <h2>{x.attributes.title && x.attributes.title}</h2>
                <p>{x.attributes.description && x.attributes.description}</p>
                <Button
                  variant="contained"
                  href={x.attributes.hygglo_link && x.attributes.hygglo_link}
                  target="_blank"
                  style={LinkButtonStyle}
                >
                  <h4 style={{ fontSize: "15px", fontWeight: "800" }}>Link</h4>
                </Button>
              </div>
              <div className="product-image__container">
                <img
                  alt="thumbnail"
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
