import React, { useState, useContext } from "react";
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
    monthlyArticles,
    fullActiveDate,
    setActiveDate,
    setMonthlyArticles,
    setFullActiveDate,
    setCalendarOpen,
    activeMonth,
    setActiveMonth,
  } = useContext(CalendarContext);
  const today = new Date();
  const todayDate = today.getDate();
  const [value, onChange] = useState(new Date());
  const [articles, setArticles] = useState(monthlyArticles);
  const [monthLabel, setMonthLabel] = useState(
    `${today.getUTCFullYear()}년 ${today.getMonth() + 1}월`
  );

  const prevRequest = useMonthlyArticlesOnClickPrev(activeMonth - 1);
  const nextRequest = useMonthlyArticlesOnClickNext(activeMonth + 1);

  const isDateDisabled = (date) => {
    const currentDate = date.getDate();
    return currentDate > todayDate;
  };

  const clickPrevBtn = async () => {
    const newActiveMonth = activeMonth - 1;
    const { data } = await prevRequest.refetch(newActiveMonth);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonth);
    setMonthLabel(`${today.getUTCFullYear()}년 ${newActiveMonth}월`);
  };

  const clickNextBtn = async () => {
    const newActiveMonth = activeMonth + 1;
    const { data } = await nextRequest.refetch(newActiveMonth);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonth);
    setMonthLabel(`${today.getUTCFullYear()}년 ${newActiveMonth}월`);
  };

  const customNavigationLabel = ({ view }) => {
    return `${monthLabel}`;
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
        }}
        value={value}
        locale="ko-KO"
        calendarType="US"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        nextLabel={<NextIcon onClick={clickNextBtn} />}
        prevLabel={<PrevIcon id="prev" onClick={clickPrevBtn} />}
        next2Label={null}
        prev2Label={null}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileContent={({ date }) => {
          return <TileContent date={date} monthlyArticles={articles} />;
        }}
        navigationLabel={customNavigationLabel}
        showNeighboringMonth={false}
        minDetail="month"
        maxDetail="month"
        className="react-calendar"
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
