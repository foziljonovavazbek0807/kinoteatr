import React from 'react';
import './Premiere.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Premiere() {
  return (
    <div className="Premiere">

      <b className="pro_title">
        <span>NEW</span> <span>PREMIERE</span>
      </b>

      <Swiper
        className="premiere_slider"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
        <SwiperSlide className="slide_box">
          
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}

export default Premiere;
