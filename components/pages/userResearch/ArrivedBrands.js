import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app";
import { useGetUserResearch } from "service/hooks/user";

import BrandName from "shared/BrandName";
import PublicationCycle from "shared/PublicationCycle";

import Loading from "shared/Loading";

// TODO: 0904 사전설문 반영된 사용자 데이터 받아오기
const ArrivedBrands = () => {
  const { research } = useContext(GlobalContext);
  const { data, error, isLoading, isError } = useGetUserResearch(research);

  // const data = [
  //   {
  //     brandName: "NewNeek",
  //     firstDescription: "감정에 대해 편안하게 이야기를 나눌 ...",
  //     id: 28,
  //     imageUrl: "http://newdok.shop/public/잉잉레터.png",
  //     industries: [{ id: 1, name: "F&B" }],
  //     interests: [{ id: 1, name: "라이프스타일" }],
  //     publicationCycle: "격주 수요일 아침",
  //     secondDescription: "자신의 감정에 대한 대화의 장",
  //     updatedAt: "2023-07-15T07:46:47.488Z",
  //   },
  // ];

  const handleSubscribeClick = (e) => {
    const clickedId = e.target.id;
    console.log("clicked Subscribe" + clickedId);
    // TODO: 0904 BE QA 반영 후 수정 예정
  };

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <div>에러가 발생했습니다.</div>
  ) : (
    <ul
      className="grid gap-y-2.5 w-full overflow-auto scroll-smooth"
      id="onboardInterestsBox"
    >
      {data?.map((brandInfo, id) => {
        return (
          <ArrivedBrand
            key={id}
            brandInfo={brandInfo}
            handleSubscribeClick={handleSubscribeClick}
          />
        );
      })}
    </ul>
  );
};

export default ArrivedBrands;

const ArrivedBrand = ({ brandInfo, handleSubscribeClick }) => {
  const {
    brandName,
    id,
    imageUrl,
    interests,
    publicationCycle,
    secondDescription,
  } = brandInfo;
  return (
    <li className="grid w-full h-fit">
      <div className="bg-beige-50 border border-neutralgray-200 p-5 flex justify-between h-fit rounded-t-lg">
        <div className="flex gap-x-4 items-center">
          <div className="w-[48px] h-[48px] rounded-full flex-shrink-0 contentbox-border relative border border-neutralgray-200 flex justify-center items-center">
            <Image
              alt={brandName}
              src={imageUrl}
              fill
              sizes="48"
              quality={45}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
              style={{
                objectFit: "cover",
                borderRadius: 50,
              }}
            />
          </div>
          <div className="grid gap-y-2">
            <BrandName brandName={brandName} />
            <PublicationCycle publicationCycle={publicationCycle} />
          </div>
        </div>
        <button
          type="button"
          id={id}
          onClick={handleSubscribeClick}
          className="p-3.5 h-fit rounded-[10px] bg-purple-700 hover:bg-purple-500 active:bg-purple-800 single-18-b text-white cursor-pointer transition-colors duration-300"
        >
          구독하기
        </button>
      </div>
      <div className="w-full grid bg-white border-b border-l border-r border-neutralgray-200 inset-x-0 p-5 gap-y-3 rounded-b-lg">
        <p className="single-14-m text-neutralgray-900">{secondDescription}</p>
        <ul className="flex gap-x-2 flex-wrap">
          {interests.map((interest, id) => {
            return (
              id < 3 && (
                <li
                  key={interest.id}
                  className="rounded-lg bg-beige-100 text-purple-700 single-12-m p-2 h-fit shrink-0"
                >
                  {interest.name}
                </li>
              )
            );
          })}
        </ul>
      </div>
    </li>
  );
};
