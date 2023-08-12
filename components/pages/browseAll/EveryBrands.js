import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";
import { browseOptionsQuerySelector } from "service/atoms/selectors";
import { useBrowseAll } from "service/hooks/newsletters";

import FiltersFooter from "./FiltersFooter";
import FilterChips from "./FilterChips";
import Filters from "./Filters";
import Lists from "shared/Lists";

import { BottomSheet } from "react-spring-bottom-sheet";

export default function EveryBrands() {
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [sortOption, setSortOption] = useState("인기순");
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);
  const browseOptionsString = useRecoilValue(browseOptionsQuerySelector);

  const browseAllRequest = useBrowseAll(browseOptionsString);
  console.log(browseAllRequest.data);

  const handleOpen = (id) => {
    if (id === 1) {
      setOpenSort(true);
    } else {
      setOpen(true);
    }
  };
  const handleDismiss = (id) => {
    if (id === 1) {
      setOpenSort(false);
    } else {
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrowseOptions({ ...browseOptions, sortOption: sortOption });
    handleDismiss(1);
  };

  return (
    <div className="w-full h-full">
      <div className="pb-8 p-5">
        <FilterChips func={handleOpen} sortOption={sortOption} />
        {/* <Lists datas={list} /> */}
      </div>
      <BottomSheet open={openSort} onDismiss={() => handleDismiss(1)}>
        <form className="grid gap-y-8 pb-14" onSubmit={handleSubmit}>
          <div className="w-full h-fit flex justify-between items-center p-2.5">
            <div className="w-11 h-11"></div>
            <div className="single-20-b">정렬</div>
            <input
              type="submit"
              className="w-11 h-11"
              value="X"
              onClick={handleSubmit}
            />
          </div>
          {["인기순", "최신 등록순"].map((el, id) => {
            return (
              <li
                key={id}
                className="px-5 list-none flex justify-between items-center"
              >
                <span className="single-18-m">{el}</span>
                <input
                  type="radio"
                  name="order"
                  value={el}
                  onChange={(e) => setSortOption(e.target.value)}
                />
              </li>
            );
          })}
        </form>
      </BottomSheet>
      <BottomSheet
        open={open}
        onDismiss={() => handleDismiss(2)}
        snapPoints={({ maxHeight }) => [0.8 * maxHeight]}
        footer={<FiltersFooter onApply={() => handleDismiss(2)} />}
      >
        <Filters />
      </BottomSheet>
    </div>
  );
}
