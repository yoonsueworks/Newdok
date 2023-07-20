import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "pages/_app";

import NotRecommended from "components/pages/lookaround/NotRecommended";
import CardTitle from "components/pages/lookaround/CardTitle";
import ListTitle from "components/pages/lookaround/ListTitle";
import Cards from "components/pages/lookaround/Cards";
import Lists from "shared/Lists";

export default function Recommended() {
  const { union } = useContext(GlobalContext);
  const [shuffledArray, setShuffledArray] = useState(false);

  const shuffleArray = (array) => {
    if (!array) return;
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray.slice(0, 5);
  };

  const shuffleUnion = () => {
    setShuffledArray(shuffleArray(union));
  };

  useEffect(() => {
    shuffleUnion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [union]);

  return (
    <div className="bg-beige-100 h-full">
      {/* TODO: 지금은 union의 길이로 받았으나, 추후에 auth, union 동시에 검증할 수 있도록 처리하기 */}
      {!union ? (
        <NotRecommended />
      ) : shuffledArray && union.length !== 0 ? (
        <div className="bg-beige-100 grid gap-y-14 scroll-smooth">
          <div className=" grid gap-y-4">
            <CardTitle />
            <Cards />
          </div>
          <div className="grid gap-y-6">
            <ListTitle shuffle={shuffleUnion} />
            <Lists datas={shuffledArray} />
          </div>
        </div>
      ) : (
        <div className="bg-white w-full h-full"></div>
      )}
    </div>
  );
}
