import React, { createContext, useEffect, useState, useMemo } from "react";

import Layout from "./Layout";
import HeadComp from "../components/HeadComp";
import "../styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [interests, setInterests] = useState([]);
  const [industry, setIndustry] = useState([]);
  const industries = useMemo(() => {
    return industry;
  }, [industry]);
  const interest = useMemo(() => {
    return interests;
  }, [interests]);
  const [intersection, setIntersection] = useState([]);
  const intersectionArr = useMemo(() => {
    return intersection;
  }, [intersection]);
  const [union, setUnion] = useState([]);
  const unionArr = useMemo(() => {
    return union;
  }, [union]);

  const value = {
    interests: interest,
    industry: industries,
    intersection: intersectionArr,
    union: unionArr,
    setIntersection: setIntersection,
    setUnion: setUnion,
  };

  useEffect(() => {
    fetch("/data/Interest.json")
      .then((res) => res.json())
      .then((res) => {
        setInterests(res.interests);
        setIndustry(res.industry);
      });
    // .then((res) => setInterests(res));

    fetch("/data/userInfoRequest.json")
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.data.intersection);
        setUnion(res.data.union);
      });
  }, []);

  // useEffect(() => {
  // fetch("/data/Interest.json")
  //   fetch(`${API.recommend}industry=1&interest=1&interest=3`)
  //     .then((res) => res.json)
  //     .then((res) => console.log(res));
  // }, []);

  //     .then((res) => {
  //       setInterests(res.interests);
  //       setIndustry(res.industry);
  //     });
  // }, []);

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
