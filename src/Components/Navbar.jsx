import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import HardwareIcon from "@mui/icons-material/Hardware";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import useCheckMobileScreen from "../useCheckMobileScreen";

export const Navbar = ({ invert }) => {
  let navigate = useNavigate();

  const isMobile = useCheckMobileScreen();

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
        <div
          style={isMobile ? {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0",
          } : {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 60px",
          }}
        >
          <h1 style={isMobile ? {
            fontSize: "30px"
          } : {}}
            onClick={() => {
              navigate("/");
            }}
          >
            DUK
          </h1>
          <div
            style={isMobile ? {
              display: "flex",
              justifyCoxntent: "space-around",
              alignItems: "center",
              marginRight: "40px"
            } : {
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "40%",
            }}
          >
            {invert && (
              <ScrollIntoView alignToTop={true} selector="#hr-arbeid">
                <span style={isMobile ? {
                  marginRight: "10px"
                } : {

                }}>
                  <HardwareIcon />
                  <h2>Arbeid</h2>
                </span>
              </ScrollIntoView>
            )}
            {invert && (
              <ScrollIntoView selector=".title__container">
                <span>
                  <HomeRepairServiceIcon />
                  <h2>Utleie</h2>
                </span>
              </ScrollIntoView>
            )}
            {!invert && (
              <ScrollIntoView alignToTop={true} selector="#hr-prosjekter">
                <span>
                  <HardwareIcon />
                  <h2>Prosjekter</h2>
                </span>
              </ScrollIntoView>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
