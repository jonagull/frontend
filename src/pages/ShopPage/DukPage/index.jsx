import React, { useState } from "react";
import { apiUrl } from "../../../constants/baseApiUrl";
import EmailModal from "../../../Components/EmailForm";
import { MarkDownWrapper } from "../../../Components/MarkDownWrapper";
import { ServicesContainer } from "./ServicesContainer";
import { useGetDukContent } from "./useGetDukContent";
import { CarouselComponent } from "../../../Components/CarouselComponent";
import useCheckMobileScreen from "../../../useCheckMobileScreen";

export const DukPage = () => {
  const [dukContent, setDukContent] = useState("");

  const isMobile = useCheckMobileScreen();


  useGetDukContent(setDukContent);

  return (
    <React.Fragment>
      <div className="duk-page__wrapper">
        <div className="duk-content__wrapper">
          <div className="header__container">
            <h1>{dukContent && dukContent.data[0].attributes.title}</h1>
          </div>
          <div className="desc__container">
            <MarkDownWrapper
              markdown={dukContent && dukContent.data[0].attributes.description}
            />

            <div style={{ marginTop: "15px" }}>
              <EmailModal invert={true} />
            </div>
          </div>
        </div>
        <div className="image__container">
          <img
            src={`${apiUrl}${dukContent &&
              dukContent.data[0].attributes.profilepic.data.attributes.url
              }`}
          ></img>
        </div>
      </div>

      {!isMobile && <CarouselComponent />}

      <ServicesContainer data={dukContent && dukContent.data[0].attributes} />
      <hr
        id="hr-arbeid"
        style={{
          width: "80%",
          marginLeft: "10%",
        }}
      />
    </React.Fragment>
  );
};
