import { useState } from "react";

import WhileSubscription from "components/pages/manageSubscription/WhileSubscription";
import StoppedSubscription from "components/pages/manageSubscription/StoppedSubscription";

const ManageSubscription = () => {
  const [menuClicked, setMenuClicked] = useState(0);

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
    <div className="w-full h-full bg-beige-100 overflow-scroll">
      <div className="px-5 mt-14 flex items-center justify-between gap-x-2.5">
        {renderButton(0, "구독 중")}
        {renderButton(1, "구독 중지")}
      </div>
      {menuClicked === 0 ? <WhileSubscription data={subscriptionData}/> : <StoppedSubscription data={subscriptionData}/>}
    </div>
  );
};

export default ManageSubscription;


const subscriptionData = [
  {
    id: 1,
    brandName: "NEWNEEK",
    imageUrl: "https://newdok.shop/public/NEWNEEK.png",
    publicationCycle: "매주 평일 아침",
  },
  {
    id: 2,
    brandName: "Daily Byte",
    imageUrl: "https://newdok.shop/public/Daily Byte.png",
    publicationCycle: "매주 평일 오전 6시",
  },
  {
    id: 9,
    brandName: "부딩 BOODING",
    imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
    publicationCycle: "매주 화, 금 아침",
  },
  {
    id: 18,
    brandName: "월간리워커",
    imageUrl: "https://newdok.shop/public/월간리워커.png",
    publicationCycle: "격주 금요일",
  },
  {
    id: 20,
    brandName: "뜨브뜨",
    imageUrl: "https://newdok.shop/public/뜨브뜨.png",
    publicationCycle: "격주 수요일",
  },
  {
    id: 29,
    brandName: "Weekly 호박너구리",
    imageUrl: "https://newdok.shop/public/Weekly 호박너구리.png",
    publicationCycle: "비정기 발행",
  },
  {
    id: 30,
    brandName: "메이플시럽",
    imageUrl: "https://newdok.shop/public/메이플시럽.png",
    publicationCycle: "격주 목요일 오전 10시",
  },
  {
    id: 45,
    brandName: "xyzorba",
    imageUrl: "https://newdok.shop/public/xyzorba.png",
    publicationCycle: "비정기 발행",
  },
  {
    id: 56,
    brandName: "해피어레터",
    imageUrl: "https://newdok.shop/public/해피어레터.png",
    publicationCycle: "격주 목요일",
  },
  {
    id: 87,
    brandName: "Alone&around",
    imageUrl: "https://newdok.shop/public/Alone&around.png",
    publicationCycle: "매주 평일 아침",
  },
  {
    id: 94,
    brandName: "Korean FE article",
    imageUrl: "https://newdok.shop/public/Korean FE article.png",
    publicationCycle: "매주 2회 비정기 발행",
  },
  {
    id: 96,
    brandName: "헤이팝레터",
    imageUrl: "https://newdok.shop/public/헤이팝레터.png",
    publicationCycle: "매주 목요일 오전 8시",
  },
  {
    id: 99,
    brandName: "돈키레터",
    imageUrl: "https://newdok.shop/public/돈키레터.png",
    publicationCycle: "매주 평일 오전 7시",
  },
  {
    id: 102,
    brandName: "풀-레터",
    imageUrl: "https://newdok.shop/public/풀-레터.png",
    publicationCycle: "격주 화요일 오전 8시",
  },
  {
    id: 109,
    brandName: "Freaky Whiskey Friday",
    imageUrl: "https://newdok.shop/public/Freaky Whiskey Friday.png",
    publicationCycle: "격주 금요일 오전 10시",
  },
];
