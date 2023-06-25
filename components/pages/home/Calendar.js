import React, { useState } from "react";
import Calendar from "react-calendar";
import PrevIcon from "icons/arrow_left_off.svg";
import NextIcon from "icons/arrow_right_off.svg";
// import S from "./Calendar.module.scss";

export default function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  const tileContent = ({ date }) => {
    const currentDate = Number(String(date).split(" ")[2]);
    // 달 따라서 값 확인하기 일치하지 않는 경우 안하기
    const data = [
      { id: 1, artics: ["hello1", "hello1"] },
      { id: 2, articles: ["hello1", "hello1"] },
      { id: 3, articles: ["hello1", "hello1"] },
      { id: 4, articles: ["hello1", "hello1"] },
      { id: 5, articles: ["hello1", "hello1"] },
      { id: 6, articles: ["hello1", "hello1"] },
      { id: 25, articles: ["hello1", "hello1"] },
    ];

    const hasMatchingArticles = data.some((el) => {
      return el.id === currentDate && el.articles?.length > 0;
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
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={value}
        locale="ko-KO"
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        nextLabel={<NextIcon />}
        prevLabel={<PrevIcon />}
        next2Label={null}
        prev2Label={null}
        tileContent={tileContent}
        showNeighboringMonth={false}
        className="react-calendar"
      />
    </div>
  );
}
