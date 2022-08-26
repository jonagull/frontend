import React, { useState } from "react";
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
import { WirelessPage } from "./shopCategoriesPages/wireless";
import { useGetThumbnails } from "./useGetThumbnails";
import { apiUrl } from "../../constants/baseApiUrl";

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

  const [categoryThumbnail, setCategoryThumbnail] = useState("");

  const [micExpanded, setMicExpanded] = useState(false);
  const [mixerExpanded, setMixerExpanded] = useState(false);
  const [miscExpanded, setMiscExpanded] = useState(false);
  const [wirelessExpanded, setWirelessExpanded] = useState(false);

  const handleMicExpand = () => {
    setMicExpanded(!micExpanded);
  };
  const handleMixerExpand = () => {
    setMixerExpanded(!mixerExpanded);
  };
  const handleMiscExpand = () => {
    setMiscExpanded(!miscExpanded);
  };
  const handleWirelessExpand = () => {
    setWirelessExpanded(!wirelessExpanded);
  };

  useGetThumbnails(setCategoryThumbnail);

  return (
    <React.Fragment>
      <Navbar invert={true} />
      <div className="shop__wrapper" id="top">
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
              <img
                src={`${apiUrl}${categoryThumbnail &&
                  categoryThumbnail.data[0].attributes.microphone.data
                    .attributes.url
                  }`}
              ></img>
            </div>
          </div>
          <Collapse
            in={micExpanded}
            timeout="auto"
            easing
          >
            <MicsPage />
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Mixer/Opptaker</h2>
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
              <img
                src={`${apiUrl}${categoryThumbnail &&
                  categoryThumbnail.data[0].attributes.mixer.data.attributes.url
                  }`}
              ></img>
            </div>
          </div>
          <Collapse in={mixerExpanded} timeout="auto" easing>
            <MixersPage />
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Trådløst</h2>
              <div>
                <ExpandMore
                  expand={wirelessExpanded}
                  onClick={handleWirelessExpand}
                  aria-expanded={wirelessExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div>
              <img
                src={`${apiUrl}${categoryThumbnail &&
                  categoryThumbnail.data[0].attributes.wireless.data.attributes
                    .url
                  }`}
              ></img>
            </div>
          </div>
          <Collapse in={wirelessExpanded} timeout="auto" easing>
            <WirelessPage />
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
              <img
                src={`${apiUrl}${categoryThumbnail &&
                  categoryThumbnail.data[0].attributes.extra.data.attributes.url
                  }`}
              ></img>
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
