import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import RecommendedBrands from "components/pages/browseAll/RecommendedBrands";
import EveryBrands from "components/pages/browseAll/EveryBrands";
import SearchButton from "shared/SearchButton";
import Header from "shared/Header";

import { useNewslettersRecommended } from "service/hooks/newsletters";
import { browseAllPageAtom } from "service/atoms/atoms";

export default function BrowseAll() {
  const [clickedTab, setClickedTab] = useRecoilState(browseAllPageAtom);
  const [statusCode, setStatusCode] = useState(null);
  const newsletterRecommend = useNewslettersRecommended();

  const { isFetching, data, isLoading, isError, error } = newsletterRecommend;

  const changeTab = (id) => {
    setClickedTab(id);
  };
  const clickedId = Number.parseInt(clickedTab);

  const TABS = [
    {
      id: 1,
      name: "추천 뉴스레터",
      comp: (
        <RecommendedBrands
          statusCode={statusCode}
          data={data}
          isLoading={isLoading}
        />
      ),
    },
    { id: 2, name: "모든 뉴스레터", comp: <EveryBrands /> },
  ];
  const tabComponent = TABS[clickedId - 1].comp;

  useEffect(() => {
    if (isError) {
      setStatusCode(newsletterRecommend?.error?.response?.data?.statusCode);
    }
  }, [isError, newsletterRecommend.error]);

  return (
    <div className="h-full w-full flex flex-col overflow-auto bg-neutralgray-50">
      <div className="w-full bg-white flex justify-between items-center px-5 py-4">
        <h6>둘러보기</h6>
        <SearchButton />
      </div>
      <Header
        tabs={TABS}
        changeTab={changeTab}
        clickedTab={clickedTab}
        clickedId={clickedId}
      />

      {tabComponent}
    </div>
  );
}
