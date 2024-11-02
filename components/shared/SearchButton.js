import { useRouter } from "next/router";
import SearchIcon from "icons/ver3.0/Line Search.svg";

const SearchButton = () => {
  const router = useRouter();
  const clickSearchBtn = () => {
    router.push("/search");
  };

  return (
    <button
      onClick={clickSearchBtn}
      className="w-fit h-fit"
      id="검색"
      aria-label="검색"
    >
      <SearchIcon
        width="20"
        height="20"
        color="#333333"
        className="cursor-pointer"
      />
    </button>
  );
};

export default SearchButton;
