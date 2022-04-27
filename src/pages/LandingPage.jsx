import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./comp/Footer";
import { Navbar } from "./Navbar";

export const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="landing-page__wrapper">
        {/* <Navbar /> */}
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
      <div>
        <Footer />
      </div>
    </div>
  );
};
