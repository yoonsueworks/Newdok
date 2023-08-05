import React, { createContext, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import GNB from "shared/GNB";
import "styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [intersection, setIntersection] = useState([]);
  const [userDatas, setUserDatas] = useState(null);
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
    userDatas: userDatas,
    setUserDatas: setUserDatas,
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
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
