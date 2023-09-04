import React, { useState, useContext, useEffect } from "react";
import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "react-calendar";
import PrevIcon from "icons/arrow_left_off.svg";
import NextIcon from "icons/arrow_right_off.svg";

import { useMonthlyArticlesOnClick } from "service/hooks/newsletters";

export default function ReactCalendar() {
  const [value, onChange] = useState(new Date());
  const {
    monthlyArticles,
    fullActiveDate,
    setActiveDate,
    setFullActiveDate,
    setCalendarOpen,
    activeMonth,
    setActiveMonth,
    setMonthlyArticles,
  } = useContext(CalendarContext);
  const today = new Date();
  const todayDate = today.getDate();
  const { refetch, data, isLoading } = useMonthlyArticlesOnClick(
    activeMonth - 1
  );

  const isDateDisabled = (date) => {
    const currentDate = date.getDate();
    return currentDate > todayDate;
  };

  const clickPrevBtn = async () => {
    await refetch(activeMonth - 1);
    setMonthlyArticles(data);
    console.log(data);
    // console.log(monthlyArticles);
    setActiveMonth(activeMonth - 1);
  };

  const clickNextBtn = async () => {
    await refetch();
    setMonthlyArticles(data);
    console.log(data);
    // console.log(monthlyArticles);
    setActiveMonth(activeMonth + 1);
  };

  return (
    // TODO: next, prev 버튼 클릭 시 요청 보내기
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
        }}
        value={value}
        locale="ko-KO"
        calendarType="US"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        // nextLabel={<NextIcon onClick={clickNextBtn} />}
        nextLabel={<NextIcon id="next" onClick={() => console.log("요청")} />}
        prevLabel={<PrevIcon id="prev" onClick={clickPrevBtn} />}
        // prevLabel={<PrevIcon onClick={() => console.log("요청")} />}
        next2Label={null}
        prev2Label={null}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileContent={({ date }) => {
          return <TileContent date={date} monthlyArticles={monthlyArticles} />;
        }}
        showNeighboringMonth={false}
        minDetail="month"
        className="react-calendar"
      />
    </div>
  );
}

const TileContent = ({ date, monthlyArticles }) => {
  const currentDate = Number(String(date).split(" ")[2]);
  // 달 따라서 값 확인하기 일치하지 않는 경우 안하기

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
