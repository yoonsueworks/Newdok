import { useState } from "react";

import WhileSubscription from "components/pages/manageSubscription/WhileSubscription";
import StoppedSubscription from "components/pages/manageSubscription/StoppedSubscription";
import SearchButton from "shared/SearchButton";

import { SubscribeListContext } from "context/SubscribeListContext";

const ManageSubscription = () => {
  const [menuClicked, setMenuClicked] = useState(0);
  const [currentBrand, setCurrentBrand] = useState("undefined");

  const subscribeListContextValues = {
    currentBrand: currentBrand,
    setCurrentBrand: setCurrentBrand,
  };

  const renderButton = (index, text) => (
    <button
      key={index}
      onClick={() => setMenuClicked(index)}
      className={`w-full rounded-full input-01 duration-300 ${
        menuClicked === index
          ? "bg-blue-600 active:bg-blue-700 hover:bg-blue-500 text-white p-3.5"
          : "bg-neutralgray-200 py-3.5 text-neutralgray-700"
      }`}
    >
      {text}
    </button>
  );

  return (
    <SubscribeListContext.Provider value={subscribeListContextValues}>
      <div className="w-full h-full flex flex-col">
        <div className="w-full bg-white flex items-center justify-between px-5 py-4">
          <div>내 구독</div>
          {/* TODO: 추후 검색 비회원 로그인 아이콘 추가 예정 */}
          <SearchButton />
        </div>
        <div className="w-full h-full bg-neutralgray-50 overflow-scroll">
          <div className="xs:mx-5 sm:mx-5 md:mx-7 xl:mx-20 mt-4 mb-5 p-1 flex items-center justify-between bg-neutralgray-200 rounded-full">
            {renderButton(0, "구독 중")}
            {renderButton(1, "구독 중지")}
          </div>
          {menuClicked === 0 ? <WhileSubscription /> : <StoppedSubscription />}
        </div>
      </div>
    </SubscribeListContext.Provider>
  );
};

export default ManageSubscription;
