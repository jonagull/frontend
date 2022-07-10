import React, { useState } from "react";
import { apiUrl } from "../../../../constants/baseApiUrl";
import { MarkDownWrapper } from "../../../../Components/MarkDownWrapper";
import { useGetDukProjects } from "./useGetDukProjects";
import { useGetDukClients } from "./useGetDukClients";
import { useGetDukTvProductions } from "./useGetDukTvProductions";
import { useGetDukFilmProductions } from "./useGetDukFilmProductions";
import IconButton from "@mui/material/IconButton";
import { styled } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { chevronButtonStyle } from "../../../../constants/theme";
import { Button } from "@mui/material";
import Aperture from "../../assets/aperture.png";
import People from "../../assets/people.png";
import TV from "../../assets/tv.png";
import Camera from "../../assets/tv-camera.jpg";

export const DukProjects = () => {
  const [dukProjects, setDukProjects] = useState(""); // This is for the adds
  const [dukFilmProductions, setDukFilmProductions] = useState("");
  const [dukTvProductions, setDukTvProductions] = useState("");
  const [dukClients, setDukClients] = useState("");

  useGetDukProjects(setDukProjects);
  useGetDukClients(setDukClients);
  useGetDukTvProductions(setDukTvProductions);
  useGetDukFilmProductions(setDukFilmProductions);

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

  const [adsExpanded, setAdsExpanded] = useState(false);
  const [filmExpanded, setFilmExpanded] = useState(false);
  const [tvExpanded, setTvExpanded] = useState(false);
  const [clientsExpanded, setClientsExpanded] = useState(false);

  const handleAdsExpanded = () => {
    setAdsExpanded(!adsExpanded);
  };
  const handleFilmExpand = () => {
    setFilmExpanded(!filmExpanded);
  };
  const handleTvExpand = () => {
    setTvExpanded(!tvExpanded);
  };
  const handleClientsExpand = () => {
    setClientsExpanded(!clientsExpanded);
  };

  return (
    <React.Fragment>
      <div className="duk-projects__wrapper">
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
            fontSize: "80px",
            fontWeight: 700,
          }}
        >
          Tidligere arbeid
        </h1>

        <div className="categories__wrapper">
          <div className="category__container">
            <div className="title-button__container">
              <h2>Reklamer</h2>
              <div>
                <ExpandMore
                  expand={adsExpanded}
                  onClick={handleAdsExpanded}
                  aria-expanded={adsExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div style={{ marginRight: "135px" }}>
              <img src={TV}></img>
            </div>
          </div>
          <Collapse in={adsExpanded} timeout="auto" easing>
            <div>
              {dukProjects &&
                dukProjects.data.map((x) => (
                  <div className="duk-project__container">
                    <div className="duk-content__container">
                      <h3>{x.attributes.title}</h3>
                      <MarkDownWrapper markdown={x.attributes.description} />
                      {x.attributes.projectlink && (
                        <Button
                          variant="contained"
                          href={
                            x.attributes.projectlink && x.attributes.projectlink
                          }
                          target="_blank"
                          style={{
                            width: "70px",
                            borderRadius: "50px",
                            backgroundColor: "black",
                            marginTop: "10px",
                            color: "white",
                          }}
                        >
                          <h4 style={{ fontSize: "15px", fontWeight: "800" }}>
                            Link
                          </h4>
                        </Button>
                      )}
                    </div>
                    <div className="duk-image__container">
                      <img
                        src={`${apiUrl}${
                          x.attributes.thumbnail.data &&
                          x.attributes.thumbnail.data.attributes.url
                        }`}
                      ></img>
                    </div>
                  </div>
                ))}
            </div>
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Film Produksjoner</h2>
              <div>
                <ExpandMore
                  expand={filmExpanded}
                  onClick={handleFilmExpand}
                  aria-expanded={filmExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div style={{ marginRight: "140px" }}>
              <img src={Aperture}></img>
            </div>
          </div>
          <Collapse in={filmExpanded} timeout="auto" easing>
            <div>
              {dukFilmProductions &&
                dukFilmProductions.data.map((x) => (
                  <div className="duk-project__container">
                    <div className="duk-content__container">
                      <h3>{x.attributes.title}</h3>
                      <MarkDownWrapper markdown={x.attributes.description} />
                      {x.attributes.projectlink && (
                        <Button
                          variant="contained"
                          href={
                            x.attributes.projectlink && x.attributes.projectlink
                          }
                          target="_blank"
                          style={{
                            width: "70px",
                            borderRadius: "50px",
                            backgroundColor: "black",
                            marginTop: "10px",
                            color: "white",
                          }}
                        >
                          <h4 style={{ fontSize: "15px", fontWeight: "800" }}>
                            Link
                          </h4>
                        </Button>
                      )}
                    </div>
                    <div className="duk-image__container">
                      <img
                        src={`${apiUrl}${
                          x.attributes.thumbnail.data &&
                          x.attributes.thumbnail.data[0].attributes.url
                        }`}
                      ></img>
                    </div>
                  </div>
                ))}
            </div>
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Tv Produksjoner</h2>
              <div>
                <ExpandMore
                  expand={tvExpanded}
                  onClick={handleTvExpand}
                  aria-expanded={tvExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div style={{ marginRight: "65px" }}>
              <img src={Camera}></img>
            </div>
          </div>
          <Collapse in={tvExpanded} timeout="auto" easing>
            <div>
              {dukTvProductions &&
                dukTvProductions.data.map((x) => (
                  <div className="duk-project__container">
                    <div className="duk-content__container">
                      <h3>{x.attributes.title}</h3>
                      <MarkDownWrapper markdown={x.attributes.description} />
                      {x.attributes.projectlink && (
                        <Button
                          variant="contained"
                          href={
                            x.attributes.projectlink && x.attributes.projectlink
                          }
                          target="_blank"
                          style={{
                            width: "70px",
                            borderRadius: "50px",
                            backgroundColor: "black",
                            marginTop: "10px",
                            color: "white",
                          }}
                        >
                          <h4 style={{ fontSize: "15px", fontWeight: "800" }}>
                            Link
                          </h4>
                        </Button>
                      )}
                    </div>
                    <div className="duk-image__container">
                      <img
                        src={`${apiUrl}${
                          x.attributes.thumbnail.data &&
                          x.attributes.thumbnail.data[0].attributes.url
                        }`}
                      ></img>
                    </div>
                  </div>
                ))}
            </div>
          </Collapse>

          <div className="category__container">
            <div className="title-button__container">
              <h2>Kunder</h2>
              <div>
                <ExpandMore
                  expand={clientsExpanded}
                  onClick={handleClientsExpand}
                  aria-expanded={clientsExpanded}
                  aria-label="show more"
                  style={chevronButtonStyle}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </div>
            </div>
            <div style={{ marginRight: "170px" }}>
              <img src={People}></img>
            </div>
          </div>
          <Collapse in={clientsExpanded} timeout="auto" easing>
            <div>
              {dukClients &&
                dukClients.data.map((x) => (
                  <div className="duk-project__container">
                    <div className="duk-content__container">
                      <h3>{x.attributes.title}</h3>
                      <MarkDownWrapper markdown={x.attributes.desciption} />
                      {x.attributes.projectlink && (
                        <Button
                          variant="contained"
                          href={
                            x.attributes.projectlink && x.attributes.projectlink
                          }
                          target="_blank"
                          style={{
                            width: "70px",
                            borderRadius: "50px",
                            backgroundColor: "black",
                            marginTop: "10px",
                            color: "white",
                          }}
                        >
                          <h4 style={{ fontSize: "15px", fontWeight: "800" }}>
                            Link
                          </h4>
                        </Button>
                      )}
                    </div>
                    <div className="duk-image__container">
                      <img
                        src={`${apiUrl}${
                          x.attributes.thumbnail.data &&
                          x.attributes.thumbnail.data[0].attributes.url
                        }`}
                      ></img>
                    </div>
                  </div>
                ))}
            </div>
          </Collapse>
        </div>
      </div>
    </React.Fragment>
  );
};
