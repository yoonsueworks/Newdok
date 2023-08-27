import { useEffect, useState, useContext } from "react";
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
    monthlyArticles: data
  };

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateLocaleKr(currentDate);
    setActiveDate(new Date().getDate());
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

const HTML = `<!DOCTYPE html><html><body></body></html>`;
