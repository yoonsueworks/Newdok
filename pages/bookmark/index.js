import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Bookmark = () => {
  const userInterests = [
    { id: 1, name: "경제 정치" },
    { id: 2, name: "경제 정치" },
    { id: 3, name: "경제 정치 아무것도 하지 않는 법 모던자바스크립트" },
    { id: 4, name: "경제 정치 양꼬치김치찌개갈치조림" },
    { id: 5, name: "경제 정치 탕수육마라탕꿔바로우마라샹궈" },
    { id: 6, name: "경제 정치 김밥떡볶이" },
    { id: 7, name: "경제 정치 엔터테인먼트" },
  ];

  return (
    <div className="w-full">
      <div>Bookmark</div>
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
      <div>
        <div>총 개수</div>
        <div>정렬</div>
      </div>
    </div>
  );
};

export default Bookmark;

// TODO:
// 1. 북마크 카테고리 요청
// 1. 1) 카테고리 아이디, 카테고리 명 e.g)[{interest:경제.시사, interestId:1}]
// 2. 선택된 카테고리의 북마크된 아티클 요청 (초기 요청은 무조건 전체)
// 2. 1) {totalAmount: 33, articles:[{month:11월, articles: [{id: 0 ,  brand: "", brandId: "", title: "", articleId: 10231, sampleText: "", brandImage:"", publishedAt:"", }, {}]}, {month:12월}]}
