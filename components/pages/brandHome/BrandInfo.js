import Image from "next/image";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import TimeIcon from "icons/ver1.0/time_off.svg";
import Tags from "shared/Tags";

const BrandInfo = ({ data, setOpen, controlModal, resumeSubscription }) => {
  const {
    brandName,
    interests,
    detailDescription,
    publicationCycle,
    imageUrl,
    isSubscribed,
  } = data;

  const [userDatas] = useRecoilState(userDatasAtom);

  const [initial, check, paused, confirmed] = [
    isSubscribed === "INITIAL",
    isSubscribed === "CHECK",
    isSubscribed === "PAUSED",
    isSubscribed === "CONFIRMED",
  ];

  const clickSubscribeBtn = () => {
    /* unAuthorized */
    if (!userDatas?.nickname) {
      controlModal(true);
      return;
    }
    /* authorized & subscribed & not checked : 구독 확인 */
    if (check) {
      controlModal(true);
      return;
    }
    /* authorized & paused : 구독 재개 */
    if (paused) {
      resumeSubscription();
      window.location.reload();
      return;
    }
    /* authorized & confirmed : 구독 중지 */
    if (confirmed) {
      controlModal(true);
      return;
    }
    /* authorized & not subscribed */
    if (userDatas?.nickname) {
      setOpen();
    }
  };

  return (
    <div className="sticky top-0 xl:pt-6 xl:px-[34px] bg-neutralgray-50">
      <div className="w-full h-fit flex xl:flex-row flex-col xl:gap-x-3 relative">
        <div className="grid gap-y-5 w-full">
          <div className="flex xl:flex-row gap-x-5 w-full">
            <div className="h-[264px] xl:h-80 w-full mb-36 xs:mb-48 sm:mb-52 xl:mb-0 flex-shrink-0 relative flex justify-center items-center">
              <div className="flex gap-y-4 z-50 block xl:hidden absolute top-3 left-4">
                <Tags tags={interests} usage="brand" />
              </div>
              <Image
                alt={brandName}
                src={imageUrl}
                fill
                sizes="100"
                quality={45}
                loading="lazy"
                placeholder="blur"
                className={
                  check ? "brightness-50 xl:rounded-xl" : "xl:rounded-xl"
                }
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
                style={{
                  objectFit: "cover",
                  borderRadius: "0px 0px 12px 12px",
                  boxShadow: "0px 4px 8px 0px rgba(25, 25, 25, 0.10)",
                }}
              />
              {check && (
                <div className="text-white single-16-b z-10">구독 확인 중</div>
              )}
            </div>
          </div>
        </div>
        <div className="xs:absolute sm:absolute md:absolute w-full top-60 gap-y-4 xl:flex xl:flex-col">
          <div className="flex justify-between rounded-xl px-6 py-5 sm:mx-4 xs:mx-4 md:mx-4 elevation-2-bottom bg-white/[0.6] z-10 backdrop-blur-sm">
            <div>
              {brandName}
              <div className="single-14-m flex items-center gap-x-1 ">
                <TimeIcon width="16" height="16" stroke="#171414" />
                {publicationCycle}
              </div>
            </div>
            <button
              type="button"
              onClick={clickSubscribeBtn}
              className={`xs:w-[84px] xs:h-9 w-[120px] h-12 rounded-xl input-02 active:bg-blue-700 transition-colors duration-300 ${
                !userDatas?.nickname || initial || check
                  ? "bg-blue-600 text-white"
                  : paused
                  ? "bg-blue-400 text-white border border-blue-600"
                  : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
              }`}
            >
              {!userDatas?.nickname || initial
                ? "구독하기"
                : check
                ? "구독 확인하기"
                : paused
                ? "구독 재개"
                : confirmed
                ? "구독 중지"
                : "구독 중"}
            </button>
          </div>

          <div className="xl:h-full xs:mt-4 sm:mt-4 md:mt-4 text-neutralgray-700 body-s xl:rounded-xl xl:bg-white/[0.6] xl:py-5 xl:px-6 md:pr-8 md: px-5 sm:px-5 xs:px-5 xl:flex xl:flex-col xl:justify-between xl:elevation-2-bottom">
            <div className="">{detailDescription}</div>
            <div className="flex flex-col gap-y-4 xl:block hidden">
              <Tags tags={interests} usage="brand" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-neutralgray-700 title-s w-full pb-2 xl:mt-10 md:ml-5 sm:ml-5 xs:ml-5">
        지난 아티클 보기
      </div>
    </div>
  );
};

export default BrandInfo;
