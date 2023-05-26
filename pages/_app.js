import React, { createContext, useEffect, useState } from "react";

import Head from "next/head";
import Layout from "./Layout";
import HeadComp from "../components/HeadComp";
import "../styles/globals.css";
import API from "../config";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [interests, setInterests] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [intersection, setIntersection] = useState([]);
  const [union, setUnion] = useState([]);
  const value = {
    interests: interests,
    industry: industry,
    intersection: intersection,
    union: union,
  };

  useEffect(() => {
    fetch("/data/Interest.json")
      .then((res) => res.json())
      .then((res) => {
        setInterests(res.interests);
        setIndustry(res.industry);
      });

    fetch("/data/userInfoRequest.json")
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.data.intersection);
        setUnion(res.data.union);
      });
  }, []);
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
