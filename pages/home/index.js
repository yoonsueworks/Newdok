import { useEffect, useState } from "react";
import { CalendarContext } from "context/CalendarContext";

import Articles from "components/pages/home/Articles";
import ReactCalendar from "components/pages/home/Calendar";
import ToolBar from "components/pages/home/ToolBar";
import Loading from "shared/Loading";

import { useMonthlyArticles } from "service/hooks/newsletters";

const Home = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateLocaleKr, setDateLocaleKr] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [fullActiveDate, setFullActiveDate] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [monthlyArticles, setMonthlyArticles] = useState([]);
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const { refetch, data, isLoading } = useMonthlyArticles(thisMonth);

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
    setMonthlyArticles: setMonthlyArticles,
    monthlyArticles: data,
  };

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateLocaleKr(currentDate);
    setFullActiveDate(currentDate);
    setActiveDate(new Date().getDate());
    setActiveMonth(new Date().getMonth() + 1);
    setMonthlyArticles(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
