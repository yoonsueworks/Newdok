import React, { useRef, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";
import { GlobalContext } from "../../../_app";

export default function App() {
  const value = useContext(GlobalContext);

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
        {value.intersection?.length > 0 &&
          value.intersection?.map((datas) => (
            <SwiperSlide key={datas.id} className={S.swiperSlide}>
              <Card datas={datas} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
