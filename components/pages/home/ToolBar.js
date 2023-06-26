import Calendar from "icons/calendar_off.svg";
import Close from "icons/close_off.svg";

const ToolBar = () => {
  //   const iconCSS = "w-8 h-8";
  //   className={iconCSS}

  return (
    <div className="w-full px-5 py-2.5 bg-purple-400 text-white single-20-b">
      <div className="h-11 flex flex-row justify-between items-center">
        <span>6월 16일 금요일</span>
        <Calendar width="32" height="32" />
        {/* <Close color="white" width="32" height="32" /> */}
      </div>
    </div>
  );
};

export default ToolBar;
