import React, { createContext, useEffect, useState } from "react";

import Head from "next/head";
import Layout from "./Layout";
import HeadComp from "../components/HeadComp";
import "../styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [interests, setInterests] = useState([]);
  const [industry, setIndustry] = useState([]);
  const value = { interests: interests, industry: industry };

  useEffect(() => {
    fetch("/data/Interest.json")
      .then((res) => res.json())
      .then((res) => {
        const { interests, industry } = res;
        setInterests(interests);
        setIndustry(industry);
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
