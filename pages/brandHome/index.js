import { useState, useContext } from "react";
import { BrandHomeContext } from "context/BrandHomeContext";

import BrandArticles from "components/pages/brandhome/BrandArticles";
import BrandInfo from "components/pages/brandhome/BrandInfo";
import CloseIcon from "icons/close_off.svg";

import { BottomSheet } from "react-spring-bottom-sheet";

const BrandHome = () => {
  const [open, setOpen] = useState(false);

  const value = {
    open: open,
    setOpen: setOpen,
  };

  // TODO: router.query로 id 받아오기
  return (
    <>
      <BrandHomeContext.Provider value={value}>
        <div className="w-full h-full bg-purple-700">
          <BrandInfo />
          <BrandArticles />
        </div>
        <BottomSheet
          open={open}
          onDismiss={() => setOpen(false)}
          snapPoints={({ maxHeight }) => [0.9 * maxHeight]}
        >
          <div className="flex justify-between p-2.5 items-center">
            <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0">
              <CloseIcon width="24" height="24" stroke="white" fill="white" />
            </div>
            <div className="single-20-b">NEWNEEK 구독하기</div>
            <button
              className="w-7.5 h-7.5 flex justify-center items-center p-1.5"
              onClick={() => setOpen(false)}
            >
              <CloseIcon width="24" height="24" />
            </button>
          </div>
          <iframe
            src="https://newneek.co/"
            width="100%"
            height="800px"
          ></iframe>
        </BottomSheet>
      </BrandHomeContext.Provider>
    </>
  );
};

export default BrandHome;
