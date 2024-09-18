import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeftIcon from "icons/ver3.0/bookmark_arrow_left.svg";
import ArrowRightIcon from "icons/ver3.0/bookmark_arrow_right.svg";

import "swiper/css";
import "swiper/css/navigation";

const UserInterestsButton = ({ userInterests, setInterest, interest }) => {
  const bookmarkInterests = userInterests.data;

  return (
    <div className="flex justify-items-start">
      <ArrowLeftIcon className="icon-arrow-long-right review-swiper-button-prev" />

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={4}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        className="bookmarkUserInterestSwiper"
      >
        <div className="overflow-scroll flex gap-x-2 shrink">
          <SwiperSlide
            key={0}
            className={`${
              interest === 0
                ? "bg-blue-600 text-white"
                : "bg-transparent border border-neutralgray-400 "
            } w-fit rounded-full px-2.5 py-1.5 break-keep text-xs`}
          >
            전체
          </SwiperSlide>
          {bookmarkInterests?.length !== 0 &&
            bookmarkInterests?.map((el) => (
              <SwiperSlide
                key={el.id}
                className={`${
                  interest === el.id
                    ? "bg-blue-600 text-white"
                    : "bg-transparent border border-neutralgray-400 "
                } w-fit rounded-full px-2.5 py-1.5 break-keep text-xs`}
                onClick={() => setInterest(el.id)}
              >
                {el.name}
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      <ArrowRightIcon className="icon-arrow-long-left review-swiper-button-next" />
    </div>
  );
};

export default UserInterestsButton;
