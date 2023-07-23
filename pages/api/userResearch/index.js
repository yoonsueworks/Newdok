import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import API from "../../../config";

// export const FetchResearchResult = (params) => {
//   // const { setIntersection, setUnion, setPage, page } =
//   //   useContext(GlobalContext);
//   page > 2 &&
//     fetch(`${API.recommend}${params}`)
//       .then((res) => res.json())
//       .then((res) => {
//         return data;
//         // setIntersection(res.intersection);
//         // setUnion(res.union);
//       });
//   //   .finally(() => {
//   //     setPage((prev) => prev + 1);
//   //   });
// };

export const FetchResearchResult = (params, interests) => {
  // const { setIntersection, setUnion, setPage } = useContext(GlobalContext);

  !params?.includes("undefined") &&
    interests?.length > 0 &&
    fetch(`${API.recommend}${params}`)
      .then((res) => res.json())
      .then((res) => res);
};
