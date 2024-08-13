import { useRouter } from "next/router";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Card from "components/pages/browseAll/Card";
import Tags from "shared/Tags";
import Footer from "./Footer";

import S from "components/pages/browseAll/CardSwiper.module.scss";

const UnAuthorized = () => {
  const router = useRouter();

  const datas = [
    {
      id: 1,
      brandId: 1,
      brandName: "이오레터",
      imageUrl: "",
      firstDescription: "스타트업 탐험가들의 필수템",
      interests: [{ id: 1, name: "시사상식" }],
    },
    {
      id: 2,
      brandId: 2,
      brandName: "아트맵 ART MAP",
      imageUrl: "",
      firstDescription: "세상의 모든 전시와 미술",
      interests: [{ id: 1, name: "시사상식" }],
    },
    {
      id: 3,
      brandId: 3,
      brandName: "호박레터",
      imageUrl: "",
      firstDescription: "오늘 어디 갈까 고민되는 사람들을 위한 레터",
      interests: [{ id: 1, name: "시사상식" }],
    },
    {
      id: 4,
      brandId: 4,
      brandName: "목요와인레터",
      imageUrl: "",
      firstDescription: "세상에서 가장 쉬운 문장으로 쓰인 와인설명서",
      interests: [{ id: 1, name: "시사상식" }],
    },
    {
      id: 5,
      brandId: 5,
      brandName: "목요와인레터",
      imageUrl: "",
      firstDescription: "세상에서 가장 쉬운 문장으로 쓰인 와인설명서",
      interests: [{ id: 1, name: "시사상식" }],
    },
  ];

  return (
    <div className="w-full h-full justify-between bg-neutralgray-50 overflow-auto">
      {/* 1 */}
      <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center text-[#333333] xl:text-4xl md:text-2xl md:leading-9 sm:text-xl sm:leading-7 xs:text-xl xs:leading-7 font-bold font-['Pretendard'] leading-[52px] bg-[#F5F5F7] ">
        <div className="w-full h-full rounded-xl flex-shrink-0 relative ">
          <Image
            alt="뉴스레터 이미지"
            src="/images/home_1.png"
            fill
            sizes="20"
            quality={45}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute mx-auto left-0 right-0 xl:top-[180px] md:top-20 sm:top-[72px] xs:top-[72px]">
            <div>
              지금 내게 필요한 뉴스레터,
              <br />
              가장 빠르게 찾는 방법
            </div>
            <button
              className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-full w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 "
              onClick={() => router.push("/login")}
            >
              뉴스레터 추천받기
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-[362px] xs:h-[362px] bg-white flex items-center">
        <div>
          <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-xl font-bold xl:leading-9 ml-10 sm:ml-5 xs:ml-5">
            지금 인기 있는 뉴스레터
          </div>
          <ul>
            <li className="border border-neutralgray-200 rounded-xl flex flex-col w-[320px] h-fit">
              <div className="bg-neutral-50 rounded-tr-xl rounded-tl-xl flex px-5 py-4">
                <div className="w-12 h-12 rounded-xl border border-[#d9d9d9] mr-3">
                  Image
                </div>
                <div className="grid gap-y-1">
                  <div className="text-[#1e1e1e] text-base font-medium font-['Spoqa Han Sans Neo'] leading-normal">
                    뉴스레터 브랜드명
                  </div>
                  <div className="text-[#555555] text-[11px] font-normal font-['Spoqa Han Sans Neo'] leading-none">
                    매주 평일 아침
                  </div>
                </div>
              </div>
              <div className="px-5 pt-3 pb-4 flex flex-col gap-y-3">
                <div className="text-[#555555] text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
                  세상 돌아가는 소식, 뉴닉으로!
                </div>
                <Tags tags={[{ id: 1, name: "시사상식" }]} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 3 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full sm:px-5 xs:px-5 sm:py-12 xs:py-12 bg-[#F5F5F7] sm:flex sm:justify-center xs:flex xs:justify-center">
        <div className="flex sm:flex-col xs:flex-col justify-center items-center">
          <div className="flex flex-col sm:mb-14 xs:mb-14">
            <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
              일일이 찾아볼 필요 없이 <br /> 내게 필요한 뉴스레터만 쏙쏙
            </div>
            <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
              어떤 뉴스레터를 구독해야 할지 모르겠다면
              <br />
              종사 중인 산업과 관심사만 등록하세요.
              <br />
              뉴독이 대신 찾아드릴게요!
            </div>
          </div>
          <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
            <Image
              alt="뉴스레터 이미지"
              src="/images/home_3.png"
              fill
              sizes="20"
              quality={45}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full  sm:flex sm:justify-center xs:flex xs:justify-center">
        <div className="flex sm:flex-col-reverse xs:flex-col-reverse justify-center items-center">
          <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
            <Image
              alt="뉴스레터 이미지"
              src="/images/home_4.png"
              fill
              sizes="20"
              quality={45}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
              다른 메일과 섞이지 않고
              <br />
              오늘 받은 뉴스레터만 한눈에
            </div>
            <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
              복잡하게 쌓여가는 메일함은 안녕!
              <br />
              이젠 뉴스레터만 날짜별로 모아볼 수 있어요.
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-[#F5F5F7] sm:flex sm:justify-center xs:flex xs:justify-center">
        <div className="flex sm:flex-col xs:flex-col justify-center items-center">
          <div className="flex flex-col">
            <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
              어려운 구독 중지도
              <br />
              뉴독에서는 쉽고 빠르게
            </div>
            <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
              그만 보고 싶은 뉴스레터도, 기억하고 싶은 아티클도
              <br />
              버튼 하나로 간편하게 관리해요!
            </div>
          </div>
          <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
            <Image
              alt="뉴스레터 이미지"
              src="/images/home_5.png"
              fill
              sizes="20"
              quality={45}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      {/* 6 */}
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
      {/* 6 */}
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
          {[...datas].splice(0, 3)?.map((data) => (
            <SwiperSlide key={data.id} className={S.swiperSlide}>
              <Card datas={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 7 */}
      <div className="w-full xl:h-[365px] h-[500px] bg-white flex flex-col justify-center xl:px-[72px] md:px-8 sm:px-4 xs:px-4 gap-y-4">
        <div className="text-xl font-bold text-[#333333] pl-2">
          NEW! 새로 등록된 뉴스레터
        </div>
        <ul className="grid xl:grid-cols-2 gap-x-3 gap-y-3">
          {datas.map((data) => {
            return (
              data.brandId < 5 && (
                <li
                  className="bg-white px-5 py-4 h-max w-full border border-neutralgray-200 rounded-xl flex gap-x-2"
                  key={data.brandId}
                >
                  <div className="border rounded-xl">{data.imageUrl}</div>
                  <div className="flex flex-col">
                    <div className="button-02">{data.brandName}</div>
                    <div className="text-[13px] font-normal break-keep w-full">
                      {data.firstDescription}
                    </div>
                  </div>
                </li>
              )
            );
          })}
        </ul>
      </div>
      {/* 8 */}

      <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center text-[#333333] xl:text-4xl md:text-2xl md:leading-9 sm:text-xl sm:leading-7 xs:text-xl xs:leading-7 font-bold font-['Pretendard'] leading-[52px] bg-[#F5F5F7] ">
        <div className="w-full h-full rounded-xl flex-shrink-0 relative ">
          <Image
            alt="뉴스레터 이미지"
            src="/images/home_8.png"
            fill
            sizes="20"
            quality={45}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute mx-auto left-0 right-0 xl:top-[180px] md:top-20 sm:top-[72px] xs:top-[72px]">
            <div className="text-4xl sm:text-[26px] xs:text-[26px] text-white font-bold leading-[48px] sm:leading-10 xs:leading-10">
              나를 위한 뉴스레터 구독,
              <br />
              뉴독에서 더욱 편리하게
            </div>
            <button
              className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-xl w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 "
              onClick={() => router.push("/login")}
            >
              뉴스레터 구독하기
            </button>
          </div>
        </div>
      </div>
      {/* 9 */}
      <Footer />
    </div>
  );
};

export default UnAuthorized;
