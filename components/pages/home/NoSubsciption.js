import Image from "next/image";
import { useRouter } from "next/router";
import Background from "shared/Background";
import Reload from "shared/Reload";

const NoSubscription = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col w-full h-full items-center justify-between bg-neutralgray-50">
        <div className="sm:w-full md:w-full xl:w-[70%] h-full xl:px-5 sm:px-5 xs:px-5 md:pr-8 pt-7 pb-14 flex flex-col items-center">
          <div className="flex flex-col gap-y-12 items-end">
            <Reload />
            <div className="flex flex-col items-center">
              <Image
                src="/images/empty_subscribe_280.png"
                alt="구독함이 빈 일러스트"
                width={500}
                height={280}
                priority
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <span className="button-02">
                아직 구독 중인 뉴스레터가 없어요.
              </span>
              <span className="body-s text-center">
                뉴스레터를 구독하면 발행일에 맞춰
                <br />
                여기로 배달해 드려요.
              </span>
            </div>
            <button
              type="button"
              onClick={() => router.push("/browseAll")}
              className="w-full h-fit p-4 rounded-xl button-03 hover:bg-blue-500 active:bg-blue-700 bg-blue-600 text-white transition-colors duration-300"
            >
              내게 필요한 뉴스레터 추천받기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoSubscription;
