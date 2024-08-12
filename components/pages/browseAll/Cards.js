import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Card from "./Card";
import S from "./CardSwiper.module.scss";
import { GlobalContext } from "pages/_app";

export default function Cards({ datas }) {
  const { intersection } = useContext(GlobalContext);
  const [, setShuffledArray] = useState(intersection);

  const shuffleArray = (array) => {
    if (!array) return;
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray.slice(0, 3);
  };

  const shuffleUnion = () => {
    setShuffledArray(shuffleArray(intersection));
  };

  useEffect(() => {
    shuffleUnion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        speed={5000}
        pagination={true}
        modules={[Pagination]}
        className={`mySwiper ${S.swiper} px-5`}
      >
        {datas?.length > 0 &&
          datas?.map((data) => (
            <SwiperSlide key={data.id} className={S.swiperSlide}>
              <Card datas={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
