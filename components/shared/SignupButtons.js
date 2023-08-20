import { useRouter } from "next/router";
import ButtonText from "shared/ButtonText";

const SingupButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-y-8">
      <button
        type="button"
        onClick={() => router.push("/join")}
        className="w-full h-fit p-5 rounded-[14px] single-24-b hover:bg-purple-500 active:bg-purple-800 text-white bg-purple-700 transition-colors duration-300"
      >
        회원가입
      </button>
      <div className="flex items-center gap-x-2">
        <span className="inline-block single-14-m">이미 계정이 있나요?</span>
        <ButtonText text="로그인" func={() => router.push("/login")} />
      </div>
    </div>
  );
};

export default SingupButtons;
