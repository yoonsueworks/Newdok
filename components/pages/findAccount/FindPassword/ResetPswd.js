import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import PasswordChild from "shared/PasswordChild";
import { pswdText, pswdErrorMessage } from "constants/join";
import { useResetPswd } from "service/hooks/user";

const ResetPswd = ({ loginId }) => {
  const { register, handleSubmit } = useForm();

  const [pswd, setPswd] = useState("");
  const [pswdCheck, setPswdCheck] = useState("");
  const [pswdVisible, setPswdVisible] = useState(false);
  const [pswdCheckVisible, setPswdCheckVisible] = useState(false);

  const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]*$/;
  const router = useRouter();

  const { data, isLoading, isError, mutate } = useResetPswd({
    loginId: loginId,
    password: pswd,
  });

  const conditionControl = {
    length: pswd?.length < 8,
    combination: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]*$/,
    match: pswd !== pswdCheck,
    btnDisabled: !pswd || !pswdCheck,
    hasValues: pswd && pswdCheck,
  };

  const getErrorMessage = () => {
    if (!pswd) return "";
    if (conditionControl.length) return pswdErrorMessage.error_length;
    if (!conditionControl.combination.test(pswd))
      return pswdErrorMessage.error_combination;
  };

  const getCheckErrorMessage = () => {
    if (conditionControl.match) return pswdErrorMessage.error_match;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const replacedInputValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
    e.target.value = replacedInputValue;
    e.target.name === "pswd"
      ? setPswd(replacedInputValue)
      : setPswdCheck(replacedInputValue);
  };

  const inputDivStyle = `w-full flex justify-between items-center rounded-lg p-4 input-border focus-within:inputFocused-border `;

  const onSubmit = async () => {
    await mutate({
      loginId: loginId,
      password: pswd,
    });
  };

  useEffect(() => {
    if (!isError && data) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <form
      className="h-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-y-7">
        <div className="multiple-24-b">
          새로운 비밀번호를
          <br />
          설정해 주세요.
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="pswd" className="single-14-m text-purple-700">
              비밀번호
            </label>
            <div
              className={
                inputDivStyle +
                (conditionControl.hasValues &&
                (conditionControl.length || !conditionControl.combination)
                  ? "inputError-border"
                  : "input-border")
              }
            >
              <input
                {...register("pswd", {
                  required: {
                    value: true,
                    message: pswdErrorMessage.error_total,
                  },
                  pattern: {
                    value: passwordValidation,
                  },
                })}
                maxLength="12"
                placeholder={pswdText.pswd}
                className="single-16-m h-full w-full"
                type={pswdVisible ? "text" : "password"}
                onChange={handleInputChange}
                onPaste={() => {
                  return false;
                }}
                id="password"
              />
              <PasswordChild setInputType={setPswdVisible} type={pswdVisible} />
            </div>
            <p className="text-error single-12-m">{getErrorMessage()}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="pswdCheck" className="single-14-m text-purple-700">
              비밀번호 확인
            </label>
            <div
              className={
                inputDivStyle +
                (conditionControl.hasValues && conditionControl.match
                  ? "inputError-border"
                  : "input-border")
              }
            >
              <input
                {...register("pswdCheck", {
                  required: true,
                  pattern: {
                    value: passwordValidation,
                    message: getCheckErrorMessage(),
                  },
                })}
                maxLength="12"
                placeholder={pswdText.pswd}
                className="single-16-m h-full w-full"
                type={pswdCheckVisible ? "text" : "password"}
                onChange={handleInputChange}
                onPaste={() => {
                  return false;
                }}
                id="passwordCheck"
              />
              <PasswordChild
                setInputType={setPswdCheckVisible}
                type={pswdCheckVisible}
              />
            </div>
            <p className="text-error single-12-m">{getCheckErrorMessage()}</p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={!conditionControl.combination.test(pswd)}
        className={`w-full h-fit p-5 rounded-[14px] text-white single-24-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 disabled:bg-neutralgray-500 transition-colors duration-300`}
      >
        다음
      </button>
    </form>
  );
};

export default ResetPswd;
