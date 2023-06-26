import { industries } from "constants/industries";
import Refresh from "icons/refresh_off.svg";

const Tag = ({ text, type }) => {
  const sizeCSS =
    (type === "days" ? "w-full" : "w-fit") +
    " p-4 border border-warmgray-30 rounded-2xl text-center whitespace-nowrap hover:bg-purple-50";
  return <div className={sizeCSS}>{text}</div>;
};

const Filters = () => {
  const titleCSS = "single-18-b text-purple-700";
  const wrapCSS = "flex flex-wrap gap-2.5";
  const gridCSS = "grid grid-cols-4 gap-2.5";

  return (
    <div className="w-full bg-white px-5 pt-5 grid gap-y-8 mb-14">
      <div className="grid gap-y-4">
        <span className={titleCSS}>산업 카테고리</span>
        <div className={wrapCSS}>
          {industries.map((interest) => {
            return <Tag key={interest.id} text={interest.name} />;
          })}
        </div>
      </div>
      <div className="grid gap-y-4">
        <span className={titleCSS}>발행 요일</span>
        <div className={gridCSS}>
          <Tag text="모든 요일" type="days" />
          <Tag text="월요일" type="days" />
          <Tag text="화요일" type="days" />
          <Tag text="수요일" type="days" />
          <Tag text="목요일" type="days" />
          <Tag text="금요일" type="days" />
          <Tag text="토요일" type="days" />
          <Tag text="일요일" type="days" />
        </div>
      </div>
      <div className="w-full flex gap-x-4">
        <div className="w-full text-center flex gap-x-1 justify-center single-18-b items-center">
          <div>재설정</div>
          <Refresh />
        </div>
        <div className="w-full text-center p-5 single-24-b bg-purple-700 rounded-2xl text-white">
          적용하기
        </div>
      </div>
    </div>
  );
};

export default Filters;
