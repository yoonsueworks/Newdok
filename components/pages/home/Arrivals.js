import { useContext } from "react";
import { CalendarContext } from "context/CalendarContext";

import { useRouter } from "next/router";
import Image from "next/image";

import Button from "shared/Button";
import NavEmptyForStyles from "shared/NavEmptyForStyles";

const Arrivals = () => {
  const router = useRouter();
  const { dateLocaleKr } = useContext(CalendarContext);

  const currentDayArray = dateLocaleKr.split(" ");
  const currentDay = currentDayArray[currentDayArray.length - 1];
  const text2 = `${currentDay}에 발행되는 뉴스레터 보기`;

  // const wrapperCSS = "w-full h-full flex flex-col justify-between pt-24 pb-14";
  const wrapperCSS = "w-full h-full flex flex-col justify-between pt-24 pb-14";
  const contentsCSS = "flex flex-col items-center";
  const imageCSS = "w-full h-[200px] mb-5";
  const text1CSS = "multiple-20-b mb-1";
  const text2CSS = "multiple-16-m mb-1";

  return (
    <>
      {/* <div className="bg-black w-5 h-5"></div>
      <div className="bg-black w-5 h-5"></div> */}
      <div className={wrapperCSS}>
        <div className={contentsCSS}>
          <div className={imageCSS}>
            <Image
              src="/images/empty_today_300.png"
              alt="빈 우체통 일러스트"
              width="390"
              height="200"
            />
          </div>
          <div className={text1CSS}>오늘 도착한 아티클이 없어요.</div>
          <div className={text2CSS}>
            <span>구독 신청 이후 수신된 아티클만 볼 수 있어요.</span>
          </div>
        </div>
        <Button
          text={text2}
          mode="ghost"
          state="true"
          func={() => router.push("/")}
        />
      </div>
      {/* <NavEmptyForStyles /> */}
    </>
  );
};

export default Arrivals;
