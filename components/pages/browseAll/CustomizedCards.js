import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";

export default function CustomizedCards({ datas }) {
  const randomIndex = Math.trunc(Math.random() * datas?.length - 3);
  const randomDatas = datas?.slice(randomIndex, randomIndex + 3);
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
          randomDatas?.map((data) => (
            <SwiperSlide key={data.id} className={S.swiperSlide}>
              <Card datas={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
