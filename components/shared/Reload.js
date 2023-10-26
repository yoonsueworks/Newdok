import Refresh from "icons/refresh_off.svg";
import { useMonthlyArticles } from "service/hooks/newsletters";
import {
  monthlyArticlesAtom,
  monthValueAtom,
  dateValueAtom,
} from "service/atoms/atoms";

const Reload = () => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const { refetch } = useMonthlyArticles(thisMonth);
  // 추후 일간 요청으로 변경예정

  return (
    <div
      className="w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900 cursor-pointer"
      onClick={() => refetch()}
    >
      새로고침
      <Refresh width="20" height="20" />
    </div>
  );
};

export default Reload;
