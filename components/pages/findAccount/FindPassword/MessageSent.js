import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { phoneTextElement, phoneErrorMessage } from "constants/join";

const MessageSent = ({ code, setComponent, authorize }) => {
  const { register, handleSubmit, watch } = useForm();
  const authNumber = watch("authNumber");

  /* 타이머, 요청 횟수 관련 */
  const [seconds, setSeconds] = useState(180);
  const [authCount, setAuthCount] = useState(1);

  const authChecked = Number(authNumber) === code;
  const timeout = seconds < 0;

  const onSubmit = () => {
    if (authChecked) console.log("d");
    setComponent("resetPswd");
  };

  /* 재전송 버튼 클릭 시 요청 */
  const sendAuthorize = () => {
    if (authCount < 4) authorize();
    setAuthCount((prev) => prev + 1);
  };

  /* 인증번호 인풋 메시지 세팅을 위한 유효성 검사 */
  const validatePhoneNumber = () => {
    if (authCount === 1) {
      return phoneErrorMessage.authRequested;
    }
    if (!authNumber) {
      return phoneErrorMessage.default;
    }
    if (timeout) {
      return phoneErrorMessage.error_timeout;
    }
    if (authNumber > 5 && !authChecked) {
      return phoneErrorMessage.error_failed;
    }
  };

  /* 컴포넌트 마운트 시 타이머 시작 */
  useEffect(() => {
    let countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      className="w-full h-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-y-7">
        <div className="multiple-24-b">
          회원가입 당시 입력한 휴대폰 번호로
          <br />
          인증번호를 발송했어요.
        </div>

        {
          <div className="w-full flex flex-col gap-y-2">
            <label
              htmlFor="phoneNumber"
              className="single-14-m text-purple-700"
            >
              인증 번호
            </label>
            <div className="flex w-full gap-x-2">
              <div
                className={`w-full flex rounded-lg p-4 justify-between items-center input-border focus-within:inputFocused-border 
              ${timeout && "inputError-border"}
              `}
              >
                <input
                  className="single-16-m bg-white w-full h-full"
                  {...register("authNumber", {
                    required: "this is required",
                    pattern: /^[0-9]{6}$/,
                  })}
                  placeholder={phoneTextElement.authNumberPh}
                  maxLength="6"
                  type="number"
                />

                <span
                  className={`single-16-m shrink-0 pl-4 ${
                    timeout ? "text-error" : "text-information"
                  }`}
                >
                  {timeout
                    ? phoneTextElement.timeoutBtn
                    : `${Math.floor(seconds / 60)
                        .toString()
                        .padStart(2, "0")}:${(seconds % 60)
                        .toString()
                        .padStart(2, "0")}`}
                </span>
              </div>
              <button
                className="w-fit p-4 text-purple-700 focus:purple-50 border border-purple-700 rounded-xl single-20-b shrink-0"
                onClick={() => sendAuthorize()}
              >
                재전송
              </button>
            </div>
            <p
              className={` single-12-m ${
                timeout ? "text-error" : "text-neutralgray-500"
              }`}
            >
              {validatePhoneNumber()}
            </p>
          </div>
        }
      </div>
      <button
        type="submit"
        disabled={!authNumber}
        className={`w-full h-fit p-5 rounded-[14px] text-white single-24-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 disabled:bg-neutralgray-500 transition-colors duration-300`}
      >
        다음
      </button>
    </form>
  );
};

export default MessageSent;
