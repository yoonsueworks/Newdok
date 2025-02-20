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
    <div className="flex flex-col w-full h-full items-center justify-between bg-neutralgray-50">
      <div className="sm:w-full md:w-full xl:w-[70%] h-full xl:px-5 sm:px-5 xs:px-5 md:pr-8 pt-7 pb-14 flex flex-col items-center">
        <div className="w-full flex flex-col gap-y-12 items-end">
          <Reload />
          <div className="w-full flex flex-col items-center">
            <Image
              src="/images/empty_mailbox_300.png"
              alt="사용자 정보와 관련된 일러스트"
              loading="lazy"
              width={500}
              height={280}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-6">
          <div className="flex flex-col justify-center items-center gap-y-">
            <span className="button-02">
              {isDaySelected ? "오늘 " : selectedDateString}
              도착한 아티클이 없어요.
            </span>
            <span className="body-s">
              구독 신청 이후 수신된 아티클만 볼 수 있어요.
            </span>
          </div>
          <button
            type="button"
            onClick={handleGotoBtnClick}
            className="w-full h-fit p-4 rounded-xl button-03 hover:bg-blue-500 active:bg-blue-700 bg-blue-600 text-white transition-colors duration-300"
          >{`${
            isDaySelected ? today : selectedDay
          }에 발행되는 뉴스레터 보기`}</button>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
