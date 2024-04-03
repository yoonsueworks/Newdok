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
    <div className="flex justify-center w-full h-full px-5 bg-beige-100 overflow-scroll">
      <div className="flex flex-col w-full h-full sm:w-full md:w-full xl:w-[80%]  px-5 bg-beige-100 overflow-scroll">
        <div className="flex w-full flex justify-between items-center pt-7 pb-6 single-20-b text-neutralgray-900">
          <span>{articleLength}개의 아티클이 도착했어요.</span>
          <Reload />
        </div>
        <div className="grid gap-y-2.5 pb-6">
          {receivedArticleList?.map((article, id) => {
            return <Article key={id} article={article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Received;
