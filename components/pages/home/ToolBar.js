import { useContext } from "react";
import { useRouter } from "next/router";

import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "icons/ver3.0/Line Calendar.svg";
import CloseIcon from "icons/ver1.0/close_off.svg";
import SearchIcon from "icons/ver3.0/Line Search.svg";

const SearchButton = ({ clickSearchBtn }) => {
  return (
    <button
      onClick={clickSearchBtn}
      className="w-fit h-fit"
      id="검색"
      aria-label="검색"
    >
      <SearchIcon
        width="20"
        height="20"
        color="#333333"
        className="cursor-pointer"
      />
    </button>
  );
};

const ToolBar = () => {
  const value = useContext(CalendarContext);
  const { dateLocaleKr, calendarOpen, setCalendarOpen, fullActiveDate } = value;
  const router = useRouter();

  const handleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const clickSearchBtn = () => {
    router.push("/search");
  };

  return (
    <div className="w-full px-5 py-2.5 bg-white text-neutralgray-800 title-s xl:px-5 xl:py-4 z-[100]">
      <div className="h-[24px] flex flex-row justify-between items-center align-center">
        <span>{fullActiveDate || dateLocaleKr}</span>

        {calendarOpen ? (
          <div className="flex gap-x-4">
            <CloseIcon
              className="cursor-pointer"
              width="20"
              height="20"
              color="#333333"
              onClick={handleCalendar}
            />
            <SearchButton clickSearchBtn={clickSearchBtn} />
          </div>
        ) : (
          <div className="flex gap-x-4">
            <Calendar
              width="20"
              height="20"
              stroke="#333333"
              color="#333333"
              className="cursor-pointer"
              onClick={handleCalendar}
            />
            <SearchButton clickSearchBtn={clickSearchBtn} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
