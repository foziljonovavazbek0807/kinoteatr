import React from "react";
import "./Header.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Header() {
  return (
    <header className="Header">
      <div className="Header__text-side">
        <b>
          <span>KINOTEATR</span> IS THE BEST
        </b>
        <h1>
          From this site you can find all of the quality movies, cartoons and
          series.
        </h1>
        <p>
          You can watch or download all of these movies online. Also in a lot of
          different qualities.
        </p>
      </div>

      <Swiper
        className="Header__slide-side"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide_box"></SwiperSlide>
        <SwiperSlide className="slide_box"></SwiperSlide>
        <SwiperSlide className="slide_box"></SwiperSlide>
        <SwiperSlide className="slide_box"></SwiperSlide>
        <SwiperSlide className="slide_box"></SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;
