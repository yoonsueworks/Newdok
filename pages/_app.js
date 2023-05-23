import React, { createContext, useEffect, useState } from "react";

import Head from "next/head";
import Layout from "./Layout";
import HeadComp from "../components/HeadComp";
import "../styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [interests, setInterests] = useState([]);
  const value = { interests: interests };

  useEffect(() => {
    fetch("/data/Interest.json")
      .then((res) => res.json())
      .then((res) => setInterests(res));
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
// TODO: 사용자 선택 사항 저장
