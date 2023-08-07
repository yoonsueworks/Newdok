import { industries } from "constants/industries";
import { days } from "constants/days";

const Tag = ({ text, type }) => {
  const sizeCSS =
    (type === "days" ? "w-full" : "w-fit") +
    " p-4 border border-warmgray-30 rounded-2xl text-center whitespace-nowrap hover:bg-purple-50 transition-colors duration-300";
  return <div className={sizeCSS}>{text}</div>;
};

const Filters = () => {
  const titleCSS = "single-18-b text-purple-700";
  const wrapCSS = "flex flex-wrap gap-2.5";
  const gridCSS = "grid grid-cols-4 gap-2.5";

  return (
    <div className="w-full bg-white px-5 pt-5 grid gap-y-8">
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
          {days.map(({ id, name }) => {
            return <Tag key={id} id={id} text={name} type="days" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
