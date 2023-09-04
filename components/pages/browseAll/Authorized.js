import CustomizedCards from "components/pages/browseAll/CustomizedCards";
import RefreshIcon from "icons/refresh_off.svg";
import Nickname from "shared/Nickname";
import Lists from "shared/Lists";

const UnAuthorized = ({ shuffledArray, shuffleUnion, intersectionArr }) => {
  return (
    <>
      <div className="scroll-smooth">
        <h1 className="multiple-20-b pt-8 pb-4 w-max pl-5">
          <Nickname />
          님을 위한 <br /> 맞춤형 뉴스레터가 도착했어요!
        </h1>
        <CustomizedCards datas={intersectionArr} />
      </div>
      <div className="grid gap-y-4 px-5 scroll-smooth pb-7">
        <div className="flex justify-between items-center pt-14">
          <h1 className="single-20-b">이런 뉴스레터는 어때요?</h1>
          <button className="flex gap-x-1 items-center" onClick={shuffleUnion}>
            <span className="single-14-sb text-neutralgray-900">새로고침</span>
            <RefreshIcon width="20" height="20" />
          </button>
        </div>
        <Lists datas={shuffledArray} />
      </div>
    </>
  );
};

export default UnAuthorized;
