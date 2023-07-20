import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "pages/_app";

import Header from "shared/Header";
import NavEmptyForStyles from "shared/NavEmptyForStyles";
import S from "./index.module.scss";

import Industry from "./components/viewAll";
import Recommended from "./components/recommended";
import Modal from "./components/Modal";
import API from "../../config";

const TABS = [
  { id: 1, name: "추천 뉴스레터", comp: <Recommended /> },
  { id: 2, name: "모든 뉴스레터", comp: <Industry /> },
];

export default function Main() {
  const [clickedTab, setClickedTab] = useState(1);
  const [modalData, setModalData] = useState(false);
  const value = useContext(GlobalContext);
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

  useEffect(() => {
    const params =
      typeof window !== "undefined" ? sessionStorage.getItem("params") : null;

    fetch(`${API.recommend}${params}`)
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.intersection);
        setUnion(res.union);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-beige-100 overflow-auto">
      <Header
        tabs={TABS}
        changeTab={changeTab}
        clickedTab={clickedTab}
        clickedId={clickedId}
      />
      <div id={S.subsequent} className="w-full h-full">
        {TABS[clickedId - 1].comp}
      </div>
      {/* <div className="flex items-center justify-center h-full">
        <Modal open={open} setOpen={setOpen} datas={modalData} />
      </div> */}
      <NavEmptyForStyles />
    </div>
  );
}
