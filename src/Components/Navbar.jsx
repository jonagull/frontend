import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ color }) => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="navbar__wrapper">
        <div className="title__container">
          <h1
            onClick={() => {
              navigate("/");
            }}
            style={color ? color : null}
          >
            DUK
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};
