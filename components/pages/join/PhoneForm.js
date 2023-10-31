import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SignUpContext } from "context/SignUpContext";
import { useForm } from "react-hook-form";

import MessageModal from "shared/MessageModal";
import InputLabel from "shared/InputLabel";

import { useAuthSms, useCheckPhoneNumber } from "service/hooks/user";
import { phoneTextElement, phoneErrorMessage } from "constants/join";

const PhoneForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);
  const { register, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });
  const router = useRouter();

  /* 사용자 인터랙션 관련 */
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [isPhoneAuthRequested, setIsPhoneAuthRequested] = useState(false);

  /* 타이머, 요청 횟수 관련 */
  const [seconds, setSeconds] = useState(180);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [authCount, setAuthCount] = useState(1);
  const [continueProcess, setContinueProcess] = useState(false);

  /* 요청 처리, 응답 관련 */
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);

  const authorizeSms = useAuthSms();
  const checkPhoneNumber = useCheckPhoneNumber(phoneNumber);

  const timeout = seconds === 0;
  const authChecked = Number(authNumber) !== code;

  /* 페이지 제출 */
  const onSubmit = (data) => {
    if (!authChecked) {
      const { authorization, ...formData } = data;
      setUserInfo({ ...userInfo, ...formData });
      setStep((prev) => prev + 1);
    } else {
      return;
    }
  };

  /* SMS 코드 요청, 코드 세팅 */
  const authorize = async () => {
    const form = { phoneNumber: phoneNumber };
    const result = await authorizeSms.mutateAsync(form);
    if (authorizeSms.data) setCode(result?.code);
  };

  /* 휴대폰 번호 중복 체크 */
  const handleCheckPhoneNumber = async () => {
    const { data, error } = await checkPhoneNumber.refetch();
    /* 중복 회원 */
    if (data) setData(data);
  };

  const handleQueries = async () => {
    if (continueProcess) {
      authorize();
    }
    await handleCheckPhoneNumber();
    if (checkPhoneNumber.error) {
      authorize();
      setContinueProcess(true);
    } else {
      return;
    }
  };

  const handleTimer = () => {
    setSeconds(180);
    setIsCountdownActive(true);
  };

  const handleActions = () => {
    setIsPhoneAuthRequested(true);
    setAuthCount((prev) => prev + 1);
  };

  const handlePhoneAuth = (e) => {
    e.preventDefault();
    handleActions();
    handleTimer();
    handleQueries();
  };

  const clickContinue = () => {
    setIsModalOpen(false);
    authorize();
    setContinueProcess(true);
  };

  /* 인증번호 인풋 메시지 세팅을 위한 유효성 검사 */
  const validatePhoneNumber = () => {
    if (!authNumber) {
      return phoneErrorMessage.default;
    }
    if (timeout) {
      return phoneErrorMessage.error_timeout;
    }
    if (authNumber && authChecked) {
      return phoneErrorMessage.error_failed;
    }
  };

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

  useEffect(() => {
    if (data) setIsModalOpen(true);
  }, [data]);

  return (
    <form
      className="h-full overflow-scroll w-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col  gap-y-2">
          <InputLabel htmlFor="phoneNumber" text="휴대폰 번호" />
          <div className="flex gap-x-2">
            <input
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "11자 휴대폰 번호를 입력하세요",
                },
                pattern: /^[0-9]{11}$/,
              })}
              maxLength="11"
              placeholder={phoneTextElement.phoneNumberPh}
              className={`rounded-lg p-4 w-full input-border single-16-m focus:inputFocused-border 
              ${
                isPhoneAuthRequested
                  ? "bg-neutralgray-200 cursor-not-allowed"
                  : "bg-white"
              }`}
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
            />
            <button
              type="button"
              disabled={!phoneNumber || authCount === 4}
              className={`${
                authCount === 1
                  ? "bg-purple-700 text-white hover:bg-purple-500"
                  : "bg-white border border-purple-700 text-purple-700 hover:bg-purple-50 active:bg-purple-100 "
              }w-fit p-4 shrink-0 rounded-xl single-20-b cursor-pointer disabled:bg-neutralgray-500 disabled:cursor-default disabled:text-white disabled:border-0 transition-colors duration-300 `}
              onClick={handlePhoneAuth}
            >
              {authCount === 1
                ? phoneTextElement.authSendBtn
                : authCount < 4
                ? phoneTextElement.reAuthSendBtn
                : phoneTextElement.redirectSignup}
            </button>
          </div>
          <p className="text-neutralgray-500 single-12-m">
            {isPhoneAuthRequested && phoneErrorMessage.authRequested}
          </p>
        </div>
        {isPhoneAuthRequested && continueProcess && (
          <div className="flex flex-col gap-y-2">
            <InputLabel htmlFor="authorization" text="인증 번호" />
            <div
              className={`flex rounded-lg p-4 justify-between items-center input-border focus-within:inputFocused-border 
              ${timeout && "inputError-border"}
              `}
            >
              <input
                className="single-16-m bg-white w-full h-full"
                {...register("authorization", {
                  required: "this is required",
                  pattern: /^[0-9]{6}$/,
                })}
                placeholder={phoneTextElement.authNumberPh}
                maxLength="6"
                type="number"
                onChange={(e) => setAuthNumber(e.target.value)}
              />
              {isPhoneAuthRequested && isCountdownActive && (
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
              )}
            </div>
            <p
              className={` single-12-m ${
                timeout ? "text-error" : "text-neutralgray-500"
              }`}
            >
              {validatePhoneNumber()}
            </p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={authNumber.length !== 6}
      >
        다음
      </button>
      <MessageModal
        isOpen={isModalOpen}
        controlModal={setIsModalOpen}
        title="중복 계정 안내"
        info={[
          "입력하신 번호로 이미 가입된 계정이 있어요.",
          "한 번호로 최대 3개의 계정을 만들 수 있어요.",
          <div
            key={3}
            className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4"
          >
            {data?.map((el) => {
              return (
                <div key={el.id}>
                  <span className="single-16-m">
                    {el.loginId.replace(/^..../, "****")}
                  </span>
                  <br />
                  <span className="single-14-m">
                    {el.createdAt.replaceAll("-", ". ").slice(0, 12)} 가입
                  </span>
                  <br />
                </div>
              );
            })}
          </div>,
        ]}
        button={
          <div className="flex gap-x-2 mt-5" key={1}>
            {data?.length >= 3 ? (
              <button
                onClick={() => router.push("/login")}
                className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
              >
                로그인
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className={`w-full p-4 rounded-xl single-20-b ${"transition-colors duration-300 hover:bg-purple-50 active:bg-purple-100 bg-white text-purple-700 shadow-[inset_0_0px_0px_1px_#674188]"}`}
                  onClick={clickContinue}
                >
                  계속 진행하기
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
                >
                  로그인
                </button>
              </>
            )}
          </div>
        }
      />
    </form>
  );
};

export default PhoneForm;
