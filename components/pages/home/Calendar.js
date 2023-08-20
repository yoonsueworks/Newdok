import React, { useState, useContext } from "react";
import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "react-calendar";
import PrevIcon from "icons/arrow_left_off.svg";
import NextIcon from "icons/arrow_right_off.svg";

export default function ReactCalendar() {
  const [value, onChange] = useState(new Date());
  const { monthlyArticles, setActiveDate, setFullActiveDate, setCalendarOpen } =
    useContext(CalendarContext);
  const today = new Date();
  const todayDate = today.getDate();

  const isDateDisabled = (date) => {
    const currentDate = date.getDate();
    return currentDate > todayDate;
  };

  const tileContent = ({ date }) => {
    const currentDate = Number(String(date).split(" ")[2]);
    // 달 따라서 값 확인하기 일치하지 않는 경우 안하기

    const hasMatchingArticles = monthlyArticles.some((el) => {
      return (
        el.publishDate === currentDate && el.receivedArticleList?.length > 0
      );
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
        nextLabel={<NextIcon onClick={() => console.log("요청")} />}
        prevLabel={<PrevIcon onClick={() => console.log("요청")} />}
        next2Label={null}
        prev2Label={null}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileContent={tileContent}
        showNeighboringMonth={false}
        minDetail="month"
        className="react-calendar"
      />
    </div>
  );
}
