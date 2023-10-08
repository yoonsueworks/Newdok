import React, { createContext, useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

import ToastPopUp from "shared/ToastPopUp";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import GNB from "shared/GNB";
import Layout from "./Layout";
import LocalStorage from "public/utils/LocalStorage";

import "styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [hydrated, setHydrated] = React.useState(false);

  const queryClient = new QueryClient();
  const router = useRouter();

  const token = LocalStorage.getItem("NDtoken");

  const value = {
    token: token,
  };

  //added :하이드레이션 오류 방지
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <GlobalContext.Provider value={value}>
            <HeadComp />
            {(router.pathname.includes("home") ||
              router.pathname === "/browseAll") && <GNB />}

            <Component {...pageProps} />

            {(router.pathname.includes("home") ||
              router.pathname === "/userPage" ||
              router.pathname === "/browseAll") && <Nav />}
            {/* "articleRead", "brandHome"은 각각 [id].js에서 관리 */}
          </GlobalContext.Provider>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
