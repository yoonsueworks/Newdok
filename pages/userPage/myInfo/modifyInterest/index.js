import AppBar from "shared/AppBar";
import { useRouter } from "next/router";
import Background2 from "shared/Background2";

const ModifyInterest = () => {
  const router = useRouter();
  return (
    <div className="pb-16 w-full h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="관심사 변경"
            iconr={false}
            func={() => router.push("/userPage/myInfo")}
          />
        </div>
      </div>
      <Background2>
        <div className="w-full h-full mt-16">
          <form className="w-full h-full flex flex-col justify-between">
            <input></input>
            <button
              type="submit"
              className="p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            >
              변경하기
            </button>
          </form>
        </div>
      </Background2>
    </div>
  );
};
export default ModifyInterest;
