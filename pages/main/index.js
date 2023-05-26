import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";
import Header from "../../components/Header";
import S from "./index.module.scss";

import Industry from "./components/Industry";
import Recommended from "./components/recommended";
import Modal from "./components/Modal";

const TABS = [
  { id: 1, name: "추천 뉴스레터", comp: <Recommended /> },
  { id: 2, name: "산업별 뉴스레터", comp: <Industry /> },
];

export default function Main() {
  const [clickedTab, setClickedTab] = useState(1);
  const [modalData, setModalData] = useState(false);
  const value = useContext(GlobalContext);
  const router = useRouter();

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

  useEffect(() => {
    const preventGoBack = () => {
      history.pushState(null, "", location.href);
      console.log("prevent go back!");
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);
    1;
    return () => window.removeEventListener("popstate", preventGoBack);
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
