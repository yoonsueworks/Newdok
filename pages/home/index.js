import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CalendarContext } from "context/CalendarContext";

import Articles from "components/pages/home/Articles";
import ReactCalendar from "components/pages/home/Calendar";
import ToolBar from "components/pages/home/ToolBar";
import Loading from "shared/Loading";

import { useMonthlyArticles } from "service/hooks/newsletters";
import {
  monthlyArticlesAtom,
  monthValueAtom,
  dateValueAtom,
} from "service/atoms/atoms";

const Home = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateLocaleKr, setDateLocaleKr] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [fullActiveDate, setFullActiveDate] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  // 외부 함수에서 value 갱신 시 activeStartDate 또한 업데이트 해야 라이브러리에서 값 갱신 됨 (activeStartDate, onActiveStartDateChange)
  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const [value, onChange] = useRecoilState(monthValueAtom);
  const [dateValue, setDateValue] = useRecoilState(dateValueAtom);

  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const { data, isLoading } = useMonthlyArticles(thisMonth);

  const calendarContextValues = {
    setCalendarOpen: setCalendarOpen,
    calendarOpen: calendarOpen,
    dateLocaleKr: dateLocaleKr,
    setDateLocaleKr: setDateLocaleKr,
    activeDate: activeDate,
    setActiveDate: setActiveDate,
    fullActiveDate: fullActiveDate,
    setFullActiveDate: setFullActiveDate,
    activeMonth: activeMonth,
    setActiveMonth: setActiveMonth,
    activeStartDate: activeStartDate,
    setActiveStartDate: setActiveStartDate,
    // setMonthLabel: setMonthLabel,
  };

  useEffect(() => {
    // 과거 날짜의 뉴스레터 확인하고 다시 돌아왔을 경우
    if (String(dateValue).substring(0, 15) !== String(date).substring(0, 15)) {
      const savedDate = new Date(String(dateValue));
      const currentDate = savedDate.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateLocaleKr(currentDate);
      setFullActiveDate(currentDate);
      setActiveDate(savedDate.getDate());
      setActiveMonth(savedDate.getMonth() + 1);
      // setMonthLabel(
      //   `${savedDate.getUTCFullYear()}년 ${savedDate.getMonth() + 1}월`
      // );
      setActiveStartDate(new Date(String(dateValue)));
    } else {
      // 오늘 날짜, 최초 홈에 접근
      const currentDate = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateLocaleKr(currentDate);
      setFullActiveDate(currentDate);
      setActiveDate(new Date().getDate());
      // setMonthLabel(`${date.getUTCFullYear()}년 ${date.getMonth() + 1}월`);
      setActiveMonth(new Date().getMonth() + 1);
      if (data) {
        setMonthlyArticles(data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <CalendarContext.Provider value={calendarContextValues}>
        <div className="h-full w-full flex flex-col overflow-auto">
          <ToolBar />
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="relative">
                {calendarOpen && <ReactCalendar />}
              </div>
              <Articles />
            </>
          )}
        </div>
      </CalendarContext.Provider>
    </>
  );
};

export default Home;
