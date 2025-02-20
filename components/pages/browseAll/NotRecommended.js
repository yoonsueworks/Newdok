import Image from "next/image";
import { useRouter } from "next/router";
import Nickname from "shared/Nickname";

const NotRecommended = () => {
  const router = useRouter();
  const routeToUserResearch = () => {
    router.push("/userPage/myInfo");
  };

  return (
    <>
      <div className="w-full h-full flex flex-col pb-14 px-5 pt-24 items-center">
        <div className="flex flex-col justify-center items-center pb-6">
          <Image
            src="/images/Sign_up.png"
            alt="추천 뉴스레터 일러스트"
            width="280"
            height="280"
          />
          <div className="text-center">
            <div className="title-s mb-1">프로필을 등록해주세요</div>
            <div className="body-s w-[223px] break-keep text-neutralgray-700">
              <Nickname />
              님을 위한 뉴스레터를 찾아드려요!
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={routeToUserResearch}
          className="w-[80%] xl:w-[70%] h-fit p-4 rounded-xl button-03 hover:bg-blue-500 active:bg-blue-700 text-white bg-blue-600 transition-colors duration-300"
        >
          등록하러 가기
        </button>
      </div>
    </>
  );
};

export default NotRecommended;
