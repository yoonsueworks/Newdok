import { useContext } from "react";
import { GlobalContext } from "../../../_app";

import Image from "next/image";
import S from "./Card.module.scss";

export default function Card({ datas }) {
  const { setOpenModal } = useContext(GlobalContext);
  const {
    id,
    name,
    image_url,
    industries,
    interests,
    preview_url,
    second_description,
    first_description,
    publication_cycle,
    detail_description,
  } = datas;

  return (
    <div
      onClick={() => setOpenModal(true)}
      id={S.card}
      className="h-[300px] w-[289px] inline-block bg-white flex flex-col border border-solid border-1 border-warmgray-20 cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[155px]">
        <Image
          id={S.gradient}
          width="300"
          height="300"
          alt={name}
          priority
          src={image_url}
        />
      </div>
      <div className="h-fit px-6 pt-4 grid gap-y-3">
        <div className="headline_s">{name}</div>
        <div className="body">{first_description}</div>
      </div>
    </div>
  );
}
