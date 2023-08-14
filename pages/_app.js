import React, { createContext, useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import LocalStorage from "public/utils/LocalStorage";

import ToastPopUp from "shared/ToastPopUp";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import GNB from "shared/GNB";
import Layout from "./Layout";

import "styles/globals.css";

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [userDatas, setUserDatas] = useState(null);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [hydrated, setHydrated] = React.useState(false); //added

  const queryClient = new QueryClient();
  const router = useRouter();

  const setToastPopUp = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  const token = LocalStorage.getItem("NDtoken");

  useEffect(() => {
    //TODO: 온보딩 페이지에서 ? 해야할 듯?
    // const checkUserToken = async () => {
    //   await router.push(token ? "/home" : "/introduction");
    // };
    // setTimeout(() => checkUserToken(), 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    userDatas: userDatas,
    setUserDatas: setUserDatas,
    token: token,
    setToastPopUp: setToastPopUp,
    toast: toast,
    setToastMessage: setToastMessage,
    toastMessage: toastMessage,
  };

  //added :하이드레이션 오류 방지
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
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
            <div>
              {toast && <ToastPopUp toastMessage={toastMessage} />}
              {(router.pathname.includes("home") ||
                router.pathname === "/userPage" ||
                router.pathname === "/browseAll") && <Nav />}
            </div>
          </GlobalContext.Provider>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
