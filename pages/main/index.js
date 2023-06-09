import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";
import Header from "../../components/Header";
import S from "./index.module.scss";

import Industry from "./components/Industry";
import Recommended from "./components/recommended";
import Modal from "./components/Modal";
import API from "../../config";

const TABS = [
  { id: 1, name: "추천 뉴스레터", comp: <Recommended /> },
  { id: 2, name: "산업별 뉴스레터", comp: <Industry /> },
];

export default function Main() {
  const [clickedTab, setClickedTab] = useState(1);
  const [modalData, setModalData] = useState(false);
  const value = useContext(GlobalContext);
  const router = useRouter();
  const { setIntersection, setUnion } = value;

  const [open, setOpen] = useState(false);

  const setOpenModal = (data) => {
    setModalData(data);
    setOpen((prev) => !prev);
  };

  const changeTab = (id) => {
    setClickedTab(id);
  };
  const clickedId = Number.parseInt(clickedTab);

  value.openModal = open;
  value.setOpenModal = setOpenModal;

  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; //Chrome에서 동작하도록; deprecated
  };

  useEffect(() => {
    const preventGoBack = () => {
      // change start
      history.pushState(null, "", location.href);
      // change end
      console.log("prevent go back!");
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);
    1;
    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  useEffect(() => {
    const params =
      typeof window !== "undefined" ? sessionStorage.getItem("params") : null;

    fetch(`${API.recommend}${params}`)
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.intersection);
        setUnion(res.union);
      });
  }, []);

  return (
    <div className="flex flex-col bg-beige-10 h-full w-full">
      <Header
        tabs={TABS}
        changeTab={changeTab}
        clickedTab={clickedTab}
        clickedId={clickedId}
      />
      <div id={S.subsequent} className="w-full">
        {TABS[clickedId - 1].comp}
      </div>
      <div className="flex items-center justify-center h-full">
        <Modal open={open} setOpen={setOpen} datas={modalData} />
      </div>
    </div>
  );
}
