import { Swiper, SwiperSlide } from "swiper/react";
import { useBrowseAll } from "service/hooks/newsletters";

import "swiper/css";

import RecommendedCard from "./RecommendedCard";

import S from "./CardSwiper.module.scss";

const CurrentInViral = () => {
  const orderOpt = "orderOpt=%EC%9D%B8%EA%B8%B0%EC%88%9C";
  const { data } = useBrowseAll(orderOpt);
  const recommendedBrandsUpto5 = data?.slice(0, 5);

  return (
    <div className="w-full xl:h-[365px] md:h-[365px] sm:h-[362px] xs:h-[362px] bg-white flex items-center">
      <div className="w-full">
        <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-xl font-bold xl:leading-9 ml-10 sm:ml-5 xs:ml-5">
          지금 인기 있는 뉴스레터
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          speed={5000}
          pagination={false}
          className={`mySwiper px-5`}
        >
          {recommendedBrandsUpto5?.map((brand) => (
            <SwiperSlide key={brand.brandId} className={S.swiperSlide1}>
              <RecommendedCard data={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CurrentInViral;
