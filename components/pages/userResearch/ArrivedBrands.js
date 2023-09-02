import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app";
import { useGetUserResearch } from "service/hooks/user";

const ArrivedBrands = () => {
  const { research } = useContext(GlobalContext);
  const { data, error, isLoading } = useGetUserResearch(research);
  console.log(data);

  return (
    <ul
      className="grid gap-y-2.5 w-full overflow-auto scroll-smooth"
      id="onboardInterestsBox"
    >
      {data?.map((brand, id) => {
        return <ArrivedBrand key={id} />;
      })}
    </ul>
  );
};

export default ArrivedBrands;

const ArrivedBrand = () => {
  return (
    <li className="grid w-full">
      <div className="bg-beige-50 input-border p-5 flex justify-between h-fit rounded-t-lg">
        <div className="flex gap-x-4 items-center">
          <div>이미지</div>
          <div className="grid gap-y-2">
            <div className="single-18-sb text-neutralgray-900">이름</div>
            <div className="single-12-m text-neutralgray-900">발행주기</div>
          </div>
        </div>
        <button
          type="button"
          className="p-3.5 h-fit rounded-[10px] bg-purple-700 hover:bg-purple-500 active:bg-purple-800 single-18-b text-white"
        >
          구독하기
        </button>
      </div>
      <div className="w-full grid bg-white border-b border-l border-r border-neutralgray-200 inset-x-0 p-5 gap-y-3 rounded-b-lg">
        <p className="single-14-m text-neutralgray-900">
          스타트업, IT 업계의 인사이트를 얻고 싶다면
        </p>
        <ul className="flex gap-x-2">
          <li className="rounded-lg bg-beige-100 text-purple-700 single-12-m p-2 h-fit">
            태그
          </li>
        </ul>
      </div>
    </li>
  );
};
