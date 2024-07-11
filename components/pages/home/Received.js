import { useContext } from "react";
import { useRecoilState } from "recoil";
import { monthlyArticlesAtom } from "service/atoms/atoms";
import { CalendarContext } from "context/CalendarContext";

import Background from "shared/Background";
import Article from "./Article";
import Reload from "shared/Reload";

const Received = () => {
  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const { activeDate } = useContext(CalendarContext);

  const { receivedUnread, receivedArticleList } = monthlyArticles?.filter(
    (item) => item.publishDate === activeDate
  )[0];
  const articleLength = receivedArticleList?.length;

  return (
    <div className="flex justify-center w-full h-full px-5 bg-neutralgray-50 overflow-scroll">
      <div className="flex flex-col w-full h-full sm:w-full md:w-full xl:px-28 bg-neutralgray-50 overflow-scroll">
        <div className="flex w-full flex justify-between items-center pt-7 pb-6 headline-s text-neutralgray-800">
          <span>{articleLength}개의 아티클이 도착했어요.</span>
          <Reload />
        </div>
        <ul className="grid xl:grid-cols-2 xl:gap-x-3 gap-y-2.5 pb-6">
          {receivedArticleList?.map((article, id) => {
            return <Article key={id} article={article} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Received;
