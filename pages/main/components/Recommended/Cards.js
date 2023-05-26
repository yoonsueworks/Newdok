import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper";

import Card from "./Card";
import S from "./CardSwiper.module.scss";
import { GlobalContext } from "../../../_app";

export default function App() {
  const { intersection } = useContext(GlobalContext);
  const [shuffledArray, setShuffledArray] = useState(intersection);

  const shuffleArray = (array) => {
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

  function useBlockReload() {
    useEffect(() => {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        // Set a custom message to display in the browser's confirmation dialog
        event.returnValue = "Are you sure you want to leave this page?";
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);
  }
  useBlockReload();

  useEffect(() => {
    shuffleUnion();
  }, []);

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
        {shuffledArray?.length > 0 &&
          shuffledArray?.map((datas) => (
            <SwiperSlide key={datas.id} className={S.swiperSlide}>
              <Card datas={datas} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
