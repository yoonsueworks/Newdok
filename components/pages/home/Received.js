import { useContext } from "react";
import { CalendarContext } from "context/CalendarContext";

import Background from "shared/Background";
import Article from "./Article";

const Received = () => {
  const { monthlyArticles, activeDate } = useContext(CalendarContext);

  const { receivedUnread, receivedArticleList } = monthlyArticles?.filter(
    (item) => item.publishDate === activeDate
  )[0];
  const articleLength = receivedArticleList?.length;
  
  return (
    <>
      <Background>
        <div className="w-full flex justify-between items-center pt-7 pb-6 single-20-b text-neutralgray-900">
          <span>{articleLength}개의 아티클이 도착했어요.</span>
          <div className="w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900">
            안읽음
            <div className="inline-block min-w-[20px] h-5 rounded-full bg-purple-400 text-xs justify-center p-1 text-white leading-none text-center">
              {receivedUnread}
            </div>
          </div>
        </div>
        <div className="grid gap-y-2.5 pb-6">
          {receivedArticleList?.map((article, id) => {
            return <Article key={id} article={article} />;
          })}
        </div>
      </Background>
    </>
  );
};

export default Received;
