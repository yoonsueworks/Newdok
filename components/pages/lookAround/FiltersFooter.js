import Refresh from "icons/refresh_off.svg";

const FiltersFooter = ({ onApply }) => {
  return (
    <div className="w-full flex gap-x-4 px-5 pb-14 pt-8">
      <div className="w-full text-center flex gap-x-1 justify-center single-18-b items-center">
        <div>재설정</div>
        <Refresh width="24" height="24" />
      </div>
      <button
        className="w-full text-center p-5 single-24-b bg-purple-700 rounded-2xl text-white"
        onClick={onApply}
      >
        적용하기
      </button>
    </div>
  );
};

export default FiltersFooter;
