import React, { useState } from "react";
import micpic from "./assets/shotgun-mic.jpg";
import mixerpic from "./assets/roland_v_600uhd_4k_hdr_multi_format_video_1457842.jpg";
import miscpic from "./assets/index.png";
import { useNavigate } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import { MicsPage } from "./shopCategoriesPages/mics";
import { styled } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DukPage } from "./DukPage";
import { MixersPage } from "./shopCategoriesPages/mixers";
import { MiscPage } from "./shopCategoriesPages/misc";
import { DukProjects } from "./DukPage/DukProjects";
import { Navbar } from "../../Components/Navbar";
import { chevronButtonStyle } from "../../constants/theme";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ShopPage = () => {
  let navigate = useNavigate();

  const [micExpanded, setMicExpanded] = useState(false);
  const [mixerExpanded, setMixerExpanded] = useState(false);
  const [miscExpanded, setMiscExpanded] = useState(false);

  const handleMicExpand = () => {
    setMicExpanded(!micExpanded);
  };
  const handleMixerExpand = () => {
    setMixerExpanded(!mixerExpanded);
  };
  const handleMiscExpand = () => {
    setMiscExpanded(!miscExpanded);
  };

  return (
    <React.Fragment>
      <Navbar invert={true} />
      <div className="shop__wrapper">
        <DukPage />
        <DukProjects />
        <div className="title__container">
          <hr
            style={{
              width: "80%",
              marginLeft: "10%",
              marginBottom: "70px",
            }}
          />
          <h1>UTLEIE</h1>
          <hr
            style={{
              width: "80%",
              marginLeft: "10%",
            }}
          />
        </div>

        <div className="categories__wrapper">
          <div className="category__container">
            <div className="title-button__container">
              <h2>Mikrofoner</h2>
              <div>
                <ExpandMore
                  expand={micExpanded}
                  onClick={handleMicExpand}
                  aria-expanded={micExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div>
              <img src={micpic}></img>
            </div>
          </div>
          <Collapse
            style={{ display: "flex", justifyContent: "center" }}
            in={micExpanded}
            timeout="auto"
            easing
          >
            <MicsPage />
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Mixere</h2>
              <div>
                <ExpandMore
                  expand={mixerExpanded}
                  onClick={handleMixerExpand}
                  aria-expanded={micExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div>
              <img src={mixerpic}></img>
            </div>
          </div>
          <Collapse in={mixerExpanded} timeout="auto" easing>
            <MixersPage />
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Extra Utstyr</h2>
              <div>
                <ExpandMore
                  expand={miscExpanded}
                  onClick={handleMiscExpand}
                  aria-expanded={micExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div>
              <img src={miscpic}></img>
            </div>
          </div>
          <Collapse in={miscExpanded} timeout="auto" easing>
            <MiscPage />
          </Collapse>
        </div>
      </div>
    </React.Fragment>
  );
};
