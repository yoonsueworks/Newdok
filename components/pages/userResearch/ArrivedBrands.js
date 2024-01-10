import Image from "next/image";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../pages/_app";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import CloseIcon from "icons/close_off.svg";
import ToastPopUp from "shared/ToastPopUp";
import BrandList from "./BrandList";

import { BottomSheet } from "react-spring-bottom-sheet";

const ArrivedBrands = () => {
  const [open, setOpen] = useState(false);
  const [clickedBrand, setCickedBrand] = useState({ brandName: "", id: "" });
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const { responseData } = useContext(GlobalContext);

  const handleSubscribeClick = (e) => {
    const clickedId = e.target.id;
    const filteredBrand = responseData.filter(
      (brand) => brand.id === clickedId / 1
    )[0];
    window.navigator.clipboard.writeText(userDatas.subscribeEmail);
    setCickedBrand(filteredBrand);
    setOpen(true);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 1500);
  };

  return (
    <>
      <BrandList
        data={responseData}
        handleSubscribeClick={handleSubscribeClick}
      />
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        snapPoints={({ maxHeight }) => [0.9 * maxHeight]}
      >
        <div className="flex justify-between p-2.5 items-center">
          <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0">
            <CloseIcon width="24" height="24" stroke="white" fill="white" />
          </div>
          <div className="single-20-b">{clickedBrand.brandName} 구독하기</div>
          <button
            className="w-7.5 h-7.5 flex justify-center items-center p-1.5"
            onClick={() => setOpen(false)}
          >
            <CloseIcon width="24" height="24" />
          </button>
        </div>
        <div className="absolute w-full">
          <ToastPopUp toastMessage="mailCopied" isVisible={isToastVisible} />
        </div>
        <iframe
          src={clickedBrand.subscribeUrl}
          width="100%"
          height="800px"
        ></iframe>
      </BottomSheet>
    </>
  );
};

export default ArrivedBrands;
