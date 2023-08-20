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
        isSelected || id === browseOptions[0]
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

  const handleOptionsClick = (e) => {
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
      {FilterTypes.map(({ id, constants, type, title }) => {
        return (
          <div className="grid gap-y-4" key={id}>
            <span className={titleCSS}>{title}</span>
            <div className={type === "industries" ? wrapCSS : gridCSS}>
              {constants.map(({ id, name }) => {
                return (
                  <Filter
                    key={id}
                    text={name}
                    id={id}
                    type={type}
                    name={type}
                    func={handleOptionsClick}
                    browseOptions={
                      type === "industries"
                        ? browseOptions.industries
                        : browseOptions.days
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;

const FilterTypes = [
  {
    id: 1,
    name: "industries",
    constants: industries,
    type: "industries",
    title: "산업 카테고리",
  },
  { id: 2, name: "days", constants: days, type: "days", title: "발행 요일" },
];
