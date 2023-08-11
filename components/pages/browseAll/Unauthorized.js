import Image from "next/image";
import SingupButtons from "shared/SignupButtons";

const UnAuthorized = () => {
  const wrapperCSS =
    "w-full h-full flex flex-col gap-y-[57px] px-5 py-14 justify-between";
  const contentsCSS = "flex flex-col items-center";
  const text1 = "multiple-20-b mb-1 text-center";

  return (
    <div className="w-full h-full justify-between bg-beige-100">
      <div className={wrapperCSS}>
        <div className={contentsCSS}>
          <Image
            src="/images/signup_300.png"
            alt="사용자 정보와 관련된 일러스트"
            width={500}
            height={300}
            priority
          />
          <div className={text1}>
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
