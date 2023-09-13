import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const OnBoardingSwiper = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper pagination={pagination} modules={[Pagination]} className="w-full">
        {ONBOARDING_SWIPER_CARDS.map((card) => {
          return (
            <SwiperSlide
              className="w-full h-fit grid gap-y-6 pt-28"
              key={card.id}
            >
              <div className="flex flex-col  items-center gap-y-6">
                <div className="single-18-m">{card.single}</div>
                <div className="multiple-30-b w-[280px] text-center">
                  {card.multiple}
                </div>
              </div>
              <div className="mb-6">
                <Image
                  src={card.image_src}
                  width="390"
                  height="339"
                  alt={card.image_alt}
                  priority
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default OnBoardingSwiper;

const ONBOARDING_SWIPER_CARDS = [
  {
    id: 1,
    single: "너무 많은 뉴스레터 브랜드",
    multiple: "내게 필요한 뉴스레터만 빠르게 찾을 수 없을까?",
    image_src: "/images/onboarding_300_1.png",
    image_alt: "onboarding image 1",
  },
  {
    id: 2,
    single: "나만의 추천 뉴스레터",
    multiple: "내 취향을 기반으로 필요한 뉴스레터만 쏙쏙!",
    image_src: "/images/onboarding_300_2.png",
    image_alt: "onboarding image 2",
  },
  {
    id: 3,
    single: "구독 신청부터 보관까지",
    multiple: "쌓이고 쌓인 뉴스레터, 한 번에 관리해요!",
    image_src: "/images/onboarding_300_3.png",
    image_alt: "onboarding image 3",
  },
];
