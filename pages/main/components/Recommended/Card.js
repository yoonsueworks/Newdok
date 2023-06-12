import { useContext } from "react";
import { GlobalContext } from "../../../_app";

import Image from "next/image";
import S from "./Card.module.scss";

export default function Card({ datas }) {
  const { setOpenModal, modalData } = useContext(GlobalContext);

  if (!datas) return;

  const {
    id,
    name,
    first_description,
    second_description,
    detail_description,
    publication_cycle,
    subscribe_url,
    preview_url,
    image_url,
    industries,
    interests,
  } = datas;

  return (
    <div
      onClick={() => setOpenModal(datas)}
      id={S.card}
      className="h-[300px] w-[289px] inline-block bg-white flex flex-col border border-solid border-1 border-warmgray-20 cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[155px]">
        <Image
          id={S.size}
          fill
          responsive="true"
          alt={name}
          src={image_url}
          loading="lazy"
          required
        />
      </div>
      <div className="h-fit px-6 pt-4 grid gap-y-3">
        <div className="header_1">{name}</div>
        <div className="body_1">{first_description}</div>
      </div>
    </div>
  );
}
