import React, { useState, useContext } from "react";
import { useRecoilState } from "recoil";
import {
  monthlyArticlesAtom,
  monthValueAtom,
  dateValueAtom,
} from "service/atoms/atoms";
import {
  useMonthlyArticlesOnClickPrev,
  useMonthlyArticlesOnClickNext,
} from "service/hooks/newsletters";

import ToolBar from "components/pages/home/ToolBar";
import PrevIcon from "icons/ver1.0/arrow_left_off.svg";
import NextIcon from "icons/ver1.0/arrow_right_off.svg";
import RefreshIcon from "icons/ver1.0/refresh_off.svg";

import { CalendarContext } from "context/CalendarContext";
import Calendar from "react-calendar";

export default function ReactCalendar() {
  const {
    dateLocaleKr,
    fullActiveDate,
    setActiveDate,
    activeDate,
    setFullActiveDate,
    setCalendarOpen,
    activeMonth,
    setActiveMonth,
    activeStartDate,
    setActiveStartDate,
  } = useContext(CalendarContext);
  const today = new Date();
  const todayDate = today.getDate();
  const currentMonth = today.getMonth() + 1;

  const futureMonthCondition =
    `${today.getFullYear()}.${currentMonth}` ===
    `${today.getFullYear()}.${activeMonth}`;

  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const [value, onChange] = useRecoilState(monthValueAtom);
  const [dateValue, setDateValue] = useRecoilState(dateValueAtom);
  const [articles, setArticles] = useState(monthlyArticles);

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const yearlyCondition = months.indexOf(activeMonth);
  const newActiveMonthPrev = yearlyCondition === 0 ? 12 : activeMonth - 1;
  const newActiveMonthNext = yearlyCondition === 11 ? 1 : activeMonth + 1;

  const prevRequest = useMonthlyArticlesOnClickPrev(newActiveMonthPrev);
  const nextRequest = useMonthlyArticlesOnClickNext(newActiveMonthNext);

  /* 미래 날짜(일, 월) 클릭 방지 */
  const isDateDisabled = (date) => {
    const currentDate = date.getDate();
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

  /* < 버튼 클릭 시 */
  const clickPrevBtn = async () => {
    const { data } = await prevRequest.refetch(newActiveMonthPrev);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonthPrev);
    setActiveDate(null); // 미리 선택된 날짜 없음
    onChange(calculateMonth("prev"));
  };

  /* > 버튼 클릭 시 */
  const clickNextBtn = async () => {
    if (futureMonthCondition) return;

    const { data } = await nextRequest.refetch(newActiveMonthNext);
    setArticles(data);
    setMonthlyArticles(data);
    setActiveMonth(newActiveMonthNext);
    setActiveDate(null); // 미리 선택된 날짜 없음
    onChange(calculateMonth("next"));
  };

  const tileClassName = ({ date }) => {
    if (date.getDate() === activeDate) {
      return "selected-date"; // 선택된 타일 css 클라스 명 부여
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col items-center justify-center calendar-container z-30 absolute sm:w-full md:w-full xl:w-full  shadow-[0_0_0_99999px_rgba(0,0,0,0.5)] z-[100]">
        <ToolBar />
        <Calendar
          onChange={(e) => {
            // 클릭 시 날짜 설정 및 캘린더 닫기
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
            setDateValue(e); // 페이지 이동 시 특정 날짜 상태 유지
            onChange();
          }}
          value={value}
          /*  외부 함수에서 value 갱신 시 activeStartDate 또한 업데이트 해야 라이브러리에서 값 갱신 됨 (activeStartDate, onActiveStartDateChange) */
          activeStartDate={activeStartDate}
          onActiveStartDateChange={({ activeStartDate }) => {
            const clickedMonth = activeStartDate.getTime();
            const timeGap = clickedMonth - today.getTime();

            if (timeGap > 0) {
              return;
            }
            // 미래 월로 이동 금지
            setActiveStartDate(activeStartDate);
          }}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
          locale="ko-KO"
          calendarType="US"
          minDetail="month"
          maxDetail="month"
          nextLabel={<NextIcon id="next" onClick={clickNextBtn} />}
          prevLabel={<PrevIcon id="prev" onClick={clickPrevBtn} />}
          next2Label={null}
          prev2Label={null}
          tileDisabled={({ date }) => isDateDisabled(date)}
          tileClassName={tileClassName}
          tileContent={({ date }) => {
            return <TileContent date={date} monthlyArticles={articles} />;
          }}
          showNeighboringMonth={false}
        />
        {/* 오늘 refresh 버튼 */}
        <button
          className="flex justify-center items-center absolute bottom-[-50px] bg-white p-2 rounded-full border border-neutralgray-200"
          onClick={() => {
            // 클릭 시 날짜 설정 및 캘린더 닫기
            setCalendarOpen((prev) => !prev);
            setActiveDate(Number(dateLocaleKr.split(" ")[2]));
            setFullActiveDate(dateLocaleKr);
            onChange();
          }}
        >
          <span className="pr-1.5 single-16-m">오늘</span>
          <RefreshIcon
            width="16"
            height="16"
            className={`transition-all duration-500`}
          />
        </button>
      </div>
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
