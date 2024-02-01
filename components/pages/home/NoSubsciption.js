import Image from "next/image";
import { useRouter } from "next/router";
import Background from "shared/Background";
import Reload from "shared/Reload";

const NoSubscription = () => {
  const router = useRouter();
  return (
    <>
      <Background>
        <div className="w-full h-full  pt-7 pb-14 flex flex-col justify-between items-end">
          <div className="flex flex-col gap-y-10 items-end">
            <Reload />
            <div className="flex flex-col items-center">
              <Image
                src="/images/empty_subscribe_300.png"
                alt="구독함이 빈 일러스트"
                width={500}
                height={300}
                priority
              />
              <div className="multiple-20-b mb-1 mt-5">
                아직 구독 중인 뉴스레터가 없어요.
              </div>
              <div className="multiple-16-m mb-1 text-center">
                <span>
                  뉴스레터를 구독하면 발행일에 맞춰
                  <br />
                  여기로 배달해 드려요.
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push("/browseAll")}
            className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-50 active:bg-purple-100 text-purple-700 bg-white selectedchip-border  transition-colors duration-300"
          >
            내게 필요한 뉴스레터 추천받기
          </button>
        </div>
      </Background>
    </>
  );
};

export default NoSubscription;
