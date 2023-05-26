import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";

import Lists from "../../../components/Lists";
import ListTitle from "./Recommended/ListTitle";
import CardTitle from "./Recommended/CardTitle";
import Cards from "./Recommended/Cards";

export default function Recommended() {
  const { union } = useContext(GlobalContext);
  const [shuffledArray, setShuffledArray] = useState(union);

  const shuffleArray = (array) => {
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
    shuffleUnion(union);
  }, []);

  return (
    <div className="bg-beige-10 grid gap-y-14 scroll-smooth">
      <div className=" grid gap-y-4">
        <CardTitle />
        <Cards />
      </div>
      <div className="grid gap-y-6">
        <ListTitle shuffle={shuffleUnion} />
        <Lists datas={shuffledArray} />
      </div>
    </div>
  );
}
