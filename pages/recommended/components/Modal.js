import React from "react";
import Image from "next/image";

import S from "./modal.module.scss";
import Button from "../../../components/Button";
import Tags from "../../../components/Tags";

const Modal = ({ open, setOpen, datas }) => {
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
    interests,
  } = datas;
  return (
    <div className={` ${S.overlay} ${S.animated} ${open ? S.show : ""}`}>
      <div className={S.modal}>
        <div id={S.gradient} className="w-full h-[155px] relative">
          <div className="absolute bottom-4 left-4 z-10">
            <Tags interests={interests} />
          </div>
          <Image
            id={S.image}
            fill
            alt={name}
            priority
            src={image_url}
            sizes="100"
          />
        </div>
        <div className="grid gap-y-9 p-6">
          <div className="grid gap-y-2.5">
            <div className="h-[28px] flex justify-between items-center">
              <div className="header_1 text-warmgray-100">{name}</div>
              <div className="flex items-center">
                <div className="w-[28px] h-[28px] mb-1">
                  <div
                    className="object-cover bg-cover bg-center w-[28px] h-[28px]"
                    style={{
                      backgroundImage: `url("/images/icons/mail_time.png")`,
                    }}
                  ></div>
                </div>
                <span>{publication_cycle}</span>
              </div>
            </div>
            <div className="w-full h-full body_1 text-warmgray-100 break-words">
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
          viewBox="0 0 40 40"
          onClick={() => setOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.14285 7.14307L32.8571 32.8574"
            stroke="white"
            stroke-width="2.85714"
            stroke-linecap="round"
          />
          <path
            d="M32.8571 7.14307L7.14286 32.8574"
            stroke="white"
            stroke-width="2.85714"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Modal;
