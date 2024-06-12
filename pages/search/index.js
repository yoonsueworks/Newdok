import { useRouter } from "next/router";

import SearchBar from "components/pages/search/SearchBar";
import CloseIcon from "icons/ver1.0/close_off.svg";

const Search = () => {
  const router = useRouter();
  const data = {
    updatedAt: "2024-10-31",
    keywordList: [
      { id: 1, keyword: "뉴독" },
      { id: 2, keyword: "데일리바이트" },
      { id: 3, keyword: "트렌드" },
      { id: 4, keyword: "콘텐츠" },
      { id: 5, keyword: "재테크" },
      { id: 6, keyword: "IT" },
    ],
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full flex items-center gap-x-4">
        <div className="w-10 h-10 bg-beige-100"></div>
        <SearchBar />
        <button className="w-10 h-10" onClick={() => router.back()}>
          <CloseIcon width="24" height="24" />
        </button>
      </div>
      <div className="w-full xl:w-[768px]">
        <div className="flex justify-between pb-4 border-b my-4">
          <div>인기 검색어</div>
          <div>{data.updatedAt} 업데이트</div>
        </div>
        <ol className="grid grid-rows-3 grid-flow-col gap-4">
          {data.keywordList.map(({ id, keyword }) => (
            <li key={id} className="flex gap-x-2">
              <span>{id}</span>
              <span>{keyword}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;

// TODO: 제출, 상태값 보존, 스타일링 일괄
