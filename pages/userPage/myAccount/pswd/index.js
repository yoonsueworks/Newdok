import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import PasswordChild from "shared/PasswordChild";
import Background from "shared/Background";
import InputLabel from "shared/InputLabel";
import Button from "shared/Button";
import AppBar from "shared/AppBar";

import { pswdText, pswdErrorMessage } from "constants/join";
import { validation } from "constants/validation";
import { useResetPswd } from "service/hooks/user";

const Pswd = () => {
  const router = useRouter();
  const { register, watch, handleSubmit } = useForm();
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const { data, isLoading, isError, mutate, error } = useResetPswd();

  const [prevPswd, setPrevPswd] = useState(null);
  const [pswd, setPswd] = useState(null);
  const [pswdCheck, setPswdCheck] = useState(null);
  const [prevPswdVisible, setPrevPswdVisible] = useState(false);
  const [pswdVisible, setPswdVisible] = useState(false);
  const [pswdCheckVisible, setPswdCheckVisible] = useState(false);

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
      password: pswd,
    });
    if (data) router.push("/userPage/myAccount");
    if (error) alert("에러가 발생하였습니다.");
  };

  console.log(conditionControl.pswdCheckLengthShort);
  const inputDivStyle = `w-full flex justify-between items-center bg-white rounded-lg p-4 input-border focus-within:inputFocused-border `;

  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="비밀번호 변경"
            iconr={false}
            func={() => router.push("/userPage/myAccount")}
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
                    ? "inputError-border"
                    : "input-border")
                }
              >
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
                  className="single-16-m h-full w-full"
                  type={prevPswdVisible ? "text" : "password"}
                  onChange={handleInputChange}
                  onPaste={() => {
                    return false;
                  }}
                  id="password"
                />
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
                    ? "inputError-border"
                    : "input-border")
                }
              >
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
                  className="single-16-m h-full w-full"
                  type={pswdVisible ? "text" : "password"}
                  onChange={handleInputChange}
                  onPaste={() => {
                    return false;
                  }}
                  id="password"
                />
                <PasswordChild
                  setInputType={setPswdVisible}
                  type={pswdVisible}
                />
              </div>
            </div>
            {/* 새 비밀번호 확인:  세번째 input */}
            <div className="grid gap-y-2">
              <InputLabel htmlFor="pswdCheck" text="새 비밀번호 확인" />
              <div
                className={
                  inputDivStyle +
                  (conditionControl.pswdCheckLengthShort ||
                  (pswdCheck !== null && !conditionControl.pswdCheckTest)
                    ? "inputError-border"
                    : "input-border")
                }
              >
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
                  className="single-16-m h-full w-full"
                  type={pswdCheckVisible ? "text" : "password"}
                  onChange={handleInputChange}
                  onPaste={() => {
                    return false;
                  }}
                  id="password"
                />
                <PasswordChild
                  setInputType={setPswdCheckVisible}
                  type={pswdCheckVisible}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
            disabled={conditionControl.btnDisabled}
          >
            변경 하기
          </button>
        </form>
      </Background>
    </>
  );
};

export default Pswd;
