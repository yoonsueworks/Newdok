import Image from "next/image";

const Arrivals = ({ today, activeDate, dateLocaleKr }) => {
  const wrapperCSS =
    "w-full h-full px-5 pt-24 pb-14 flex flex-col justify-between";
  const contentsCSS = "flex flex-col items-center";

  const text1 = "multiple-20-b mb-1 mt-5";
  const text2 = "multiple-16-m mb-1";

  return (
    <div className={wrapperCSS}>
      <div className={contentsCSS}>
        <Image
          src="/images/empty_today_300.png"
          alt="사용자 정보와 관련된 일러스트"
          width={500}
          height={300}
          loading="lazy"
        />
        <div className={text1}>
          {(activeDate === dateLocaleKr) | !activeDate
            ? "오늘 "
            : activeDate.split(" ")[1] + " " + activeDate.split(" ")[2] + "에 "}
          도착한 아티클이 없어요.
        </div>
        <div className={text2}>
          <span>구독 신청 이후 수신된 아티클만 볼 수 있어요.</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-50 active:bg-purple-100 text-purple-700 bg-white selectedchip-border  transition-colors duration-300"
      >{`${today}에 발행되는 뉴스레터 보기`}</button>
    </div>
  );
};

export default Arrivals;
