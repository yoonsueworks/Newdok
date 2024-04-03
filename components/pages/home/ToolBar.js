import { useContext } from "react";
import { CalendarContext } from "../../../context/CalendarContext";

import Calendar from "icons/calendar_off.svg";
import Close from "icons/close_off.svg";

const ToolBar = () => {
  const value = useContext(CalendarContext);
  const { dateLocaleKr, calendarOpen, setCalendarOpen, fullActiveDate } = value;

  const handleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  return (
    <div className="w-full px-5 py-2.5 bg-purple-400 text-white single-20-b xl:px-44 z-[100]">
      <div className="h-11 flex flex-row justify-between items-center">
        <span>{fullActiveDate || dateLocaleKr}</span>

        {calendarOpen ? (
          <Close
            className="cursor-pointer"
            color="white"
            width="32"
            height="32"
            onClick={handleCalendar}
          />
        ) : (
          <Calendar
            width="32"
            height="32"
            className="cursor-pointer"
            onClick={handleCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default ToolBar;
