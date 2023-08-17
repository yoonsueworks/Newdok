import { useRecoilState } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";
import { industries } from "constants/industries";
import { days } from "constants/days";

const Filter = ({ text, type, id, func, browseOptions }) => {
  const isSelected =
    browseOptions.findIndex((element) => element === id.toString()) !== -1;

  return (
    <button
      type="button"
      id={id.toString()}
      name={type}
      className={`${type === "days" ? "w-full" : "w-fit"} ${
        isSelected
          ? "bg-purple-400 selectedchip-border text-white"
          : "bg-white input-border text-neutralgray-900"
      }
      p-4 rounded-2xl text-center whitespace-nowrap hover:bg-purple-50 hover:input-border hover:text-neutralgray-900 transition-colors duration-300 cursor-pointer `}
      onClick={func}
    >
      {text}
    </button>
  );
};

const Filters = () => {
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);

  const titleCSS = "single-18-b text-purple-700";
  const wrapCSS = "flex flex-wrap gap-2.5";
  const gridCSS = "grid grid-cols-4 gap-2.5";

  const handleOptions = (e) => {
    const { name, id } = e.target;
    if (!browseOptions[name].includes(id)) {
      setBrowseOptions({
        ...browseOptions,
        [name]: [...browseOptions[name], id],
      });
    } else {
      setBrowseOptions({
        ...browseOptions,
        [name]: [...browseOptions[name].filter((el) => el !== id)],
      });
    }
  };

  return (
    <div className="w-full bg-white px-5 pt-5 grid gap-y-8">
      <div className="grid gap-y-4">
        <span className={titleCSS}>산업 카테고리</span>
        <div className={wrapCSS}>
          {industries.map((industry) => {
            return (
              <Filter
                key={industry.id}
                text={industry.name}
                id={industry.id}
                type="industries"
                name="industries"
                func={handleOptions}
                browseOptions={browseOptions.industries}
              />
            );
          })}
        </div>
      </div>
      <div className="grid gap-y-4">
        <span className={titleCSS}>발행 요일</span>
        <div className={gridCSS}>
          {days.map(({ id, name }) => {
            return (
              <Filter
                key={id}
                id={id}
                text={name}
                type="days"
                name="days"
                func={handleOptions}
                browseOptions={browseOptions.days}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
