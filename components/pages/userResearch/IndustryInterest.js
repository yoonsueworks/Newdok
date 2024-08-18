import IndustryDropDown from "shared/IndustryDropDown";
import Interest from "./Interest";

const IndustryInterest = () => {
  return (
    <>
      <div className="input-01 ml-1 mb-4">종사산업</div>
      <IndustryDropDown />
      <div className="input-01 ml-1 mt-4">관심사</div>
      <div className="body-s ml-1 text-neutralgray-700 mb-4">
        정확한 추천을 위해 3개 이상 선택해 주세요.
      </div>
      <Interest />
      <div className="h-6"> </div>
    </>
  );
};

export default IndustryInterest;
