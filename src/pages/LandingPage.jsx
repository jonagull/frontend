import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const LandingPage = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="landing-page__wrapper">
        <div className="black-side__wrapper">
          <h1
            style={{ color: "white", position: "absolute", top: 10, left: 40 }}
            onClick={() => {
              navigate("/");
            }}
          >
            DUK
          </h1>
          <div className="black-content__container">
            <h1>Om Daniel</h1>
            <h1>Utvalgte Prosjekter</h1>
            <button
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Daniel
            </button>
          </div>
        </div>
        <div className="white-side__wrapper">
          <div className="white-content__container">
            <h1>Om DUK</h1>
            <h1>Våre tjenester</h1>
            <h1>Tidligere Arbeid</h1>
            <h1>Utleie</h1>
            <button
              onClick={() => {
                navigate("/shop");
              }}
            >
              DUK
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
