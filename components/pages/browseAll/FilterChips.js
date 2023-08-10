import { useState } from "react";

import FilterChip from "components/pages/browseAll/FilterChip";
import FilterOffIcon from "icons/filter_off.svg";
import FilterOnIcon from "icons/filter_on.svg";
import AlignIcon from "icons/align_off.svg";
import Refresh from "icons/refresh_off.svg";

const FilterChips = ({ func }) => {
  const [activatedChip, setActivatedChip] = useState([]);
  const [activated, setActivated] = useState(false);
  const [hoverChip, setHoverChip] = useState(null);

  const filterHandler = (id) => {
    setActivated((prev) => !prev);

    if (!activatedChip.includes(id)) {
      setActivatedChip([...activatedChip, id]);
    } else {
      const updatedChips = activatedChip.filter((chipId) => chipId !== id);
      setActivatedChip(updatedChips);
    }
  };

  const filterHandlerHover = (id) => {
    if (hoverChip !== id) {
      setHoverChip(id);
    } else {
      setHoverChip(null);
    }
  };

  return (
    <div className="flex justify-between items-center pt-8 pb-4">
      <div className="flex gap-x-1">
        {FILTERS.map(({ id, text }) => {
          return (
            <FilterChip
              text={text}
              key={id}
              state={!activatedChip.includes(id)}
              func={() => filterHandler(id)}
              hover={() => filterHandlerHover(id)}
              open={func}
            >
              {id === 1 ? (
                <AlignIcon
                  width="16"
                  height="16"
                  fill={
                    !activatedChip.includes(id)
                      ? "#171414"
                      : hoverChip === id
                      ? "#171414"
                      : "white"
                  }
                />
              ) : (
                <FilterOffIcon
                  width="16"
                  height="16"
                  fill={
                    !activatedChip.includes(id)
                      ? "#171414"
                      : hoverChip === id
                      ? "#171414"
                      : "white"
                  }
                />
              )}
            </FilterChip>
          );
        })}
      </div>
      <div className="flex gap-x-1 items-center single-14-sb cursor-pointer">
        <span>초기화</span>
        <Refresh width="20" height="20" />
      </div>
    </div>
  );
};

export default FilterChips;

const FILTERS = [
  {
    id: 1,
    text: "인기순",
  },
  {
    id: 2,
    text: "모든 산업",
  },
  {
    id: 3,
    text: "모든 요일",
  },
];
