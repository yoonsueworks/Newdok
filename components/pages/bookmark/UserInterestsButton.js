import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const UserInterestsButton = ({ userInterests }) => {
  return (
    <div className="flex">
      <div className="icon-arrow-long-right review-swiper-button-prev">
        이전으로\◀️
      </div>

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={30}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        //   pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <div className="overflow-scroll flex gap-x-2 shrink">
          {[{ id: 0, name: "전체" }, ...userInterests].map((el) => (
            <SwiperSlide
              key={el.id}
              className={`w-fit border border-black break-keep`}
            >
              {el.name}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="icon-arrow-long-left review-swiper-button-next">
        다음으로\▶️
      </div>
    </div>
  );
};

export default UserInterestsButton;
