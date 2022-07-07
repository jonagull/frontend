import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-page__wrapper">
        <div className="black-side__wrapper">
          <div className="black-content__container">
            <h1>Filmaker Screenwriter Soundguy</h1>
            <button
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Portfolio
            </button>
          </div>
        </div>
        <div className="white-side__wrapper">
          <div className="white-content__container">
            <h1>I also rent out stuff.</h1>
            <button
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
