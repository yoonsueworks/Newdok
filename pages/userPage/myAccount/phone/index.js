import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userDatasAtom, infoChangeSuccessAtom } from "service/atoms/atoms";
import { useAuthSms, useResetPhoneNumber } from "service/hooks/user";

import InputLabel from "shared/InputLabel";
import Background from "shared/Background";
import AppBar from "shared/AppBar";

import { phoneTextElement, phoneErrorMessage } from "constants/join";
import { useForm } from "react-hook-form";

const Phone = () => {
  const { register, handleSubmit, watch } = useForm();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const newPhoneNumber = watch("newPhoneNumber");
  const authNumber = watch("authNumber");

  const [seconds, setSeconds] = useState(180);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [isPhoneAuthRequested, setIsPhoneAuthRequested] = useState(false);
  const [authCount, setAuthCount] = useState(0);
  const [code, setCode] = useState(null);

  const authChecked = Number(authNumber) === code;
  const timeout = seconds <= 0;

  const form = { phoneNumber: newPhoneNumber };
  const authorizeSms = useAuthSms();
  const resetPhoneNumber = useResetPhoneNumber();
  const router = useRouter();

  const [userDatas] = useRecoilState(userDatasAtom);
  const [, setInfoChangeSuccess] = useRecoilState(infoChangeSuccessAtom);

  /* 조건 제어 : input border, error */
  const conditionControl = {
    authBtnDisabled:
      newPhoneNumber?.length < 11 || phoneNumber === newPhoneNumber,
  };

  /* 인증 관리 */
  const clickAuthRequestBtn = () => {
    if (authCount < 4) authorize();
    setAuthCount((prev) => prev + 1);

    setSeconds(180);
    setIsCountdownActive(true);
    setIsPhoneAuthRequested(true);
  };

  /* SMS 코드 요청, 코드 세팅 */
  const authorize = async () => {
    const result = await authorizeSms.mutateAsync(form);
    if (!authorizeSms.data) setCode(result?.code);
  };

  /* 코드 일치 시 제출 활성화, 변경 요청 */
  const onSubmit = async () => {
    await resetPhoneNumber.mutateAsync(form);
    if (resetPhoneNumber.isSuccess) {
      router.push("/userPage/myAccount");
      setInfoChangeSuccess("phoneNumberChanged");
    }
    if (resetPhoneNumber.isError) {
      router.push("/userPage/myAccount");
      setInfoChangeSuccess("phoneNumberFailed");
    }
    // TODO: toastify
  };

  const validatePhoneNumber = () => {
    if (timeout) {
      return phoneErrorMessage.error_timeout;
    } else if (!authNumber) {
      return phoneErrorMessage.default;
    } else if (authNumber && !authChecked) {
      return phoneErrorMessage.error_failed;
    }
  };

  const phoneTimer = timeout
    ? phoneTextElement.timeoutBtn
    : `${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    setPhoneNumber(userDatas.phoneNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let countdownInterval;

    if (isCountdownActive && seconds > 0) {
      countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isCountdownActive, seconds]);

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
        <form
          className="w-full h-full pb-14 pt-24 flex flex-col justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-y-8">
            <div className="grid gap-y-2">
              <InputLabel htmlFor="newPhoneNumber" text="휴대폰 번호" />
              <div className="flex gap-x-2 justify-between">
                <input
                  {...register("newPhoneNumber", {
                    required: {
                      value: true,
                      message: "11자 휴대폰 번호를 입력하세요",
                    },
                    pattern: /^[0-9]{11}$/,
                  })}
                  maxLength="11"
                  type="number"
                  placeholder={phoneNumber}
                  className={`w-full rounded-lg p-4 single-16-m input-border ${
                    newPhoneNumber ? "" : "focus:inputFocused-border "
                  }`}
                  id="newPhoneNumber"
                />
                <button
                  type="button"
                  disabled={conditionControl.authBtnDisabled || authCount > 2}
                  onClick={clickAuthRequestBtn}
                  className={`w-fit h-full shrink-0 p-4 rounded-xl disabled:bg-neutralgray-500 disabled:text-white disabled:border-none single-20-b transition-colors duration-300 ${
                    authCount < 1
                      ? "bg-purple-700 active:bg-purple-800 hover:bg-purple-500 text-white"
                      : "bg-white text-purple-700 selectedchip-border hover:bg-purple-50 active:bg-purple-100"
                  }`}
                >
                  {authCount < 1 ? "인증 요청" : "재전송"}
                </button>
              </div>
              <div className="single-12-m text-neutralgray-500">
                재전송은 3회까지 가능해요.
              </div>
            </div>
            {authCount > 0 && (
              <div className="flex flex-col gap-y-2">
                <InputLabel htmlFor="authNumber" text="인증 번호" />
                <div
                  className={`flex rounded-lg p-4 justify-between items-center bg-white input-border focus-within:inputFocused-border 
                ${
                  (timeout || (authNumber?.length === 6 && !authChecked)) &&
                  "inputError-border"
                }
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
                  {isPhoneAuthRequested && isCountdownActive && (
                    <span
                      className={`single-16-m shrink-0 pl-4 ${
                        timeout ? "text-error" : "text-information"
                      }`}
                    >
                      {phoneTimer}
                    </span>
                  )}
                </div>
                <p
                  className={`single-12-m ${
                    timeout || (authNumber?.length === 6 && !authChecked)
                      ? "text-error"
                      : "text-neutralgray-500"
                  }`}
                >
                  {validatePhoneNumber()}
                </p>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
            disabled={authNumber?.length < 6 || !authChecked}
          >
            변경 하기
          </button>
        </form>
      </Background>
    </>
  );
};

export default Phone;
