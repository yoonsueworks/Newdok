import React, { createContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import "styles/globals.css";

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
  // console.log(router.pathname !== "/");

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
        <Component {...pageProps} />
        {(router.pathname.includes("home") ||
          router.pathname === "/userPage" ||
          router.pathname === "/lookaround") && <Nav />}
      </GlobalContext.Provider>
    </Layout>
  );
}

export default MyApp;
