import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import { useRouter } from "next/router";

import Image from "next/image";
import S from "./Card.module.scss";
import Tags from "../../shared/Tags";

export default function Card({ datas }) {
  const { setOpenModal, modalData } = useContext(GlobalContext);
  const router = useRouter();

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
      onClick={() => router.push(`/brandHome`)}
      // onClick={() => router.push(`pages/brandHome/[${id}]`)}
      // onClick={() => setOpenModal(datas)}
      id={S.card}
      className="h-[307px] w-[320px] inline-block bg-white flex flex-col contentbox-border cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[150px]">
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
      <div className="h-fit p-5 grid gap-y-3">
        <div className="single-18-sb">{name}</div>
        <div className="multiple-14-m">{first_description}</div>
        <Tags tags={interests} />
      </div>
    </div>
  );
}
