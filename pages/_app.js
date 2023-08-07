import React, { createContext, useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LocalStorage from "public/utils/LocalStorage";

import Layout from "./Layout";
import HeadComp from "shared/HeadComp";
import Nav from "shared/Nav";
import GNB from "shared/GNB";
import ToastPopUp from "shared/ToastPopUp";
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

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const queryClient = new QueryClient();
  const router = useRouter();

  const setToastPopUp = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  const token = LocalStorage.getItem("NDtoken");

  useEffect(() => {
    const checkUserToken = async () => {
      await router.push(token ? "/home" : "/onBoarding");
    };
    setTimeout(() => checkUserToken(), 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    intersection: intersectionArr,
    union: unionArr,
    setIntersection: setIntersection,
    setUnion: setUnion,
    userDatas: userDatas,
    setUserDatas: setUserDatas,
    token: token,
    setToastPopUp: setToastPopUp,
    toast: toast,
    setToastMessage: setToastMessage,
    toastMessage: toastMessage,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalContext.Provider value={value}>
          <HeadComp />
          {(router.pathname.includes("home") ||
            router.pathname === "/browse") && <GNB />}
          <Component {...pageProps} />
          <div>
            {toast && <ToastPopUp toastMessage={toastMessage} />}
            {(router.pathname.includes("home") ||
              router.pathname === "/userPage" ||
              router.pathname === "/browse") && <Nav />}
          </div>
        </GlobalContext.Provider>
      </Layout>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
