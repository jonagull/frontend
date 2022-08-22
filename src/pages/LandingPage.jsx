import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  let navigate = useNavigate();

  // const left = document.querySelector("#left");
  // const right = document.querySelector("#right");
  // const container = document.querySelector("#container");

  // left.addEventListener("mouseenter", () => {
  //   container.classList.add("hover-left");
  // });

  // left.addEventListener("mouseleave", () => {
  //   container.classList.remove("hover-left");
  // });

  // right.addEventListener("mouseenter", () => {
  //   container.classList.add("hover-right");
  // });

  // right.addEventListener("mouseleave", () => {
  //   container.classList.remove("hover-right");
  // });

  const [leftToggle, setLeftToggle] = useState(false)
  const [windowToggle, setWindowToggle] = useState(false)

  console.log("left", leftToggle)
  console.log("WINDOW", windowToggle)

  const toggleWindow = () => {
    setWindowToggle(!windowToggle)
  }

  const toggleLeft = () => {
    setLeftToggle(!leftToggle)
  }


  // const setClass = () => {

  // }


  return (
    <React.Fragment>

      <div className={windowToggle ? leftToggle ? "container hover-left" : "container hover-right" : "container"} id="container" onMouseEnter={() => toggleWindow()} onMouseLeave={() => toggleWindow()}>
        <div className="split left" id="left" onMouseEnter={() => toggleLeft()} onMouseLeave={() => toggleLeft()}>
          <h1 style={{ color: "black" }}>The Designer</h1>
          <a href="#" className="button">Read More</a>
        </div>
        <div className={"split right"} id="right">
          <h1 style={{ color: "black" }}>The Programmer</h1>
          <a href="#" className="button">Read More</a>
        </div>
      </div>
      {/* <div className="container">
        <div className="split left">
          {/* <h1
            // style={{ color: "white", position: "absolute", top: 10, left: 40 }}
            onClick={() => {
              navigate("/");
            }}
          >
            DUK
          </h1>
          <div
          //  className="black-content__container"
          >
            <h1>Om Daniel</h1>
            <h1>Utvalgte Prosjekter</h1>
            <button
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Daniel
            </button>
          </div> */}
      {/* </div>
        <div className="split right"> */}
      {/* <div className="split right">
            {/* <h1>Om DUK</h1>
            <h1>Våre tjenester</h1>
            <h1>Tidligere Arbeid</h1>
            <h1>Utleie</h1>
            <button
              onClick={() => {
                navigate("/shop");
              }}
            >
              DUK
            </button> */}
      {/* </div>
      </div> */}
      {/* </div> */}
    </React.Fragment >
  );
};
