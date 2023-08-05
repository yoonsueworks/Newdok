import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { SignUpContext } from "context/SignUpContext";
import { useCheckLoginId } from "service/hooks/user";
import { idErrorMessage, idPlaceholderText } from "constants/signup";

const IdForm = () => {
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);
  const { register, handleSubmit, formState } = useForm({});

  const [loginId, setLoginId] = useState("");
  const [loginIdExist, setLoginIdExist] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const checkLoginId = useCheckLoginId(loginId);

  /* 페이지 제출 */
  const onSubmit = (data) => {
    if (loginIdExist) {
      setUserInfo({ ...userInfo, ...data });
      setStep((prev) => prev + 1);
    } else return;
  };

  /* id 중복 확인, 비회원이 에러 400으로 들어와서 여기서 처리 X */
  const handleIdCheck = async () => {
    const data = await checkLoginId.refetch();
    setLoginIdExist(data.status === "error" ? false : true);
  };

  /* id 입력값 제어 : 특수문자 차단, 대문자 소문자로 교체 */
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const replacedInputValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
    const lowercaseValue = replacedInputValue.toLowerCase();
    e.target.value = lowercaseValue;
    setLoginId(lowercaseValue);
    setIsChecked(false);
    setLoginIdExist(null);
  };

  /* 조건 제어 : input border, error */
  const conditionControl = {
    isVacant: !loginId,
    containsLowercase: /(?=.*[a-z])/.test(loginId),
    containsNumber: /(?=.*[0-9])/.test(loginId),
    isLengthValid: loginId?.length >= 6 && loginId?.length <= 12,
  };

  /* 에러 메시지 제어 */
  const getErrorMessage = () => {
    if (conditionControl.isVacant) {
      return;
    }
    if (
      (!conditionControl.containsLowercase ||
        !conditionControl.containsNumber) &&
      !conditionControl.isLengthValid
    ) {
      return idErrorMessage.error_total;
    }
    if (
      !conditionControl.containsLowercase ||
      !conditionControl.containsNumber
    ) {
      return idErrorMessage.error_combination;
    }
    if (!conditionControl.isLengthValid) {
      return idErrorMessage.error_length;
    }
    if (!isChecked && !loginIdExist) {
      return "중복 확인";
    }
    if (loginId && !loginIdExist) {
      return idErrorMessage.error_exist;
    }
    if (loginId && loginIdExist) {
      return "사용 가능한 아이디입니다.";
    }
  };

  return (
    <form
      className="h-full overflow-scroll w-full flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="loginId" className="single-14-m text-purple-700">
          아이디
        </label>
        <div className="flex gap-x-2">
          <input
            {...register("loginId", {
              required: idErrorMessage.default,
              pattern: /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,12}$/,
            })}
            maxLength="12"
            placeholder={idPlaceholderText.placeholder}
            className={`w-full rounded-lg p-4 single-16-m focus:inputFocused-border ${
              conditionControl.isVacant
                ? "input-border"
                : !conditionControl.containsLowercase ||
                  !conditionControl.containsNumber ||
                  !conditionControl.isLengthValid
                ? "inputError-border"
                : !conditionControl.isVacant
                ? "input-border"
                : "focus:inputFocused-border"
            }`}
            onChange={handleInputChange}
            id="loginId"
          />
          <button
            type="button"
            disabled={!loginId}
            onClick={handleIdCheck}
            className="w-fit h-fit shrink-0 bg-purple-700 text-white hover:bg-purple-500 p-4 shrink-0 rounded-xl single-20-b cursor-pointer transition-colors duration-300  disabled:bg-neutralgray-500 disabled:cursor-default disabled:text-white disabled:border-0"
          >
            중복 확인
          </button>
        </div>
        <p
          className={`${
            loginIdExist ? "text-neutralgray-500" : "text-error"
          } single-12-m`}
        >
          {getErrorMessage()}
        </p>
      </div>

      <button
        type="submit"
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={conditionControl.isVacant}
      >
        다음
      </button>
    </form>
  );
};

export default IdForm;
