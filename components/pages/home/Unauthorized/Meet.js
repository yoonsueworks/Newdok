import { Swiper, SwiperSlide } from "swiper/react";
import { useBrowseAll } from "service/hooks/newsletters";
import "swiper/css";
import Card from "components/pages/browseAll/Card";
import S from "./CardSwiper.module.scss";

const Meet = () => {
  const day = new Date().getDay() + 1;
  const orderOpt = `orderOpt=%EC%9D%B8%EA%B8%B0%EC%88%9C&day=${day}`;

  const { data } = useBrowseAll(orderOpt);
  const recommendedBrandsUpto3 = data?.slice(0, 3);
  // TODO: 일주일 날짜 1234567로 구분해서 내일 날짜 받아와서 파라미터에 day=1 형식으로 요청하기, opt 최신 등록순으로 바꾸기

  return (
    <div>
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-white flex flex-col text-center justify-center">
        <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-4xl sm:text-2xl xs:text-2xl font-bold sm:leading-9 xs:leading-9 leading-[48px]">
          뉴독에서 다양한 <br /> 뉴스레터를 만나보세요
        </div>
        <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
          요즘 뜨는 트렌드부터 업무 인사이트까지,
          <br />
          흥미로운 뉴스레터가 기다리고 있어요.
        </div>
      </div>

      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-[365px] xs:h-[365px] bg-white">
        <div className="text-xl font-bold text-[#333333] mb-5 ml-10 sm:ml-6 xs:ml-6">
          오늘 구독하면 내일 도착!
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          speed={5000}
          pagination={false}
          className={`mySwiper ${S.swiper} px-5`}
        >
          {recommendedBrandsUpto3?.map((data) => (
            <SwiperSlide key={data.id} className={S.swiperSlide}>
              <Card datas={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Meet;
