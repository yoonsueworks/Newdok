import { useContext } from "react";
import { CalendarContext } from "context/CalendarContext";
import { GlobalContext } from "pages/_app";

import Article from "./Article";
import Arrivals from "./Arrivals";
import Background from "shared/Background";

import UnAuthorized from "components/pages/home/UnAuthorized";

const Articles = () => {
  const { token } = useContext(GlobalContext);
  const { monthlyArticles, activeDate, fullActiveDate, dateLocaleKr } =
    useContext(CalendarContext);
  const today = dateLocaleKr.split(" ")[3];

  const articles = monthlyArticles.filter((item) => item.id === activeDate)[0]
    ?.articles;
  // TODO: 선택된 날짜 전달해오기
  const articleLength = articles?.length;

  const titleCSS =
    "w-full flex justify-between items-center pt-7 pb-6 single-20-b text-neutralgray-900";
  const readStateCSS =
    "w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900";
  const badgeCSS =
    "inline-block min-w-[20px] h-5 rounded-full bg-purple-400 text-xs justify-center p-1 text-white leading-none text-center";
  const articlesCSS = "grid gap-y-2.5 pb-6";

  return (
    <>
      {!token ? (
        <UnAuthorized />
      ) : !articleLength ? (
        <div className="w-full h-full justify-between bg-beige-100">
          <Arrivals
            today={today}
            activeDate={fullActiveDate}
            dateLocaleKr={dateLocaleKr}
          />
        </div>
      ) : (
        <Background>
          <div className={titleCSS}>
            <span>{articleLength}개의 아티클이 도착했어요.</span>
            <div className={readStateCSS}>
              안읽음
              <div className={badgeCSS}>3</div>
            </div>
          </div>
          <div className={articlesCSS}>
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
