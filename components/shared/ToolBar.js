import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { calendarOpenAtom, calendarAtom } from "service/atoms/atoms";
// import { CalendarContext } from "../../context/CalendarContext";

import Calendar from "icons/calendar_off.svg";
import CloseIcon from "icons/ver1.0/close_off.svg";
import SearchIcon from "icons/ver1.0/search_off.svg";

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
  // const value = useContext(CalendarContext);
  const [calendarOpen, setCalendarOpen] = useRecoilState(calendarOpenAtom);
  const [calendarValues, setCalendarValues] = useRecoilState(calendarAtom);
  const { dateLocaleKr, fullActiveDate } = calendarValues;
  const router = useRouter();

  const handleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const clickSearchBtn = () => {
    router.push("/search");
  };

  return (
    <div className="w-full h-fit">
      <div
        className="h-11 flex flex-row justify-between
       items-center"
      >
        <div>
          <Image
            src="/images/logo_gnb.png"
            alt="newdok"
            width="106"
            height="24"
            className="mt-2 xl:block md:hidden sm:hidden xs:hidden"
          />
        </div>
        <div className="w-full flex justify-between px-5 py-2.5 bg-purple-400 text-white single-20-b xl:px-36 z-[100]">
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
              <SearchButton />
            </div>
          ) : (
            <div className="flex gap-x-2">
              <Calendar
                width="32"
                height="32"
                className="cursor-pointer"
                onClick={handleCalendar}
              />
              <SearchButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
