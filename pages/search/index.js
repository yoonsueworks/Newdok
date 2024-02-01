import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

const Search = () => {
  const [component, setComponent] = useState("searchQuery");
  const { register, handleSubmit, watch, setFocus } = useForm({});
  const query = watch("query");
  const router = useRouter();

  const onSubmit = () => {
    router.push({
      pathname: "/searchResult",
      query: { query },
    });
  };

  const components = {
    searchQuery: (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-between"
      >
        <div className="grid gap-y-7">
          <div className="grid gap-y-2">
            <input
              {...register("query", {
                required: {
                  value: true,
                  message: "뉴스레터 브랜드명, 키워드 검색",
                },
              })}
              maxLength="12"
              placeholder="뉴스레터 브랜드명, 키워드 검색"
              className="rounded-lg p-4 single-16-m focus:inputFocused-border input-border"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
                }
              }}
            />
          </div>
        </div>
      </form>
    ),
  };

  useEffect(() => {
    setFocus("query");
  }, [setFocus]);

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <div className="w-10 h-10 bg-beige-100"></div>

        <div>{components[component]}</div>
      </div>
      <div>
        <div>test items</div>
        <div>popular items</div>
      </div>
    </div>
  );
};

export default Search;

// TODO: 제출, 상태값 보존, 스타일링 일괄
