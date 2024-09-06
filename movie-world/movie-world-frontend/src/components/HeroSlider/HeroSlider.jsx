import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./HeroSlider.css";

// import required modules
import {EffectCards} from "swiper/modules";

import imageN from "../../assets/images/aesthetic.png";
import image5 from "../../assets/images/animation.jpg";
// import image1 from "../../assets/images/cover.jpg";
import image2 from "../../assets/images/cover2.jpg";
import image3 from "../../assets/images/cover3.jpg";
import image4 from "../../assets/images/dark-knight.jpg";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src={image1} height={420} /> */}
          Slider 1
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className="w-full h-[420px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} className="w-full h-[420px]  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageN} className="w-full h-[420px]  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} className="w-full h-[420px]  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} className="w-full h-[420px]  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg" />
        </SwiperSlide>
        <SwiperSlide>Slider 8</SwiperSlide>
        <SwiperSlide>
          <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
