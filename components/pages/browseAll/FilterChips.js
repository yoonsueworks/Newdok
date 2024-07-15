import { useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";

import FilterChip from "components/pages/browseAll/FilterChip";
import FilterOffIcon from "icons/ver3.0/Line Down2.svg";
import AlignIcon from "icons/ver3.0/Line Arrow Transfer2.svg";
import Refresh from "icons/ver3.0/Line Reload.svg";

const FilterChips = ({ func, sortOption }) => {
  const [rotation, setRotation] = useState(0);
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);
  const resetBrowseOptions = useResetRecoilState(browseOptionsAtom);

  const clickRefresh = () => {
    setRotation(rotation + 360);
  };

  return (
    <div className="flex justify-between items-center pb-4 gap-x-4">
      <div className="flex gap-x-1.5 overflow-scroll">
        {FILTERS.map(({ id, text, name }) => {
          return id === 1 ? (
            <FilterChip
              text={sortOption}
              key={id}
              id={id}
              state={false}
              open={() => func(id)}
            >
              <AlignIcon width="12" height="12" stroke="#555555" />
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
              <FilterOffIcon
                width="16"
                height="16"
                stroke={
                  browseOptions[name].length !== 0 ? "#2866D3" : "#555555"
                }
              />
            </FilterChip>
          );
        })}
      </div>
      <button
        className="flex gap-x-1 label-l cursor-pointer shrink-0 text-blue-600"
        onClick={() => {
          clickRefresh();
          resetBrowseOptions();
        }}
        type="button"
      >
        <Refresh
          width="14"
          height="14"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          stroke="#2866D3"
          className={`transition-all duration-500`}
          onClick={clickRefresh}
        />
        <span>초기화</span>
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
