import Image from "next/image";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import BrandInfoBar from "shared/BrandInfoBar";
import TimeIcon from "icons/ver1.0/time_off.svg";
import Tags from "shared/Tags";

const BrandInfo = ({ data, setOpen, controlModal }) => {
  const {
    brandName,
    interests,
    detailDescription,
    publicationCycle,
    imageUrl,
    isSubscribed,
  } = data;

  const [userDatas] = useRecoilState(userDatasAtom);

  const clickSubscribeBtn = () => {
    /* unAuthorized */
    if (!userDatas?.nickname) {
      controlModal(true);
      return;
    }
    /* authorized & subscribed */
    if (isSubscribed === "CHECK") {
      controlModal(true);
      return;
    }
    /* authorized */
    if (userDatas?.nickname) {
      setOpen();
    }
  };

  return (
    <div className="bg-neutralgray-300 sticky top-0">
      <BrandInfoBar name={data.brandName} />
      <div className="w-full h-fit grid py-8 px-5 gap-y-6">
        <div className="grid gap-y-5">
          <div className="flex gap-x-5">
            <div className="w-[100px] h-[100px] rounded-full flex-shrink-0 contentbox-border relative border border-neutralgray-200 flex justify-center items-center">
              <Image
                alt={brandName}
                src={imageUrl}
                fill
                sizes="100"
                quality={45}
                loading="lazy"
                placeholder="blur"
                className={isSubscribed === "CHECK" ? "brightness-50" : ""}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
                style={{
                  objectFit: "cover",
                  borderRadius: 50,
                }}
              />
              {isSubscribed === "CHECK" && (
                <div className="text-white single-16-b z-10">구독 확인 중</div>
              )}
            </div>
            <div className="flex flex-col gap-y-4">
              <Tags tags={interests} usage="brand" />
              <div>
                <h6 className="single-24-b text-purple-700 mb-2">
                  {brandName}
                </h6>
                <div className="single-14-m flex items-center gap-x-1">
                  <TimeIcon width="16" height="16" stroke="#171414" />
                  {publicationCycle}
                </div>
              </div>
            </div>
          </div>
          <div className="multiple-16-m">{detailDescription}</div>
        </div>
        <button
          type="button"
          onClick={clickSubscribeBtn}
          disabled={isSubscribed === "CONFIRMED"}
          className={`w-full h-fit p-4 rounded-xl text-white single-20-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 disabled:bg-neutralgray-500 transition-colors duration-300 `}
        >
          {!userDatas?.nickname || isSubscribed === "INITIAL"
            ? "구독하기"
            : isSubscribed === "CHECK"
            ? "구독 확인하기"
            : "구독 중"}
        </button>
      </div>
      <div className="text-white single-18-b bg-neutralgray-200 w-full pt-8 px-5 pb-4">
        지난 아티클 보기
      </div>
    </div>
  );
};

export default BrandInfo;
