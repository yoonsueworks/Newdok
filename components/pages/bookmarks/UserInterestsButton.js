import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const UserInterestsButton = ({ userInterests }) => {
  const bookmarkInterests = userInterests.data;
  if (!userInterests.isLoading && userInterests.isSuccess) {
    bookmarkInterests?.unshift({ id: 0, name: "전체" });
  }

  return (
    <div className="flex justify-items-start">
      <div className="icon-arrow-long-right review-swiper-button-prev">◀️</div>

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={4}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        //   pagination={pagination}
        modules={[Navigation, Pagination]}
        className="bookmarkUserInterestSwiper"
      >
        <div className="overflow-scroll flex gap-x-2 shrink">
          {bookmarkInterests?.length !== 0 &&
            bookmarkInterests?.map((el) => (
              <SwiperSlide
                key={el.id}
                className={`w-fit border border-neutralgray-400 rounded-full px-2.5 py-1.5 break-keep`}
              >
                {el.name}
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <div className="icon-arrow-long-left review-swiper-button-next">▶️</div>
    </div>
  );
};

export default UserInterestsButton;
