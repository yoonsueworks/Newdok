import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userDatasAtom, infoChangeSuccessAtom } from "service/atoms/atoms";

import PasswordChild from "shared/PasswordChild";
import Background from "shared/Background";
import InputLabel from "shared/InputLabel";
import AppBar from "shared/AppBar";
import LockIcon from "icons/ver3.0/Line Lock.svg";

import { pswdText, pswdErrorMessage } from "constants/join";
import { validation } from "constants/validation";
import { useResetPswd } from "service/hooks/user";

const Pswd = () => {
  const router = useRouter();
  const { register, watch, handleSubmit } = useForm();
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const [, setInfoChangeSuccess] = useRecoilState(infoChangeSuccessAtom);
  const { data, isLoading, isError, mutate, error } = useResetPswd();

  const [prevPswd, setPrevPswd] = useState(null);
  const [pswd, setPswd] = useState(null);
  const [pswdCheck, setPswdCheck] = useState(null);
  const [prevPswdVisible, setPrevPswdVisible] = useState(false);
  const [pswdVisible, setPswdVisible] = useState(false);
  const [pswdCheckVisible, setPswdCheckVisible] = useState(false);

  const [isInput1Focused, setIsInput1Focused] = useState(false);
  const [isInput2Focused, setIsInput2Focused] = useState(false);
  const [isInput3Focused, setIsInput3Focused] = useState(false);

  const passwordValidation = validation.password;

  const conditionControl = {
    prevPswdHasValue: prevPswd?.length > 0,
    pswdHasValue: pswd?.length > 0,
    pswdCheckHasValue: pswdCheck?.length > 0,
    prevLengthShort: prevPswd?.length < 8,
    pswdLengthShort: pswd?.length < 8,
    pswdCheckLengthShort: pswdCheck?.length < 8,
    prevPswdTest: passwordValidation.test(prevPswd),
    pswdTest: passwordValidation.test(pswd),
    pswdCheckTest: passwordValidation.test(pswdCheck),
    btnDisabled:
      prevPswd === null ||
      pswd === null ||
      pswdCheck === null ||
      prevPswd?.length < 8 ||
      pswd?.length < 8 ||
      pswdCheck?.length < 8,
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const name = e.target.name;
    const replacedInputValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
    e.target.value = replacedInputValue;

    if (name === "prevPswd") setPrevPswd(replacedInputValue);
    if (name === "pswd") setPswd(replacedInputValue);
    if (name === "pswdCheck") setPswdCheck(replacedInputValue);
  };

  const onSubmit = async () => {
    await mutate({
      loginId: userDatas.loginId,
      prevPassword: prevPswd,
      password: pswd,
    });
    if (data) {
      router.push("/userPage/myAccount");
      setInfoChangeSuccess("pwChanged");
    }
    if (error) alert("에러가 발생하였습니다.");
  };

  const handleInputFocus = (id) => {
    if (id === 1) setIsInput1Focused(true);
    if (id === 2) setIsInput2Focused(true);
    if (id === 3) setIsInput3Focused(true);
  };

  const handleInputBlur = (id) => {
    if (id === 1) setIsInput1Focused(false);
    if (id === 2) setIsInput2Focused(false);
    if (id === 3) setIsInput3Focused(false);
  };

  const getErrorMessage = () => {
    if (conditionControl.pswdLengthShort) return pswdErrorMessage.error_length;
    if (!conditionControl.pswdTest) return pswdErrorMessage.error_combination;
  };

  const getErrorCheckMessage = () => {
    if (!conditionControl.pswdCheckTest) return pswdErrorMessage.error_match;
  };

  const inputDivStyle = `w-full flex justify-between items-center bg-transparent rounded-xl p-4 input-border focus-within:inputFocused-border `;

  return (
    <div className="xl:w-full md:w-full md:flex md:flex-col h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={false}
            textl="비밀번호 변경"
            iconr={false}
          />
        </div>
      </div>
      <Background>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-between pt-24 pb-14"
        >
          <div className="flex flex-col gap-y-8 ">
            {/* 현재 비밀번호: 첫번째 input */}
            <div className="grid gap-y-2">
              <InputLabel htmlFor="prevPswd" text="현재 비밀번호" />
              <div
                className={
                  inputDivStyle +
                  (conditionControl.prevLengthShort ||
                  (prevPswd !== null && !conditionControl.prevPswdTest)
                    ? "inputError-border bg-[#FFF2F4]"
                    : "input-border bg-transparent")
                }
              >
                <div className="flex gap-x-2">
                  <LockIcon
                    width="20"
                    height="20"
                    className={`stroke-neutralgray-600 ${
                      isInput1Focused
                        ? "stroke-neutralgray-800"
                        : conditionControl.prevLengthShort ||
                          (prevPswd !== null && !conditionControl.prevPswdTest)
                        ? "stroke-[#EA0730]"
                        : "stroke-neutralgray-600"
                    }`}
                  />

                  <input
                    {...register("prevPswd", {
                      required: {
                        value: true,
                        message: "현재 비밀번호를 입력해주세요.",
                      },
                      pattern: {
                        value: passwordValidation,
                      },
                    })}
                    maxLength="12"
                    placeholder="현재 비밀번호 입력"
                    className="input-01 h-full w-full bg-transparent bg-transparent"
                    type={prevPswdVisible ? "text" : "password"}
                    onChange={handleInputChange}
                    onPaste={() => {
                      return false;
                    }}
                    id="password1"
                    onFocus={() => handleInputFocus(1)}
                    onBlur={() => handleInputBlur(1)}
                  />
                </div>
                <PasswordChild
                  setInputType={setPrevPswdVisible}
                  type={prevPswdVisible}
                />
              </div>
            </div>
            {/* 새 비밀번호: 두번째 input */}
            <div className="grid gap-y-2">
              <InputLabel htmlFor="pswd" text="새 비밀번호" />
              <div
                className={
                  inputDivStyle +
                  (conditionControl.pswdLengthShort ||
                  (pswd !== null && !conditionControl.pswdTest)
                    ? "inputError-border bg-[#FFF2F4]"
                    : "input-border")
                }
              >
                <div className="flex gap-x-2">
                  <LockIcon
                    width="20"
                    height="20"
                    className={`stroke-neutralgray-600 ${
                      isInput2Focused
                        ? "stroke-neutralgray-800"
                        : conditionControl.pswdLengthShort ||
                          (pswd !== null && !conditionControl.pswdTest)
                        ? "stroke-[#EA0730]"
                        : "stroke-neutralgray-600"
                    }`}
                  />
                  <input
                    {...register("pswd", {
                      required: {
                        value: true,
                        message: "새 비밀번호를 입력해주세요.",
                      },
                      pattern: {
                        value: passwordValidation,
                      },
                    })}
                    maxLength="12"
                    placeholder="8자 이상, 영문/숫자 조합"
                    className="input-01 h-full w-full bg-transparent"
                    type={pswdVisible ? "text" : "password"}
                    onChange={handleInputChange}
                    onPaste={() => {
                      return false;
                    }}
                    id="password2"
                    onFocus={() => handleInputFocus(2)}
                    onBlur={() => handleInputBlur(2)}
                  />
                </div>
                <PasswordChild
                  setInputType={setPswdVisible}
                  type={pswdVisible}
                />
              </div>
              {pswd && (
                <p className="text-error label-s pt-2">{getErrorMessage()}</p>
              )}
            </div>
            {/* 새 비밀번호 확인:  세번째 input */}
            <div className="grid gap-y-2">
              <InputLabel htmlFor="pswdCheck" text="새 비밀번호 확인" />
              <div
                className={
                  inputDivStyle +
                  (conditionControl.pswdCheckLengthShort ||
                  (pswdCheck !== null && !conditionControl.pswdCheckTest)
                    ? "inputError-border bg-[#FFF2F4]"
                    : "input-border")
                }
              >
                <div className="flex gap-x-2">
                  <LockIcon
                    width="20"
                    height="20"
                    className={`stroke-neutralgray-600 ${
                      isInput3Focused
                        ? "stroke-neutralgray-800"
                        : conditionControl.pswdCheckLengthShort ||
                          (pswdCheck !== null &&
                            !conditionControl.pswdCheckTest)
                        ? "stroke-[#EA0730]"
                        : "stroke-neutralgray-600"
                    }`}
                  />
                  <input
                    {...register("pswdCheck", {
                      required: {
                        value: true,
                        message: "새 비밀번호를 확인해주세요.",
                      },
                      pattern: {
                        value: passwordValidation,
                      },
                    })}
                    maxLength="12"
                    placeholder="8자 이상, 영문/숫자 조합"
                    className="input-01 h-full w-full bg-transparent"
                    type={pswdCheckVisible ? "text" : "password"}
                    onChange={handleInputChange}
                    onPaste={() => {
                      return false;
                    }}
                    id="password3"
                    onFocus={() => handleInputFocus(3)}
                    onBlur={() => handleInputBlur(3)}
                  />
                </div>
                <PasswordChild
                  setInputType={setPswdCheckVisible}
                  type={pswdCheckVisible}
                />
              </div>
              {pswdCheck && (
                <p className="text-error label-s pt-2">
                  {getErrorCheckMessage()}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-fit p-4 rounded-xl bg-blue-600 button-03 default:text-white active:bg-blue-700 hover:bg-blue-500 transition-colors duration-300 disabled:bg-neutralgray-200 disabled:text-neutralgray-400"
            disabled={conditionControl.btnDisabled}
          >
            변경 하기
          </button>
        </form>
      </Background>
    </div>
  );
};

export default Pswd;
