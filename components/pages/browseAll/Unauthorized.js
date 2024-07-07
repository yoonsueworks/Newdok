import Image from "next/image";
import SingupButtons from "shared/SignupButtons";

const UnAuthorized = () => {
  return (
    <div className="w-full h-full justify-between bg-neutralgray-200">
      <div className="w-full h-full flex flex-col gap-y-[57px] px-5 py-14 justify-between">
        <div className="flex flex-col items-center">
          <Image
            src="/images/signup_300.png"
            alt="사용자 정보와 관련된 일러스트"
            width={500}
            height={300}
            priority
          />
          <div className="multiple-20-b mb-1 text-center">
            <span className="block">회원이 되면 내게 도움이 되는</span>
            <span className="block">뉴스레터를 추천받을 수 있어요!</span>
          </div>
        </div>
        <SingupButtons />
      </div>
    </div>
  );
};

export default UnAuthorized;
