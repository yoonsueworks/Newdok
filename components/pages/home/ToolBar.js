import { useContext } from "react";

import { CalendarContext } from "../../../context/CalendarContext";
import SearchButton from "shared/SearchButton";

import Calendar from "icons/ver3.0/Line Calendar.svg";
import CloseIcon from "icons/ver1.0/close_off.svg";

const ToolBar = () => {
  const value = useContext(CalendarContext);
  const { dateLocaleKr, calendarOpen, setCalendarOpen, fullActiveDate } = value;

  const handleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  return (
    <div className="w-full px-5 py-2.5 bg-white text-neutralgray-800 title-s xl:px-5 py-4 md:h-14 z-[100]">
      <div className="h-6 flex flex-row justify-between items-center align-center m-auto">
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
            <SearchButton />
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
            <SearchButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
