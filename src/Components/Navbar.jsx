import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

export const Navbar = ({ invert }) => {
  let navigate = useNavigate();

  const [isScrolling, setIsScrolling] = useState(false);

  const userIsScrolling = () =>
    window.scrollY ? setIsScrolling(true) : setIsScrolling(false);

  window.addEventListener("scroll", userIsScrolling);

  return (
    <React.Fragment>
      <div
        className={
          invert
            ? isScrolling
              ? "navbar__wrapper navbar__bg"
              : "navbar__wrapper navbar-inverted__bg"
            : isScrolling
            ? "navbar__wrapper navbar-inverted__bg"
            : "navbar__wrapper navbar__bg"
        }
      >
        <div style={{ display: "flex" }}>
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            DUK
          </h1>
          {invert && (
            <ScrollIntoView alignToTop={true} selector="#hr-arbeid">
              <h1 style={{ marginLeft: "200px" }}>Arbeid</h1>
            </ScrollIntoView>
          )}
          {invert && (
            <ScrollIntoView selector=".title__container">
              <h1 style={{ marginLeft: "200px" }}>Utleie</h1>
            </ScrollIntoView>
          )}
          {!invert && (
            <ScrollIntoView alignToTop={true} selector="#hr-prosjekter">
              <h1 style={{ marginLeft: "200px" }}>Prosjekter</h1>
            </ScrollIntoView>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
