import Image from "next/image";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import BrandInfoBar from "shared/BrandInfoBar";
import Tags from "shared/Tags";
import TimeIcon from "icons/time_off.svg";

const BrandInfo = ({ data, setOpen, controlModal }) => {
  const {
    brandId,
    brandName,
    interests,
    detailDescription,
    publicationCycle,
    imageUrl,
    isSubscribed,
    subscribeCheck,
    subscribeUrl,
  } = data;

  const [userDatas] = useRecoilState(userDatasAtom);

  const containerCSS = "w-full h-fit grid py-8 px-5 gap-y-6";
  const infosCSS = "grid gap-y-5";
  const profileCSS = "flex gap-x-5";

  const profileWrapperCSS = "flex flex-col gap-y-4";
  const h6titleCSS = "single-24-b text-purple-700 mb-2";
  const dateCSS = "single-14-m flex items-center gap-x-1";
  const descriptionCSS = "multiple-16-m";

  const clickSubscribeBtn = () => {
    // unAuthorized
    if (!userDatas?.nickname) {
      controlModal(true);
      return;
    }
    // authorized & subscribed
    if (isSubscribed === "CHECK") {
      controlModal(true);
      return;
    }
    // authorized
    if (userDatas?.nickname) {
      setOpen();
    }
  };

  return (
    <div className="bg-beige-100 absolute top-0 sticky">
      <BrandInfoBar name={data.brandName} />
      <div className={containerCSS}>
        <div className={infosCSS}>
          <div className={profileCSS}>
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
            <div className={profileWrapperCSS}>
              <Tags tags={interests} usage="brand" />
              <div>
                <h6 className={h6titleCSS}>{brandName}</h6>
                <div className={dateCSS}>
                  <TimeIcon width="16" height="16" stroke="#171414" />
                  {publicationCycle}
                </div>
              </div>
            </div>
          </div>
          <div className={descriptionCSS}>{detailDescription}</div>
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
      <div className="text-white single-18-b bg-purple-700 w-full pt-8 px-5 pb-4 absolute">지난 아티클 보기</div>
    </div>
  );
};

export default BrandInfo;
