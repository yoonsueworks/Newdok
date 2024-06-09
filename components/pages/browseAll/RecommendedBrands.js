import { useEffect, useState, useMemo } from "react";

import NotRecommended from "components/pages/browseAll/NotRecommended";
import Unauthorized from "components/pages/browseAll/Unauthorized";
import Authorized from "components/pages/browseAll/Authorized";
import Loading from "shared/Loading";

import LocalStorage from "public/utils/LocalStorage";

const RecommendedLetters = ({ statusCode, data, isLoading }) => {
  const [shuffledArray, setShuffledArray] = useState(null);
  const [intersection, setIntersection] = useState([]);
  const intersectionArr = useMemo(() => {
    return intersection;
  }, [intersection]);
  const [union, setUnion] = useState([]);
  const unionArr = useMemo(() => {
    return union;
  }, [union]);

  const token = LocalStorage.getItem("NDtoken");

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
    if (data) {
      setUnion(data.union);
      setIntersection(data.intersection);
    }
  }, [data]);

  useEffect(() => {
    shuffleUnion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [union]);

  return (
    <div className="w-full h-full">
      {!token ? (
        <Unauthorized />
      ) : isLoading ? (
        <Loading />
      ) : statusCode === 400 ? (
        <NotRecommended />
      ) : (
        <Authorized
          shuffledArray={shuffledArray}
          shuffleUnion={shuffleUnion}
          intersectionArr={intersectionArr}
        />
      )}
    </div>
  );
};
export default RecommendedLetters;
