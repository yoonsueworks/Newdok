import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SignUpContext } from "context/SignUpContext";
import { useForm } from "react-hook-form";

import MessageModal from "shared/MessageModal";
import InputLabel from "shared/InputLabel";
import MobileIcon from "icons/ver3.0/Line Mobile.svg";

import { useAuthSms, useCheckPhoneNumber } from "service/hooks/user";
import { phoneTextElement, phoneErrorMessage } from "constants/join";

const PhoneForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

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
  const timerViewModeSetting =
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (seconds % 60).toString().padStart(2, "0");

  const responsiveText = {
    phoneTextElement:
      authCount === 1
        ? phoneTextElement.authSendBtn
        : authCount < 4
        ? phoneTextElement.reAuthSendBtn
        : phoneTextElement.redirectSignup,
    isPhoneAuthRequested:
      isPhoneAuthRequested && phoneErrorMessage.authRequested,
    timer: timeout ? phoneTextElement.timeoutBtn : timerViewModeSetting,
  };

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
    if (result) setCode(result?.code);
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

  const handleAuthRequestCountAction = () => {
    setIsPhoneAuthRequested(true);
    setAuthCount((prev) => prev + 1);
  };

  const handlePhoneAuth = (e) => {
    e.preventDefault();
    handleAuthRequestCountAction();
    handleTimer();
    handleQueries();
  };

  /* 아래 두 함수: 계정이 1개 이상인 경우 모달용 함수*/
  const clickJoinProcessContinue = (e, idInfos) => {
    if (Number(e.target.id) === 1 && idInfos < 3) setIsModalOpen(false);
    if (Number(e.target.id) === 1 && idInfos >= 3) router.push("/findAccount");
    else {
      setIsModalOpen(false);
      authorize();
      setContinueProcess(true);
    }
  };

  const clickLogin = () => router.push("/login");

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

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
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
      className="h-full overflow-scroll w-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <InputLabel htmlFor="phoneNumber" text="휴대폰 번호" />
          <div className="flex gap-x-2">
            <div className="w-full border-b border-neutralgray-400 flex items-center">
              <MobileIcon
                className={`stroke-neutralgray-600 ${
                  isInputFocused ? "stroke-neutralgray-800" : ""
                }`}
              />
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
                className={`p-2 w-full input-01 text-neutralgray-600 focus:text-neutralgray-800
          ${
            isPhoneAuthRequested
              ? "bg-neutralgray-200 cursor-not-allowed"
              : "bg-white"
          }`}
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <button
              type="button"
              disabled={!phoneNumber || authCount === 4}
              className={`${
                authCount === 1
                  ? "bg-blue-600 text-white hover:bg-blue-700 "
                  : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 "
              }w-[84px] py-2 shrink-0 rounded-xl single-20-b cursor-pointer disabled:bg-neutralgray-500 disabled:cursor-default disabled:text-white disabled:border-0 transition-colors duration-300 `}
              onClick={handlePhoneAuth}
            >
              {responsiveText.phoneTextElement}
            </button>
          </div>
          <p className="text-neutralgray-700 label-l">
            {responsiveText.isPhoneAuthRequested}
          </p>
        </div>
        {isPhoneAuthRequested && continueProcess && (
          <div className="flex flex-col gap-y-2">
            <InputLabel htmlFor="authorization" text="인증 번호" />
            <div
              className={`flex rounded-lg p-4 justify-between items-center input-border focus-within:inputFocused-border 
              ${timeout && "inputError-border inputError-fill"}
              `}
            >
              <input
                className="single-16-m bg-white w-full h-full "
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
                  {responsiveText.timer}
                </span>
              )}
            </div>
            <p
              className={`label-l  ${
                authNumber.length < 1
                  ? "text-neutralgray-700"
                  : timeout || authChecked
                  ? "text-error"
                  : "text-neutralgray-700"
              }`}
            >
              {validatePhoneNumber()}
            </p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className={`mt-16 p-5 text-white bg-blue-600 rounded-xl focus:outline-none disabled:bg-neutralgray-200 disabled:text-neutralgray-400 text-sm font-bold transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700 ${
          authCount === 1 && "hidden"
        }`}
        disabled={authNumber.length !== 6}
      >
        다음
      </button>
      <MessageModal
        isOpen={isModalOpen}
        controlModal={setIsModalOpen}
        title="이미 가입된 정보입니다."
        titleSize="s"
        info={[
          "입력하신 번호로 이미 가입된 계정이 있어요.",
          "한 번호로 최대 3개의 계정을 만들 수 있어요.",
          <div
            key={3}
            className="bg-neutralgray-100 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4 flex flex-col gap-y-2.5"
          >
            {data?.map((el) => {
              return (
                <div key={el.id} className="gap-y-1">
                  <span className="body-s text-blue-600">
                    {el.loginId.replace(/^..../, "****")}
                  </span>
                  <br />
                  <span className="label-l text-neutralgray-600">
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
            <button
              type="button"
              id={1}
              className={`w-full p-4 rounded-xl button-03 transition-colors duration-300 hover:bg-blue-50 active:bg-blue-100 bg-white text-neutralgray-700 shadow-[inset_0_0px_0px_1px_#EBEBEB]`}
              onClick={(e) => clickJoinProcessContinue(e, data?.length)}
            >
              {data?.length >= 3 ? "ID/PW 찾기" : "계속 진행하기"}
            </button>
            <button
              onClick={clickLogin}
              className="w-full p-4 rounded-xl text-white bg-blue-600 button-03 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700"
            >
              로그인
            </button>
          </div>
        }
      />
    </form>
  );
};

export default PhoneForm;
