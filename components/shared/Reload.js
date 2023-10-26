import Refresh from "icons/refresh_off.svg";

const Reload = () => {
  return (
    <div
      className="w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900 cursor-pointer"
      onClick={() => location.reload()}
    >
      새로고침
      <Refresh width="20" height="20" />
    </div>
  );
};

export default Reload;
