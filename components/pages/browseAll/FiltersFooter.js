import { useState } from "react";

import Refresh from "icons/ver3.0/Line Reload.svg";
import { useResetRecoilState } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";
const FiltersFooter = ({ onApply }) => {
  const resetBrowseOptions = useResetRecoilState(browseOptionsAtom);

  const [rotation, setRotation] = useState(0);
  const clickRefresh = () => {
    setRotation(rotation + 360);
  };

  return (
    <div className="w-full flex gap-x-3.5 px-5 pb-14 pt-8">
      <button
        className="w-fit text-center flex gap-x-1 justify-center title-s items-center text-blue-600 shrink-0"
        type="button"
        onClick={() => {
          resetBrowseOptions();
          clickRefresh();
        }}
      >
        <Refresh
          width="16"
          height="16"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          className={`transition-all duration-500`}
        />
        <div className="mt-1">재설정</div>
      </button>
      <button
        className="w-full text-center p-5 single-24-b bg-blue-600 rounded-xl text-white"
        onClick={onApply}
      >
        적용하기
      </button>
    </div>
  );
};

export default FiltersFooter;
