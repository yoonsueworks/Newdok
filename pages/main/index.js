import { useContext, useEffect, useState } from "react";
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
  // const [datas, setDatas] = useState([])
  const [clickedTab, setClickedTab] = useState(1);
  const value = useContext(GlobalContext);

  const [open, setOpen] = useState(false);

  const changeTab = (id) => {
    setClickedTab(id);
  };
  const clickedId = Number.parseInt(clickedTab);

  value.openModal = open;
  value.setOpenModal = setOpen;

  // useEffect(() => {
  //   fetch("/data/newsletters.json")
  //     .then((res) => res.json())
  //     .then((res) => setInterests(res));
  // }, []);

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
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
