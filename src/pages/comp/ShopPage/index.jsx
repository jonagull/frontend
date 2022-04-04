import React from "react";
import micpic from "./assets/shotgun-mic.jpg";
import mixerpic from "./assets/roland_v_600uhd_4k_hdr_multi_format_video_1457842.jpg";
import miscpic from "./assets/index.png";

export const ShopPage = () => {
  return (
    <div className="shop__wrapper">
      <div className="title__container">
        <h1>SHOP</h1>
      </div>
      <div className="categories__wrapper">
        <div className="mic__container">
          <div className="title-button__container">
            <h1>MICS</h1>
            <button></button>
          </div>
          <div>
            <img src={micpic}></img>
          </div>
        </div>

        <div className="mixer__container">
          <div className="title-button__container">
            <h1>MIXERS</h1>
            <button></button>
          </div>
          <div>
            <img src={mixerpic}></img>
          </div>
        </div>
        <div className="misc__container">
          <div className="title-button__container">
            <h1>MISC</h1>
            <button></button>
          </div>
          <div>
            <img src={miscpic}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
