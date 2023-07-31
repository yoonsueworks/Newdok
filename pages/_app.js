import React, { createContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import GNB from "shared/GNB";
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

  const queryClient = new QueryClient();
  const router = useRouter();

  const value = {
    intersection: intersectionArr,
    union: unionArr,
    setIntersection: setIntersection,
    setUnion: setUnion,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalContext.Provider value={value}>
          <HeadComp />
          {(router.pathname.includes("home") ||
            router.pathname === "/lookAround") && <GNB />}
          <Component {...pageProps} />
          {(router.pathname.includes("home") ||
            router.pathname === "/userPage" ||
            router.pathname === "/lookAround") && <Nav />}
        </GlobalContext.Provider>
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
