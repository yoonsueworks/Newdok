import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "context/CalendarContext";

import UnAuthorized from "components/pages/home/UnAuthorized";
import LocalStorage from "public/utils/LocalStorage";
import Arrivals from "./Arrivals";
import Received from "./Received";

const Articles = () => {
  const { monthlyArticles, activeDate, fullActiveDate, dateLocaleKr } =
    useContext(CalendarContext);
  const today = dateLocaleKr.split(" ")[3];
  const [token, setToken] = useState(null);

  const articleLength = monthlyArticles?.filter(
    (item) => item.publishDate === activeDate
  )[0].receivedArticleList?.length;

  useEffect(() => {
    const loadedToken = LocalStorage.getItem("NDtoken");
    setToken(loadedToken);
  }, []);

  return (
    <>
      {!token ? (
        <UnAuthorized />
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
