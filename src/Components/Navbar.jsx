import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="">
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            DUK
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};
