import { useRouter } from "next/router";
import Image from "next/image";
import Button from "shared/Button";

const NotRecommended = () => {
  const router = useRouter();
  const routeToUserResearch = () => {
    router.push("/userResearch");
  };

  return (
    <div className="w-full h-full px-4 pt-24 pb-14 flex flex-col justify-between items-center">
      <div className="pb-2">
        <Image
          src="/images/signup_300.png"
          alt="추천 뉴스레터 일러스트"
          width="298"
          height="252"
        />
        <div className="text-center multiple-20-b">
          종사 산업과 관심사를 등록하면
          <br />
          "이름"님을 위한 뉴스레터를 찾아드려요!
        </div>
      </div>
      <Button
        text="등록하러 가기"
        mode="ghost"
        state={true}
        func={routeToUserResearch}
      />
    </div>
  );
};

export default NotRecommended;
