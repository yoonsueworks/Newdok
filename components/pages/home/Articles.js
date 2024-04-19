import { useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { monthlyArticlesAtom } from "service/atoms/atoms";
import { useUserSubscriptionList } from "service/hooks/user";

import UnAuthorized from "components/pages/home/UnAuthorized";
import NoSubscription from "./NoSubsciption";
import Arrivals from "./Arrivals";
import Received from "./Received";

import { CalendarContext } from "context/CalendarContext";
import LocalStorage from "public/utils/LocalStorage";

const Articles = () => {
  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const { activeDate, fullActiveDate, dateLocaleKr } =
    useContext(CalendarContext);
  const { data } = useUserSubscriptionList();
  const today = dateLocaleKr.split(" ")[3];

  const articleLength = monthlyArticles?.filter(
    (item) => item.publishDate === activeDate
  )[0]?.receivedArticleList?.length;

  return (
    <>
      {subscriptionData?.length === 0 ? (
        <NoSubscription />
      ) : !articleLength ? (
        <Arrivals
          today={today}
          activeDate={fullActiveDate}
          dateLocaleKr={dateLocaleKr}
        />
      ) : (
        <Received />
      )}
    </>
  );
};

export default Articles;

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
