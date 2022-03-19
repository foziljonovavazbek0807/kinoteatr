import React from "react";
import "./Head.css";
import MovieLogo from "./assets/movie-logo.png";
import Video from "./assets/cLoOd.mp4";
import { AiOutlineArrowDown } from "react-icons/ai";

function Head() {
  return (
    <div className="Head__container">
      <video className="bc_mp4" src={Video} />
      <div className="text_container">
        <a href="#!" className="logo">
          <img src={MovieLogo} alt="movie-logo" />
        </a>
        <p className="und_text">Press the button and enjoy the films!</p>
        <AiOutlineArrowDown className="down_arrow" />
        <a href="#!" className="start_btn">
          Get start
        </a>
      </div>
    </div>
  );
}

export default Head;