import React, { useState } from "react";
import { useGetYoutubeUrl } from "../pages/PortfolioPage/useGetYoutubeUrl";

export function YoutubeVid() {
    const [youtubeUrl, setYoutubeUrl] = useState();
    useGetYoutubeUrl(setYoutubeUrl);

    console.log(youtubeUrl == undefined || null)

    if (youtubeUrl == undefined || null) {
        return (
            <div>
                <h1>
                    LOL
                </h1>
            </div>

        )
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
                        src={youtubeUrl && youtubeUrl.data[0].attributes.Link}
                    ></iframe>
                </div>
            </>
        )

    }



}