import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";

export default function CustomizedCards({ datas }) {
  const randomIndex = Math.trunc(Math.random() * datas?.length - 3);
  const randomDatas = datas?.slice(randomIndex, randomIndex + 5);
  // 둘러보기>맞춤형 뉴스레터 개수 조절

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        grabCursor={true}
        speed={1000}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper ${S.swiper}`}
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
