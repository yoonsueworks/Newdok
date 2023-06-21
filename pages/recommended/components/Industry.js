import { useEffect, useState } from "react";
import Lists from "shared/Lists";
import API from "../../../config";
import { industries } from "constants/industries";

export default function Industry() {
  const [selectedIndustry, setSelectedIndustry] = useState(1);
  const [list, setList] = useState([]);
  const [fetchedList, setFetchedList] = useState([]);

  const sharedCSS =
    "w-max h-full flex inline-block text-center self-center items-center px-4 rounded-[10px] header_3";

  const clickedCSS = `bg-purple-700 text-white break-keep`;
  const unClickedCSS =
    "bg-white text-purple-700 border border-1 border-solid border-purple-700 overscroll-auto";

  const preventRequest = (id, arr) => {
    fetchLists && setFetchedList((prevList) => ({ ...prevList, [id]: arr }));
  };

  const checkFetchedList = (id) => {
    return Object.keys(fetchedList).includes(String(id));
  };

  const setExistingList = (id) => {
    if (checkFetchedList(id)) {
      const list = fetchedList[id];
      setList(list);
    }
  };

  const fetchLists = (id) => {
    setSelectedIndustry(id);
    if (!checkFetchedList(id)) {
      fetch(`${API.industry}${id}`)
        .then((res) => res.json())
        .then((res) => {
          setList(res);
          preventRequest(id, res);
        });
    } else {
      setExistingList(id);
    }
  };

  useEffect(() => {
    fetchLists(1);
  }, []);

  return (
    <div className="h-full bg-beige-100 grid gap-y-5">
      <ul className="pl-5 h-[44px] flex gap-x-2 overflow-auto">
        <li
          id="1"
          className={`${sharedCSS} ${
            selectedIndustry === 1 ? clickedCSS : unClickedCSS
          }`}
          onClick={() => fetchLists("1")}
        >
          <div className="w-max overflow-wrap-break-word">모든 산업</div>
        </li>
        {industries.map((industry) => {
          return (
            <li
              id={industry.id}
              key={industry.id}
              className={`${sharedCSS} ${
                selectedIndustry === industry.id ? clickedCSS : unClickedCSS
              }`}
              onClick={() => fetchLists(industry.id)}
            >
              <div className="w-max overflow-wrap-break-word">
                {industry.name}
              </div>
            </li>
          );
        })}
      </ul>
      <Lists datas={list} />
    </div>
  );
}
