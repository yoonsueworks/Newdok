import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpContext } from "context/SignUpContext";

import PasswordChild from "shared/PasswordChild";
import { pswdText, pswdErrorMessage } from "constants/join";

const PswdForm = () => {
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);
  const { register, handleSubmit } = useForm({});

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [pwVisible, setPwVisible] = useState(false);
  const [pwCheckVisible, setPwCheckVisible] = useState(false);

  const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]*$/;

  const onSubmit = (data) => {
    const { passwordCheck, ...formData } = data;
    setUserInfo({ ...userInfo, ...formData });
    setStep((prev) => prev + 1);
  };

  const conditionControl = {
    length: password.length < 8,
    combination: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]*$/,
    // combination: /^[a-zA-Z0-9]*$/,
    match: password !== passwordCheck,
    btnDisabled: !password || !passwordCheck,
    hasValues: password && passwordCheck,
  };

  const getErrorMessage = () => {
    if (!password) return "";
    if (conditionControl.length) return pswdErrorMessage.error_length;
    if (!conditionControl.combination.test(password))
      return pswdErrorMessage.error_combination;
  };

  const getCheckErrorMessage = () => {
    if (conditionControl.match) return pswdErrorMessage.error_match;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const replacedInputValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
    e.target.value = replacedInputValue;
    e.target.name === "password"
      ? setPassword(replacedInputValue)
      : setPasswordCheck(replacedInputValue);
  };

  const inputDivStyle = `w-full flex justify-between items-center rounded-lg p-4 input-border focus-within:inputFocused-border `;

  return (
    <form
      className="h-full overflow-scroll w-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password" className="single-14-m text-purple-700">
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
              {...register("password", {
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
              type={pwVisible ? "text" : "password"}
              onChange={handleInputChange}
              onPaste={() => {
                return false;
              }}
              id="password"
            />
            <PasswordChild setInputType={setPwVisible} type={pwVisible} />
          </div>
          <p className="text-error single-12-m">{getErrorMessage()}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="passwordCheck"
            className="single-14-m text-purple-700"
          >
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
              {...register("passwordCheck", {
                required: true,
                pattern: {
                  value: passwordValidation,
                  message: getCheckErrorMessage(),
                },
              })}
              maxLength="12"
              placeholder={pswdText.pswd}
              className="single-16-m h-full w-full"
              type={pwCheckVisible ? "text" : "password"}
              onChange={handleInputChange}
              onPaste={() => {
                return false;
              }}
              id="passwordCheck"
            />
            <PasswordChild
              setInputType={setPwCheckVisible}
              type={pwCheckVisible}
            />
          </div>
          <p className="text-error single-12-m">{getCheckErrorMessage()}</p>
        </div>
      </div>
      <button
        type="submit"
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={conditionControl.btnDisabled}
      >
        다음
      </button>
    </form>
  );
};

export default PswdForm;
