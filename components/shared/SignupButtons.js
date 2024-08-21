import { useRouter } from "next/router";
import ButtonText from "shared/ButtonText";

const SingupButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-y-8">
      <button
        type="button"
        onClick={() => router.push("/join")}
        className="w-full h-fit p-4 rounded-xl button-03 hover:bg-blue-500 active:bg-blue-700 text-white bg-blue-600 transition-colors duration-300"
      >
        회원가입
      </button>
      <div className="flex items-center gap-x-2">
        <span className="inline-block body-s text-neutralgray-700">
          이미 계정이 있나요?
        </span>
        <span
          className="inline-block body-s underline text-blue-600"
          onClick={() => router.push("/login")}
        >
          로그인
        </span>
      </div>
    </div>
  );
};

export default SingupButtons;
