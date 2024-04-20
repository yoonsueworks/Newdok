import { useState } from "react";

import WhileSubscription from "components/pages/manageSubscription/WhileSubscription";
import StoppedSubscription from "components/pages/manageSubscription/StoppedSubscription";
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
      className={`w-full text-purple-700 rounded-xl p-3.5 single-18-sb duration-300 ${
        menuClicked === index
          ? "bg-purple-700 active:bg-purple-800 hover:bg-purple-400 text-white"
          : "bg-white selectedchip-border hover:bg-purple-50"
      }`}
    >
      {text}
    </button>
  );

  return (
    <SubscribeListContext.Provider value={subscribeListContextValues}>
      <div className="w-full h-full bg-beige-100 overflow-scroll">
        <div className="px-5 mt-14 flex items-center justify-between gap-x-2.5">
          {renderButton(0, "구독 중")}
          {renderButton(1, "구독 중지")}
        </div>
        {menuClicked === 0 ? <WhileSubscription /> : <StoppedSubscription />}
      </div>
    </SubscribeListContext.Provider>
  );
};

export default ManageSubscription;
