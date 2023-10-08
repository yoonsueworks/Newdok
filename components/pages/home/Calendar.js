import React, { useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { monthlyArticlesAtom, monthValueAtom } from "service/atoms/atoms";
import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "react-calendar";
import PrevIcon from "icons/arrow_left_off.svg";
import NextIcon from "icons/arrow_right_off.svg";

import {
  useMonthlyArticlesOnClickPrev,
  useMonthlyArticlesOnClickNext,
} from "service/hooks/newsletters";

export default function ReactCalendar() {
  const {
    fullActiveDate,
    setActiveDate,
    activeDate,
    setFullActiveDate,
    setCalendarOpen,
    activeMonth,
    setActiveMonth,
    monthLabel,
    setMonthLabel,
    activeStartDate,
    setActiveStartDate,
  } = useContext(CalendarContext);
  const today = new Date();
  const todayDate = today.getDate();

  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const [value, onChange] = useRecoilState(monthValueAtom);
  const [articles, setArticles] = useState(monthlyArticles);

  const prevRequest = useMonthlyArticlesOnClickPrev(activeMonth - 1);
  const nextRequest = useMonthlyArticlesOnClickNext(activeMonth + 1);

  const isDateDisabled = (date) => {
    const currentDate = date.getDate();
    const currentMonth = today.getMonth() + 1;
    if (activeMonth < currentMonth) return false;
    if (activeMonth > currentMonth) return true;
    if (activeMonth === currentMonth) return currentDate > todayDate;
  };

  const calculateMonth = (active) => {
    const currentDate = new Date(today.getFullYear(), activeMonth - 1);
    const currentDates = currentDate.toLocaleDateString().split(".");
    const previousMonth = new Date(
      currentDates[0] / 1,
      currentDates[1] / 1 - 2,
      todayDate
    );
    const nextMonth = new Date(
      currentDates[0] / 1,
      currentDates[1] / 1 + 1,
      todayDate
    );
    return active === "prev" ? previousMonth : nextMonth;
  };

  const clickPrevBtn = async () => {
    const newActiveMonth = activeMonth - 1;
    const { data } = await prevRequest.refetch(newActiveMonth);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonth);
    setMonthLabel(`${today.getUTCFullYear()}년 ${newActiveMonth}월`);
    onChange(calculateMonth("prev"));
  };

  const clickNextBtn = async () => {
    const newActiveMonth = activeMonth + 1;
    const { data } = await nextRequest.refetch(newActiveMonth);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonth);
    setMonthLabel(`${today.getUTCFullYear()}년 ${newActiveMonth}월`);
    onChange(calculateMonth("next"));
  };

  const customNavigationLabel = ({ view }) => {
    return `${monthLabel}`;
  };

  const tileClassName = ({ date }) => {
    // Add your logic here to determine if a date should have a special CSS class
    // For example, you can check if it's the currently selected date and return a class accordingly
    if (date.getDate() === activeDate) {
      return "selected-date"; // Apply a CSS class for the selected date
    }
    return ""; // No special class for other dates
  };

  return (
    <div className="calendar-container z-30 absolute bg-white">
      <Calendar
        onChange={(e) => {
          setCalendarOpen((prev) => !prev);
          setActiveDate(Number(String(e).split(" ")[2]));
          setFullActiveDate(
            e.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
          onChange();
          console.log("Clicked date:", e);
        }}
        value={value}
        // 외부 함수에서 value 갱신 시 activeStartDate 또한 업데이트 해야 라이브러리에서 값 갱신 됨 (activeStartDate, onActiveStartDateChange)
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        locale="ko-KO"
        calendarType="US"
        minDetail="month"
        maxDetail="month"
        nextLabel={<NextIcon onClick={clickNextBtn} />}
        prevLabel={<PrevIcon id="prev" onClick={clickPrevBtn} />}
        next2Label={null}
        prev2Label={null}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileClassName={tileClassName}
        tileContent={({ date }) => {
          return <TileContent date={date} monthlyArticles={articles} />;
        }}
        showNeighboringMonth={false}
        navigationLabel={customNavigationLabel}
      />
    </div>
  );
}

const TileContent = ({ date, monthlyArticles }) => {
  const currentDate = Number(String(date).split(" ")[2]);
  const hasMatchingArticles = monthlyArticles?.some((el) => {
    return el.publishDate === currentDate && el.receivedArticleList?.length > 0;
  });

  return (
    <div className="tile-content">
      {currentDate > 0 && hasMatchingArticles ? (
        <span className="tile-number">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
        </span>
      ) : (
        <span className="tile-number">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </span>
      )}
    </div>
  );
};
