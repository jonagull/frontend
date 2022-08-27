import React, { useState } from "react";
import { useGetYoutubeUrl } from "../pages/PortfolioPage/useGetYoutubeUrl";

export function YoutubeVid() {
    const [youtubeUrl, setYoutubeUrl] = useState();
    useGetYoutubeUrl(setYoutubeUrl);

    if (youtubeUrl.data[0].Link == undefined || youtubeUrl.data[0].Link == null) {
        return (
            <div>

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