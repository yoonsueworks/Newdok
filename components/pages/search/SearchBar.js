import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { authSelector } from "service/atoms/selectors";

import SearchIcon from "icons/search_off.svg";
import CloseIcon from "icons/close_off.svg";

import { useForm } from "react-hook-form";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const isAuthenticated = useRecoilValue(authSelector);

  const { register, handleSubmit, watch, setFocus } = useForm({});
  const query = watch("query");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
<<<<<<< HEAD
=======
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
>>>>>>> 18c6fe627afc0fb84919cd0497558e663e693883
  };

  const handleDelete = () => {
    setSearchKeyword("");
  };

  const onSubmit = () => {
    router.push({
      pathname: "/search/authSearchResult",

      // pathname: isAuthenticated
      //   ? "/search/authSearchResult"
      //   : "/search/unAuthSearchResult",
      // TODO: pathname 기획 방향에 따라 추후 수정가능성 있음
      query: { query },
    });
  };

  useEffect(() => {
    setFocus("query");
  }, [setFocus]);

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-between"
      >
        <div className="grid gap-y-7">
          <div className="grid gap-y-2">
            <div className="flex rounded-lg p-4 single-16-m focus-within:inputFocused-border input-border gap-x-4 justify-between">
              <div className="flex w-full">
                <SearchIcon width="24" height="24" color="black" />
                <input
                  {...register("query")}
                  onChange={handleChange}
                  placeholder="뉴스레터 브랜드명, 키워드 검색"
                  value={searchKeyword}
                  className="w-full"
                />
              </div>
              {searchKeyword !== "" && (
                <button
                  onClick={handleDelete}
                  type="button"
                  className="bg-neutralgray-100 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <CloseIcon width="18" height="18" color="white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  a;
};

export default SearchBar;
