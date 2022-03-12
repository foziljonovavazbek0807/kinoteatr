import React from "react";
import "./Card.css";
import { FiEye } from "react-icons/fi";

import CardPoster from "../../assets/tom-and-jerry.png";

function Card(props) {
  return (
    <div className="Card">
      <b className="pro_title">
        <span>NEW</span> <span>{props.name}</span>
      </b>

      <div className="card_slider">
        <div className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">
            WATCH NOW
          </a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
              <FiEye className="rew_eye" />
              <p className="rew_see">100k</p>
            </div>
          </div>
        </div>
        <div className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">
            WATCH NOW
          </a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
              <FiEye className="rew_eye" />
              <p className="rew_see">100k</p>
            </div>
          </div>
        </div>
        <div className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">
            WATCH NOW
          </a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
              <FiEye className="rew_eye" />
              <p className="rew_see">100k</p>
            </div>
          </div>
        </div>
        <div className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">
            WATCH NOW
          </a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
              <FiEye className="rew_eye" />
              <p className="rew_see">100k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
