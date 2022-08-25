import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  let navigate = useNavigate();

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
      <div className={windowToggle ? leftToggle ? "container hover-left" : "container hover-right" : "container"} id="container" onMouseEnter={() => toggleWindow()} onMouseLeave={() => toggleWindow()}>
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
      </div>
    </React.Fragment >
  );
};


