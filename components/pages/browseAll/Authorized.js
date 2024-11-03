import { useState } from "react";

import CustomizedCards from "components/pages/browseAll/CustomizedCards";
import Nickname from "shared/Nickname";
import Lists from "shared/Lists";

import RefreshIcon from "icons/ver3.0/Line Reload.svg";

const Authorized = ({ shuffledArray, shuffleUnion, intersectionArr }) => {
  const [rotation, setRotation] = useState(0);
  const clickRefresh = () => {
    setRotation(rotation + 360);
  };

  return (
    <>
      <div className="scroll-smooth">
        <h1 className="headline-s pt-8 pb-4 w-max pl-5">
          <Nickname />
          님을 위한 <br /> 맞춤형 뉴스레터가 도착했어요!
        </h1>
        <CustomizedCards datas={intersectionArr} />
      </div>
      <div className="grid gap-y-4 px-5 scroll-smooth pb-7">
        <div className="flex justify-between items-center pt-14">
          <h1 className="title-s">이런 뉴스레터는 어때요?</h1>
          <button
            className="flex gap-x-1 items-center"
            onClick={() => {
              clickRefresh();
              shuffleUnion();
            }}
          >
            <RefreshIcon
              width="14"
              height="14"
              stroke="#2866D3"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
              className={`transition-all duration-500`}
            />
            <span className="label-l text-blue-600">새로고침</span>
          </button>
        </div>
        <Lists datas={shuffledArray} />
      </div>
    </>
  );
};

export default Authorized;
