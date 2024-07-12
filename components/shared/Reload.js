import { useState } from "react";
import Refresh from "icons/ver3.0/Line Reload.svg";
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
      className="w-fit flex gap-x-1 label-l text-blue-600 cursor-pointer"
      onClick={clickRefresh}
    >
      <Refresh
        width="14"
        height="14"
        stroke="#2866D3"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        className={`transition-all duration-500`}
      />
      새로고침
    </div>
  );
};

export default Reload;
