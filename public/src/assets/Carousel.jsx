import React from "react";
import b1 from '../assets/b1.webp'
import b2 from '../assets/b2.webp'
import b3 from '../assets/b3.webp'

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  return (
    <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwipe"
        >
          <SwiperSlide>
            <img  className="w-full h-screen" src={b1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-screen" src={b2} />
          </SwiperSlide>
          <SwiperSlide>
            <img  className="w-full h-screen" src={b3} />
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default Carousel;
