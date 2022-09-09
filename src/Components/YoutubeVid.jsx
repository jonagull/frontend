import React, { useState } from "react";
import { useGetYoutubeUrl } from "../pages/PortfolioPage/useGetYoutubeUrl";

export function YoutubeVid() {
  const [youtubeUrl, setYoutubeUrl] = useState();
  useGetYoutubeUrl(setYoutubeUrl);

  console.log(youtubeUrl);

  if (youtubeUrl === undefined || youtubeUrl.data[0].attributes.Link === "") {
    return <div style={{ color: "white" }}></div>;
  } else {
    return (
      <>
        <hr
          style={{
            width: "90%",
            marginBottom: "40px",
          }}
        ></hr>
        <div className="video__container">
          <iframe
            alt="video"
            src={youtubeUrl && youtubeUrl.data[0].attributes.Link}
          ></iframe>
        </div>
      </>
    );
  }
}
