import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// import required modules

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

  //   const pagination = {
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   };

  return (
    <div className="w-full">
      <div>Bookmark</div>
      <div className="flex">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={30}
          navigation={true}
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
      </div>
      <div>
        <div>총 개수</div>
        <div>정렬</div>
      </div>
    </div>
  );
};

export default Bookmark;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper";

// export default function Bookmark() {

//   return (
//     <>
//       <Swiper

//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
