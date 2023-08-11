import { useState } from "react";
import { useRecoilState } from "recoil";
import { browseOptionsAtom } from "service/atoms/atoms";

import FiltersFooter from "./FiltersFooter";
import FilterChips from "./FilterChips";
import Filters from "./Filters";
import Lists from "shared/Lists";
import API from "../../../config";

import { BottomSheet } from "react-spring-bottom-sheet";

export default function EveryBrands() {
  const [selectedIndustry, setSelectedIndustry] = useState(1);
  const [fetchedList, setFetchedList] = useState([]);
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const [sortOption, setSortOption] = useState("인기순");
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);

  // 1. 초기값은 무조건 인기순 = 서버 렌더링 가능
  // 2. 필터링 선택지 수정

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
    handleDismiss(1);
    console.log("orderOpt=", sortOption, "&", "");
  };

  return (
    <div className="w-full h-full">
      <div className="pb-8 p-5">
        <FilterChips func={handleOpen} sortOption={sortOption} />
        <Lists datas={list} />
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
          <li className="px-5 list-none flex justify-between items-center">
            <span className="single-18-m">인기순</span>
            <input
              type="radio"
              name="gender"
              value="인기순"
              onChange={(e) => setSortOption(e.target.value)}
            />
          </li>
          <li className="px-5 list-none flex justify-between items-center">
            <span className="single-18-m">최신 등록순</span>
            <input
              type="radio"
              name="gender"
              value="최신순"
              onChange={(e) => setSortOption(e.target.value)}
            />
          </li>
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
