import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";

import Lists from "../../../components/Lists";
import ListTitle from "./Recommended/ListTitle";
import CardTitle from "./Recommended/CardTitle";
import Cards from "./Recommended/Cards";
import LoadingSplash from "../../loadingSplash";

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
  }, [union]);

  return (
    <div className="bg-beige-10 grid gap-y-14 scroll-smooth">
      {shuffledArray && union.length !== 0 ? (
        <>
          <div className=" grid gap-y-4">
            <CardTitle />
            <Cards />
          </div>
          <div className="grid gap-y-6">
            <ListTitle shuffle={shuffleUnion} />
            <Lists datas={shuffledArray} />
          </div>
        </>
      ) : (
        <div className="bg-white w-full h-full">
          <LoadingSplash />
        </div>
      )}
    </div>
  );
}
