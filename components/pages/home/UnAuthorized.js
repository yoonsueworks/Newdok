import Image from "next/image";
import ButtonText from "shared/ButtonText";

const UnAuthorized = () => {
  const wrapperCSS =
    "w-full h-full flex flex-col gap-y-[57px] px-5 py-14 justify-between";
  const contentsCSS = "flex flex-col items-center";
  const imageCSS = "w-[290px] h-[200px] border mb-5";
  const text1 = "multiple-20-b mb-1 text-center";
  const text2 = "multiple-16-m mb-1";

  return (
    <div className="w-full h-full justify-between bg-beige-100">
      <div className={wrapperCSS}>
        <div className={contentsCSS}>
          <Image
            src="/images/onboarding_300_3.png"
            alt="사용자 정보와 관련된 일러스트"
            width={290}
            height={500}
            loading="lazy"
          />
          <div className={text1}>
            <span className="block">회원이 되면 간편하게</span>
            <span className="block">뉴스레터를 모아볼 수 있어요!</span>
          </div>
          <div className={text2}>
            <span>발행일에 맞춰 뉴스레터를 이곳으로 배달해 드려요.</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <button
            type="button"
            className="w-full h-fit p-5 rounded-[14px] single-24-b hover:bg-purple-500 active:bg-purple-800 text-white bg-purple-700 transition-colors duration-300"
          >
            회원가입
          </button>
          <div className="flex items-center gap-x-2">
            <span className="inline-block">이미 계정이 있나요?</span>
            <ButtonText text="로그인" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
