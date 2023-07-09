import React, { createContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import GNB from "shared/GNB";
import Nav from "shared/Nav";
import "styles/globals.css";
// import "components/pages/home/calendar.scss";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [intersection, setIntersection] = useState([]);
  const intersectionArr = useMemo(() => {
    return intersection;
  }, [intersection]);
  const [union, setUnion] = useState([]);
  const unionArr = useMemo(() => {
    return union;
  }, [union]);

  const router = useRouter();

  const value = {
    intersection: intersectionArr,
    union: unionArr,
    setIntersection: setIntersection,
    setUnion: setUnion,
  };

  return (
    <Layout>
      <GlobalContext.Provider value={value}>
        <HeadComp />
        {(router.pathname.includes("home") ||
          !router.pathname.includes("/myPage") ||
          router.pathname === "/lookaround") && <GNB />}
        <Component {...pageProps} />
        {(router.pathname.includes("home") ||
          router.pathname === "/myPage" ||
          router.pathname === "/lookaround") && <Nav />}
      </GlobalContext.Provider>
    </Layout>
  );
}

export default MyApp;
