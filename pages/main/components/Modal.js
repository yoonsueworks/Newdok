import React from "react";
import Image from "next/image";

import S from "./modal.module.scss";
import Button from "../../../components/Button";

const Modal = ({ open, setOpen, datas }) => {
  const {
    id,
    name,
    first_description,
    second_description,
    detail_description,
    publication_cycle,
    subscribe_url,
    preview_url,
    industries,
    image_url,
    interests,
  } = datas;
  return (
    <div className={` ${S.overlay} ${S.animated} ${open ? S.show : ""}`}>
      <div className={S.modal}>
        <div id={S.gradient} className="w-full h-[155px]">
          <Image width="300" height="300" alt={name} priority src={image_url} />
        </div>
        <div className="grid gap-y-9 p-6">
          <div className="grid gap-y-6">
            <div className="h-[28px] flex justify-between items-center">
              <div className="headline text-warmgray-100">{name}</div>
              <div className="flex">
                <div>icon</div>
                <span>{publication_cycle}</span>
              </div>
            </div>
            <div className="w-full h-full body text-warmgray-100 break-words">
              {detail_description}
            </div>
          </div>
          <div className="grid gap-y-2">
            <Button
              func={() => window.open(preview_url, "_blank")}
              mode="ghost"
              state={true}
              size="med"
              text="뉴스레터 미리보기"
            />
            <Button
              func={() => window.open(subscribe_url, "_blank")}
              mode="enabled"
              state={true}
              size="med"
              text="구독하기"
            />
          </div>
        </div>
        <svg
          onClick={() => setOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      </div>
    </div>
  );
};

export default Modal;
