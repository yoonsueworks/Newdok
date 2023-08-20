import Image from "next/image";

import { useContext } from "react";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { GlobalContext } from "../../../pages/_app";

import Tags from "shared/Tags";
import CheckIcon from "icons/check_off.svg";
import CloseIcon from "icons/close_off.svg";
import BackIcon from "icons/back_off.svg";

const BrandInfo = ({ data, setOpen }) => {
  const {
    brandId,
    brandName,
    interests,
    detailDescription,
    publicationCycle,
    imageUrl,
    isSubscribed,
    subscribeUrl,
  } = data;

  const { setToastPopUp, setToastMessage } = useContext(GlobalContext);
  const [userDatas] = useRecoilState(userDatasAtom);

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(userDatas.subscribeEmail);
    setToastPopUp();
    setToastMessage("mailCopied");
  };

  const containerCSS = "w-full h-fit grid py-8 px-5 gap-y-6 bg-beige-100 ";
  const infosCSS = "grid gap-y-5";
  const profileCSS = "flex gap-x-5";

  const profileWrapperCSS = "flex flex-col gap-y-4";
  const h6titleCSS = "single-24-b text-purple-700 mb-2";
  const dateCSS = "single-14-m flex items-center gap-x-1";
  const descriptionCSS = "multiple-16-m";

  const clickSubscribeBtn = () => {
    console.log(userDatas);
    if (userDatas) {
      setOpen(true);
      copyClipboard();
    }
    if (!userDatas) {
      console.log("open modal");
    }
  };

  return (
    <div>
      <div className="bg-white flex justify-between p-2.5 items-center elevation-1-bottom z-10">
        <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0 cursor-pointer">
          <BackIcon
            width="24"
            height="24"
            className="shrink-0"
            onClick={() => history.back()}
          />
        </div>
        <div className="single-20-b">{data.brandName}</div>
        <div className="w-7.5 h-7.5 flex justify-center items-center p-1.5">
          <div className="w-6 h-6"></div>
        </div>
      </div>
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
                  <CheckIcon width="16" height="16" stroke="#171414" />
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
          className="w-full h-fit p-4 rounded-xl text-white single-20-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 transition-colors duration-300 "
        >
          {isSubscribed === ("INITIAL" || "CHECK") ? "구독하기" : "구독 중"}
        </button>
      </div>
    </div>
  );
};

export default BrandInfo;
