import React from "react";
import S from "./modal.module.scss";
import Button from "../../../components/Button";

const Modal = ({ open, setOpen }) => (
  <div className={` ${S.overlay} ${S.animated} ${open ? S.show : ""}`}>
    <div className={S.modal}>
      <div className="h-[150px] bg-beige-10 shrink-0">image</div>
      <div className="grid gap-y-9 p-6">
        <div className="grid gap-y-6">
          <div className="h-[28px] flex justify-between items-center">
            <div className="headline text-warmgray-100">윌로</div>
            <div className="flex">
              <div>icon</div>
              <span>배송 주기</span>
            </div>
          </div>
          <div className="w-full h-full body text-warmgray-100 keep-all">
            이 곳에 뉴스레터 상세 소개글을 입력합니다. 최대 130자까지 입력 이
            곳에 뉴스레터 상세 소개글을 입력합니다. 최대 130자까지 입력 이 곳에
            뉴스레터 상세 소개글을 입력합니다. 최대 130자까지 입력 가능합니다.
          </div>
        </div>
        <div className="grid gap-y-2">
          <Button
            func={() => console.log("clicked")}
            mode="ghost"
            state={true}
            size="med"
          />
          <Button
            func={() => console.log("clicked")}
            mode="enabled"
            state={true}
            size="med"
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

export default Modal;
