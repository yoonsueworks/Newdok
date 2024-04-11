import { useRouter } from "next/router";

import SearchBar from "components/pages/search/SearchBar";
import CloseIcon from "icons/close_off.svg";

const Search = () => {
  const router = useRouter();

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
          <div>업데이트 내역 받아오기</div>
        </div>
        <ol className="grid grid-rows-3 grid-flow-col gap-4">
          <li className="flex gap-x-2">
            <span>1</span>
            <span>뉴닉</span>
          </li>
          <li className="flex gap-x-2">
            <span>2</span>
            <span>데일리바이트</span>
          </li>
          <li className="flex gap-x-2">
            <span>3</span>
            <span>트렌드</span>
          </li>
          <li className="flex gap-x-2">
            <span>4</span>
            <span>콘텐츠</span>
          </li>
          <li className="flex gap-x-2">
            <span>5</span>
            <span>재테크</span>
          </li>
          <li className="flex gap-x-2">
            <span>6</span>
            <span>추후 매핑 예정</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Search;

// TODO: 제출, 상태값 보존, 스타일링 일괄
