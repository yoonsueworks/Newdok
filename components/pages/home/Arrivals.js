import Image from "next/image";
import { useRouter } from "next/router";

const Arrivals = ({ today, activeDate, dateLocaleKr }) => {
  const router = useRouter();
  const handleGotoBtnClick = () => {
    // TODO: setClickedTab 전역 상태로 조정
    // TODO: atom 불러와서 설정한 다음에 라우터 푸시
    router.push("/browseAll");
  };

  return (
    <div className="w-full h-full justify-between bg-beige-100">
      <div className="w-full h-full px-5 pt-24 pb-14 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Image
            src="/images/empty_today_300.png"
            alt="사용자 정보와 관련된 일러스트"
            width={500}
            height={300}
            priority
          />
          <div className="multiple-20-b mb-1 mt-5">
            {(activeDate === dateLocaleKr) | !activeDate
              ? "오늘 "
              : activeDate.split(" ")[1] +
                " " +
                activeDate.split(" ")[2] +
                "에 "}
            도착한 아티클이 없어요.
          </div>
          <div className="multiple-16-m mb-1">
            <span>구독 신청 이후 수신된 아티클만 볼 수 있어요.</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGotoBtnClick}
          className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-50 active:bg-purple-100 text-purple-700 bg-white selectedchip-border  transition-colors duration-300"
        >{`${today}에 발행되는 뉴스레터 보기`}</button>
      </div>
    </div>
  );
};

export default Arrivals;
