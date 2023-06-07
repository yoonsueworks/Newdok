import React, { createContext, useEffect, useState, useMemo } from "react";

import Head from "next/head";
import Layout from "./Layout";
import HeadComp from "../components/HeadComp";
import "../styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [interests, setInterests] = useState([]);
<<<<<<< HEAD
  const [intersection, setIntersection] = useState([]);
  const [union, setUnion] = useState([]);
  const value = {
    interests: interests,
    intersection: intersection,
    union: union,
=======
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
>>>>>>> 3165242df132952738126f6da7173187733442a1
  };

  useEffect(() => {
    fetch("/data/Interest.json")
      .then((res) => res.json())
<<<<<<< HEAD
      .then((res) => setInterests(res));

    fetch("/data/userInfoRequest.json")
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.data.intersection);
        setUnion(res.data.union);
      });
  }, []);

<<<<<<< HEAD
  // useEffect(() => {
  //   fetch(`${API.recommend}industry=1&interest=1&interest=3`)
  //     .then((res) => res.json)
  //     .then((res) => console.log(res));
  // }, []);

=======
>>>>>>> feat/main
=======
      .then((res) => {
        setInterests(res.interests);
        setIndustry(res.industry);
      });
  }, []);

>>>>>>> 3165242df132952738126f6da7173187733442a1
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
