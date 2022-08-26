import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCheckMobileScreen from "../useCheckMobileScreen";

export const LandingPage = () => {
  let navigate = useNavigate();

  const isMobile = useCheckMobileScreen();

  const [leftToggle, setLeftToggle] = useState(false)
  const [windowToggle, setWindowToggle] = useState(false)

  const toggleWindow = () => {
    setWindowToggle(!windowToggle)
  }

  const toggleLeft = () => {
    setLeftToggle(!leftToggle)
  }

  return (
    <React.Fragment>
      {!isMobile && (<div className={windowToggle ? leftToggle ? "container hover-left" : "container hover-right" : "container"} id="container" onMouseEnter={() => toggleWindow()} onMouseLeave={() => toggleWindow()}>
        <div className="split left" onMouseEnter={() => toggleLeft()} onMouseLeave={() => toggleLeft()}>
          <h4>Om Daniel</h4>
          <h4 style={{ position: "absolute", top: "25%" }}>Utvalgte Prosjekter</h4>
          <Button variant="contained" className="button"
            style={{ backgroundColor: "white", color: "black", borderRadius: "8px" }} onClick={() => {
              navigate("/portfolio");
            }}>Daniel</Button>
        </div>

        <div className="split right">
          <h4 style={{ color: "black" }}>Våre tjenester</h4>
          <h4 style={{ color: "black", position: "absolute", top: "25%" }}>Tidligere Arbeid</h4>
          <h4 style={{ color: "black", position: "absolute", top: "30%" }}>Utleie</h4>
          <Button className="button"
            style={{ backgroundColor: "black", color: "white", borderRadius: "8px" }}
            onClick={() => {
              navigate("/shop");
            }}
          >
            DUK
          </Button>
        </div>
      </div>)}

      {isMobile && <div>

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
      </div>}

    </React.Fragment >
  );
};


