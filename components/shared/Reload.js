import { useState } from "react";
import Refresh from "icons/refresh_off.svg";
import { useMonthlyArticles } from "service/hooks/newsletters";

const Reload = () => {
  const [rotation, setRotation] = useState(0);
  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const { refetch } = useMonthlyArticles(thisMonth);

  const clickRefresh = () => {
    setRotation(rotation + 360);
    refetch();
  };

  return (
    <div
      className="w-fit flex gap-x-1 items-center single-14-m text-neutralgray-900 cursor-pointer"
      onClick={clickRefresh}
    >
      새로고침
      <Refresh
        width="20"
        height="20"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        className={`transition-all duration-500`}
      />
    </div>
  );
};

export default Reload;
