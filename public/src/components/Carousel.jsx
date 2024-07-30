import React from "react";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b3 from "../assets/b3.webp";
import textb1 from "../assets/textb1.png.avif";
import textb2 from "../assets/textb2.png.avif";
import textb3 from "../assets/textb3.png.avif";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#f0f0f0",
        "--swiper-pagination-color": "#f0f0f0",
      }}
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
        <div className="relative">
          <img className="w-full h-[700px]" src={b1} alt="Background 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-[700px]" src={b2} alt="Background 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full h-[700px]" src={b3} alt="Background 3" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
