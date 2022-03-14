import React from "react";
import "./Tv.css";
import { CgNametag } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { TiTime } from "react-icons/ti";
import LikePopcorn from "../../assets/like-popcorn.png";
import LikeTomato from "../../assets/like-tomato.png";

function Tv() {
  return (
    <div className="Tv">
      <b className="pro_title">
        <span>YOUR</span> <span>MOVIE</span>
      </b>

      <div className="tv_watch">
        <div className="tv_movie">
          <div className="tv_about">
            <b>
              *General Information About <br /> This Film
            </b>
            <div className="about_text">
              <CgNametag className="about_icon" />
              <p>MOVIE NAME</p>
            </div>
            <div className="about_text">
              <GiWorld className="about_icon" />
              <p>MOVIE HOMELAND</p>
            </div>
            <div className="about_text">
              <RiStarSmileLine className="about_icon" />
              <p>MOVIE GENRE</p>
            </div>
            <div className="about_text">
              <CgCalendarDates className="about_icon" />
              <p>MOVIE DATE</p>
            </div>
            <div className="about_text">
              <TiTime className="about_icon" />
              <p>MOVIE TIME</p>
            </div>
            <div className="like">
              <span>
                <img src={LikePopcorn} alt="like" />
                <h5>0%</h5>
              </span>
              <span>
                <img src={LikeTomato} alt="like" />
                <h5>0%</h5>
              </span>
            </div>
            <form className="comment">
              <input type="text" placeholder="Comment" />
              <button className="btn_submit">Submit</button>
            </form>
          </div>
          <div className="video_wind"></div>
        </div>
        <div className="ad_block"></div>
      </div>
    </div>
  );
}

export default Tv;
