import { useState, useEffect } from "react";
import Header from "shared/Header";

import RecommendedBrands from "components/pages/browseAll/RecommendedBrands";
import EveryBrands from "components/pages/browseAll/EveryBrands";
import Background3 from "shared/Background3";
import { useNewslettersRecommended } from "../../service/hooks/newsletters";

export default function BrowseAll() {
  const [clickedTab, setClickedTab] = useState(1);
  const [statusCode, setStatusCode] = useState(null);
  const newsletterRecommend = useNewslettersRecommended();

  const { isFetching, data, isLoading } = newsletterRecommend;

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

  useEffect(() => {
    if (!isFetching) {
      setStatusCode(newsletterRecommend?.error?.response?.data?.statusCode);
    }
  }, [isFetching, newsletterRecommend.error]);

  return (
    <div className="h-full w-full flex flex-col overflow-auto">
      <Header
        tabs={TABS}
        changeTab={changeTab}
        clickedTab={clickedTab}
        clickedId={clickedId}
      />

      <Background3>{TABS[clickedId - 1].comp}</Background3>
    </div>
  );
}
