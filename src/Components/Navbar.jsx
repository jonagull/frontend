import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import HardwareIcon from "@mui/icons-material/Hardware";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import useCheckMobileScreen from "../useCheckMobileScreen";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
            width: "100%",
            padding: "0",
          } : {
            display: "flex",
            width: "100%",
            padding: "0 60px",
          }}
        >
          <h1 style={isMobile ? {
            fontSize: "30px"
          } : {
            marginRight: "40px",
            fontSize: "50px"
          }}
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
              alignItems: "center",
              width: "40%",

            }}
          >
            <ScrollIntoView alignToTop={true} selector="#top">
              <span style={isMobile ? {
                marginRight: "10px"
              } : {
                marginRight: "15px"
              }}>
                <KeyboardDoubleArrowUpIcon />
                <h2>Om oss</h2>
              </span>
            </ScrollIntoView>
            {invert && (
              <ScrollIntoView alignToTop={true} selector="#hr-arbeid">
                <span style={isMobile ? {
                  marginRight: "10px"
                } : {
                  marginRight: "15px"
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
