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
      <div className="w-full h-full flex flex-col justify-between pb-14 px-5 pt-24 items-center">
        <div>
          <Image
            src="/images/signup_300.png"
            alt="추천 뉴스레터 일러스트"
            width="298"
            height="252"
          />
          <div className="text-center multiple-20-b">
            종사 산업과 관심사를 등록하면
            <br />
            <Nickname />
            님을 위한 뉴스레터를 찾아드려요!
          </div>
        </div>
        <button
          type="button"
          onClick={routeToUserResearch}
          className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-50 active:bg-purple-100 text-purple-700 bg-white selectedchip-border  transition-colors duration-300"
        >
          등록하러 가기
        </button>
      </div>
    </>
  );
};

export default NotRecommended;
