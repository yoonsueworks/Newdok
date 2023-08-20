import Image from "next/image";
import { useRouter } from "next/router";

const CustomizedErrorComp = () => {
  const router = useRouter();
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
            <span className="block">서버와 관련된 오류가 발생했어요.</span>
            <span className="block">다시 시도해주세요.</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="w-full h-fit p-4 rounded-xl text-white single-20-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 transition-colors duration-300 "
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default CustomizedErrorComp;
