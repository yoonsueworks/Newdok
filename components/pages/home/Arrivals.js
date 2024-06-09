import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { browseAllPageAtom } from "service/atoms/atoms";
import { browseOptionsAtom } from "service/atoms/atoms";

import Reload from "shared/Reload";

import { days } from "constants/days";

const Arrivals = ({ today, activeDate, dateLocaleKr }) => {
  const router = useRouter();
  const [browseOptions, setBrowseOptions] = useRecoilState(browseOptionsAtom);
  const [, setClickedTab] = useRecoilState(browseAllPageAtom);

  /* calendar에서 !오늘로 이동=false, 오늘=true */
  const isDaySelected = (activeDate === dateLocaleKr) | !activeDate;
  const selectedDay = activeDate.split(" ")[3];
  const selectedDateString =
    activeDate.split(" ")[1] + " " + activeDate.split(" ")[2] + "에 ";

  /* @요일이 옵션으로 선택된 상태로 /browseAll로 이동하기,
  백엔드 key 찾기, 탭 상태 세팅, 옵션 상태 세팅 */
  const handleGotoBtnClick = () => {
    const dayOption = days.filter((day) =>
      isDaySelected ? day.name === today : day.name === selectedDay
    )[0].id;
    setClickedTab(2);
    setBrowseOptions({
      ...browseOptions,
      days: [dayOption],
    });
    router.push("/browseAll");
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-beige-100">
      <div className="sm:w-full md:w-full xl:w-[80%] h-full px-5 pt-7 pb-14 flex flex-col justify-between items-end">
        <div className="w-full flex flex-col gap-y-10 items-end">
          <Reload />
          <div className="w-full flex flex-col items-center">
            <Image
              src="/images/empty_today_300.png"
              alt="사용자 정보와 관련된 일러스트"
              loading="lazy"
              width={500}
              height={300}
            />
            <div className="multiple-20-b mb-1 mt-5">
              {isDaySelected ? "오늘 " : selectedDateString}
              도착한 아티클이 없어요.
            </div>
            <div className="multiple-16-m mb-1">
              <span>구독 신청 이후 수신된 아티클만 볼 수 있어요.</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGotoBtnClick}
          className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-50 active:bg-purple-100 text-purple-700 bg-white selectedchip-border  transition-colors duration-300"
        >{`${
          isDaySelected ? today : selectedDay
        }에 발행되는 뉴스레터 보기`}</button>
      </div>
    </div>
  );
};

export default Arrivals;
