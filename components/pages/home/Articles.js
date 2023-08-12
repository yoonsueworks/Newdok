import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "context/CalendarContext";

import Article from "./Article";
import Arrivals from "./Arrivals";
import Background from "shared/Background";

import UnAuthorized from "components/pages/home/UnAuthorized";
import LocalStorage from "public/utils/LocalStorage";

const Articles = () => {
  const { monthlyArticles, activeDate, fullActiveDate, dateLocaleKr } =
    useContext(CalendarContext);
  const today = dateLocaleKr.split(" ")[3];
  const [token, setToken] = useState(null);

  const articles = monthlyArticles.filter((item) => item.id === activeDate)[0]
    ?.articles;
  // TODO: 선택된 날짜 전달해오기
  const articleLength = articles?.length;

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
        <Background>
          <div className="w-full flex justify-between items-center pt-7 pb-6 single-20-b text-neutralgray-900">
            <span>{articleLength}개의 아티클이 도착했어요.</span>
            <div className="w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900">
              안읽음
              <div className="inline-block min-w-[20px] h-5 rounded-full bg-purple-400 text-xs justify-center p-1 text-white leading-none text-center">
                3
              </div>
            </div>
          </div>
          <div className="grid gap-y-2.5 pb-6">
            {articles?.map((article, id) => {
              return <Article key={id} html={article.html} />;
            })}
          </div>
        </Background>
      )}
    </>
  );
};

export default Articles;
