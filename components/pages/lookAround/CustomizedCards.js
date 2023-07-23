import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";
import { GlobalContext } from "pages/_app";

export default function CustomizedCards({ datas }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className={`mySwiper ${S.swiper} h-[307px]`}
      >
        {datas?.length > 0 &&
          datas?.map((data) => (
            <SwiperSlide key={data.id} className={S.swiperSlide}>
              <Card datas={data} />
            </SwiperSlide>
          ))}
        {/* {shuffledArray?.length > 0 &&
            shuffledArray?.map((datas) => (
              <SwiperSlide key={datas.id} className={S.swiperSlide}>
                <Card datas={datas} />
              </SwiperSlide>
            ))} */}
      </Swiper>
    </>
  );
}
