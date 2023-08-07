import { useState } from "react";

import Header from "shared/Header";

import RecommendedBrands from "components/pages/lookAround/RecommendedBrands";
import EveryBrands from "components/pages/lookAround/EveryBrands";
import Background from "shared/Background";
import Background3 from "shared/Background3";

const TABS = [
  { id: 1, name: "추천 뉴스레터", comp: <RecommendedBrands /> },
  { id: 2, name: "모든 뉴스레터", comp: <EveryBrands /> },
];

export default function Main() {
  const [clickedTab, setClickedTab] = useState(1);

  const changeTab = (id) => {
    setClickedTab(id);
  };
  const clickedId = Number.parseInt(clickedTab);

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
