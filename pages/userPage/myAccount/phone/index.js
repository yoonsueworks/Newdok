import { useRouter } from "next/router";
import Background from "shared/Background";
import Button from "shared/Button";
import AppBar from "shared/AppBar";

const Phone = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="휴대폰 번호 변경"
            iconr={false}
            func={() => router.push("/userPage/myAccount")}
          />
        </div>
      </div>
      <Background>
        <div className="w-full h-full pb-14 pt-24 flex flex-col justify-between">
          <div className="grid gap-y-8">
            <div className="grid gap-y-2">
              <div className="single-14-m text-purple-700">휴대폰 번호</div>
              <div className="flex gap-x-2 justify-between">
                <input
                  placeholder="01041478220"
                  className="w-full contentbox-border p-4 single-16-m"
                ></input>
                <Button
                  text="인증 요청"
                  size="med"
                  state={true}
                  width="fit"
                  func={false}
                />
              </div>
              <div className="single-12-m text-neutralgray-500">
                재전송은 3회까지 가능해요.
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="single-14-m text-purple-700">인증번호</div>
              <input
                placeholder="6자리 숫자 입력"
                className="w-full contentbox-border p-4 single-16-m"
              ></input>
              <div className="single-12-m text-neutralgray-500">
                문자가 오지 않는다면 재전송 버튼을 눌러주세요.
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
            disabled=""
          >
            변경 하기
          </button>
        </div>
      </Background>
    </>
  );
};

export default Phone;
