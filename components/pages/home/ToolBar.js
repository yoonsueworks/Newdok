import { useContext } from "react";
import { useRouter } from "next/router";

import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "icons/calendar_off.svg";
import CloseIcon from "icons/close_off.svg";
import SearchIcon from "icons/search_off.svg";

const SearchButton = ({ clickSearchBtn }) => {
  return (
    <button onClick={clickSearchBtn} className="w-fit h-fit">
      <SearchIcon
        width="32"
        height="32"
        color="white"
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
    <div className="w-full px-5 py-2.5 bg-purple-400 text-white single-20-b xl:px-36 z-[100]">
      <div className="h-11 flex flex-row justify-between items-center">
        <span>{fullActiveDate || dateLocaleKr}</span>

        {calendarOpen ? (
          <div className="flex gap-x-2">
            <CloseIcon
              className="cursor-pointer"
              color="white"
              width="32"
              height="32"
              onClick={handleCalendar}
            />
            <SearchButton clickSearchBtn={clickSearchBtn} />
          </div>
        ) : (
          <div className="flex gap-x-2">
            <Calendar
              width="32"
              height="32"
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
