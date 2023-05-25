import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className={`mySwiper ${S.swiper} px-5`}
      >
        <SwiperSlide className={S.swiperSlide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={S.swiperSlide}>
          <Card />
        </SwiperSlide>
        <SwiperSlide className={S.swiperSlide}>
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
