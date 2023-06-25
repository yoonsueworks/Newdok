import { useContext, useState } from "react";
import { CalendarContext } from "context/CalendarContext";

import Article from "./Article";
import Arrivals from "./Arrivals";
import NavEmptyForStyles from "shared/NavEmptyForStyles";

const Articles = () => {
  const { monthlyArticles, activeDate } = useContext(CalendarContext);
  // console.log(

  // );
  const articles = monthlyArticles.filter((item) => item.id === activeDate)[0]
    ?.articles;
  // TODO: 선택된 날짜 전달해오기
  const articleLength = articles?.length;

  // CSS
  const dafaultWrapperCSS =
    "w-full h-full flex flex-col overflow-y-scroll bg-beige-100 px-4 pt-7 gap-y-[26px] z-0";
  const arrivalsWrapperCSS =
    "w-full h-full flex flex-col justify-between bg-beige-100";
  const arrivalsCSS = "w-full h-full px-4 flex flex-col justify-between pb-0";
  // const articleNoneCSS = "w-full h-full px-4 flex flex-col justify-between";
  const defaultArticlesCSS =
    "w-full h-full flex flex-col px-4 pt-7 gap-y-[26px]";

  const titleCSS =
    "w-full flex justify-between items-center single-20-b text-neutralgray-900";
  const readStateCSS =
    "w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900";
  const badgeCSS =
    "inline-block min-w-[20px] h-5 rounded-full bg-purple-400 text-xs justify-center p-1 text-white leading-none text-center";
  const articlesCSS = "grid gap-y-2.5 pb-6";

  return (
    <div className={!articleLength ? arrivalsWrapperCSS : dafaultWrapperCSS}>
      {!articleLength ? (
        <div className={arrivalsCSS}>
          <Arrivals />
        </div>
      ) : (
        <>
          <div className={titleCSS}>
            <span>{articleLength}개의 아티클이 도착했어요.</span>
            <div className={readStateCSS}>
              안읽음
              <div className={badgeCSS}>3</div>
            </div>
          </div>
          <div className={articlesCSS}>
            {articles.map((article, id) => {
              return <Article key={id} html={article.html} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
