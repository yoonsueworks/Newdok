import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";

import FilterChip from "components/pages/browseAll/FilterChip";
import FilterOffIcon from "icons/filter_off.svg";
import AlignIcon from "icons/align_off.svg";
import Refresh from "icons/refresh_off.svg";

const FilterChips = ({ func, sortOption }) => {
  const [rotation, setRotation] = useState(0);
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);
  const resetBrowseOptions = useResetRecoilState(browseOptionsAtom);

  const clickRefresh = () => {
    setRotation(rotation + 360);
  };

  return (
    <div className="flex justify-between items-center pb-4 gap-x-4">
      <div className="flex gap-x-1 overflow-scroll">
        {FILTERS.map(({ id, text, name }) => {
          return id === 1 ? (
            <FilterChip
              text={sortOption}
              key={id}
              id={id}
              state={false}
              open={() => func(id)}
            >
              <AlignIcon width="16" height="16" fill="#171414" />
            </FilterChip>
          ) : (
            <FilterChip
              text={
                browseOptions[name].length === 0
                  ? text
                  : browseOptions[name].length !== 0
                  ? text.split(" ")[1] + " " + browseOptions[name].length
                  : text
              }
              key={id}
              id={id}
              state={browseOptions[name].length}
              open={() => func(id)}
            >
              <div>
                <FilterOffIcon
                  width="16"
                  height="16"
                  fill={browseOptions[name].length !== 0 ? "white" : "#171414"}
                />
              </div>
            </FilterChip>
          );
        })}
      </div>
      <button
        className="flex gap-x-1 items-center single-14-sb cursor-pointer shrink-0"
        onClick={() => {
          clickRefresh();
          resetBrowseOptions();
        }}
        type="button"
      >
        <span>초기화</span>
        <Refresh
          width="20"
          height="20"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          className={`transition-all duration-500`}
          onClick={clickRefresh}
        />
      </button>
    </div>
  );
};

export default FilterChips;

const FILTERS = [
  {
    id: 1,
    text: "",
    name: "",
  },
  {
    id: 2,
    text: "모든 산업",
    name: "industries",
  },
  {
    id: 3,
    text: "모든 요일",
    name: "days",
  },
];
