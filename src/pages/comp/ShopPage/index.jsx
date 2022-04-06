import React, { useState } from "react";
import micpic from "./assets/shotgun-mic.jpg";
import mixerpic from "./assets/roland_v_600uhd_4k_hdr_multi_format_video_1457842.jpg";
import miscpic from "./assets/index.png";
import { useNavigate } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import { MicsPage } from "./shopCategoriesPages/mics";
import { Button, styled } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <div className="shop__wrapper">
      <div className="title__container">
        <h1>SHOP</h1>
      </div>

      <div className="categories__wrapper">
        <div className="category__container">
          <div className="title-button__container">
            <h1>MICS</h1>
            <ExpandMore
              expand={micExpanded}
              onClick={handleMicExpand}
              aria-expanded={micExpanded}
              aria-label="show more"
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
                width: "70px",
              }}
            >
              <ExpandMoreIcon style={{ color: "black" }} />
            </ExpandMore>
          </div>
          <div>
            <img src={micpic}></img>
          </div>
        </div>
        <Collapse in={micExpanded} timeout="auto" easing>
          <MicsPage />
        </Collapse>

        <div className="category__container">
          <div className="title-button__container">
            <h1>MIXERS</h1>
            <ExpandMore
              expand={micExpanded}
              onClick={handleMixerExpand}
              aria-expanded={micExpanded}
              aria-label="show more"
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
                width: "70px",
              }}
            >
              <ExpandMoreIcon style={{ color: "black" }} />
            </ExpandMore>
          </div>
          <div>
            <img src={mixerpic}></img>
          </div>
        </div>
        <Collapse in={mixerExpanded} timeout="auto" easing>
          <MicsPage />
        </Collapse>

        <div className="category__container">
          <div className="title-button__container">
            <h1>MISC</h1>
            <ExpandMore
              expand={micExpanded}
              onClick={handleMiscExpand}
              aria-expanded={micExpanded}
              aria-label="show more"
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
                width: "70px",
              }}
            >
              <ExpandMoreIcon style={{ color: "black" }} />
            </ExpandMore>
          </div>
          <div>
            <img src={miscpic}></img>
          </div>
        </div>
        <Collapse in={miscExpanded} timeout="auto" easing>
          <MicsPage />
        </Collapse>
      </div>
    </div>
  );
};
