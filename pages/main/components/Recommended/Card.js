import Image from "next/image";
import S from "./Card.module.scss";

export default function Card() {
  return (
    <div
      id={S.card}
      className="h-[300px] w-[289px] inline-block bg-white flex flex-col border border-solid border-1 border-warmgray-20 cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[155px]">
        <Image
          id={S.gradient}
          width="300"
          height="300"
          alt=""
          src="/images/thumbnail_sample.png"
          className=""
        />
      </div>
      <div className="h-fit px-6 pt-4 grid gap-y-3">
        <div className="headline_s">타이틀</div>
        <div className="body">
          이 곳에 뉴스레터 설명을 입력합니다.이 곳에 뉴스레터 설명을
          입력합니다.이 곳에 뉴스레터
        </div>
      </div>
    </div>
  );
}
