import React, { createContext, useState, useMemo } from "react";

import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import "styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
=======
  const [interests, setInterests] = useState([]);
  const [industry, setIndustry] = useState([]);

>>>>>>> 2190839 (Perf: change industry, interest select options fetch to getSeverSideProps)
  const [intersection, setIntersection] = useState([]);
  const intersectionArr = useMemo(() => {
    return intersection;
  }, [intersection]);
  const [union, setUnion] = useState([]);
  const unionArr = useMemo(() => {
    return union;
  }, [union]);

  const value = {
<<<<<<< HEAD
=======
    setInterests: setInterests,
    setIndustry: setIndustry,
    interests: interests,
    industry: industry,
>>>>>>> 2190839 (Perf: change industry, interest select options fetch to getSeverSideProps)
    intersection: intersectionArr,
    union: unionArr,
    setIntersection: setIntersection,
    setUnion: setUnion,
  };

  return (
    <Layout>
      <GlobalContext.Provider value={value}>
        <HeadComp />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Layout>
  );
}

export default MyApp;
