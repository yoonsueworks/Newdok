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
          ? "text-blue-600 selectedchip-border hover:bg-blue-50 hover:selectedchip-border"
          : "bg-white unselectedchip-border text-neutralgray-700 hover:bg-blue-50 hover:text-neutralgray-700 hover:unselectedchip-border"
      }
      px-4 py-2 rounded-full text-center whitespace-nowrap transition-colors duration-300 cursor-pointer `}
      onClick={func}
    >
      {text}
    </button>
  );
};

const Filters = ({ handleDismiss }) => {
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);

  const handleOptionsClick = (e) => {
    const { name, id } = e.target;
    if (!name) {
      handleDismiss();
      return;
    }
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
    <div className="w-full px-5 pt-5 grid gap-y-8 mt-11">
      {FilterTypes.map(({ id, constants, type, title }) => {
        return (
          <div className="grid gap-y-4" key={id}>
            <span className="input-02 text-neutralgray-700">{title}</span>
            <div
              className={
                type === "industries"
                  ? "flex flex-wrap gap-2.5"
                  : "grid grid-cols-4 gap-2.5"
              }
            >
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
