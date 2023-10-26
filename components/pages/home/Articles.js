import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "context/CalendarContext";
import { useRecoilState } from "recoil";
import { monthlyArticlesAtom } from "service/atoms/atoms";

import UnAuthorized from "components/pages/home/UnAuthorized";
import LocalStorage from "public/utils/LocalStorage";

import { useUserSubscriptionList } from "service/hooks/user";
import Arrivals from "./Arrivals";
import Received from "./Received";
import NoSubscription from "./NoSubsciption";

const Articles = () => {
  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const { activeDate, fullActiveDate, dateLocaleKr } =
    useContext(CalendarContext);
  const { data, isLoading, isError } = useUserSubscriptionList();
  const today = dateLocaleKr.split(" ")[3];
  const [token, setToken] = useState(null);

  const articleLength = monthlyArticles?.filter(
    (item) => item.publishDate === activeDate
  )[0]?.receivedArticleList?.length;

  useEffect(() => {
    const loadedToken = LocalStorage.getItem("NDtoken");
    setToken(loadedToken);
  }, []);

  return (
    <>
      {!token ? (
        <UnAuthorized />
      ) : data?.length === 0 ? (
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
