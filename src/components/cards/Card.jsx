import React from "react";
import "./Card.css";
import {FiEye} from "react-icons/fi";

import CardPoster from '../../assets/tom-and-jerry.png';


// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



function Card() {
  return (
    <div className="Card">

      <b className="pro_title">
        <span>NEW</span> <span>MOVIES</span>
      </b>

      <Swiper
        className="card_slider"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          <img src={CardPoster} alt="CardPoster" />
          <small className="card_title">Tom and Jerry</small>
          <a href="#!" className="card_btn">WATCH NOW</a>
          <div className="card_rew">
            <p className="rew_year">2022</p>
            <div className="rew_watch">
                <FiEye className="rew_eye"/>
                <p className="rew_see">100k</p>    
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

    </div>
  );
}

export default Card;
