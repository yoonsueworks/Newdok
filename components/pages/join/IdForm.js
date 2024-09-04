import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { SignUpContext } from "context/SignUpContext";
import { useCheckLoginId } from "service/hooks/user";
import InputLabel from "shared/InputLabel";
import { idErrorMessage, idPlaceholderText } from "constants/join";

const IdForm = () => {
  const { setUserInfo, userInfo } = useContext(SignUpContext);
  const { register } = useForm({});

  const [loginId, setLoginId] = useState("");
  const [loginIdExist, setLoginIdExist] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const { refetch, data, error, isError } = useCheckLoginId(loginId);

  /* ID 중복 확인 */
  const handleIdCheck = async () => {
    await refetch();
    setLoginIdExist(data);

    if (isError) setUserInfo({ ...userInfo, loginId: loginId });
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
    if (loginIdExist === null) {
      return "아이디 중복 여부를 확인해주세요.";
    }
    if (data) {
      return idErrorMessage.error_exist;
    }
    if (error?.response?.data?.statusCode === 400) {
      return "사용 가능한 아이디입니다.";
    }
    return "아이디 중복 여부를 확인해주세요.";
  };

  return (
    <form className="h-full overflow-scroll w-full flex flex-col">
      <div className="flex flex-col">
        <InputLabel htmlFor="loginId" text="아이디" />
        <div className="flex gap-x-2 pt-2">
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
        {loginId && (
          <p
            className={`${
              isError
                ? "text-neutralgray-500"
                : !isChecked
                ? "text-error"
                : "text-neutralgray-500"
            } single-12-m pt-2`}
          >
            {getErrorMessage()}
          </p>
        )}
      </div>
    </form>
  );
};

export default IdForm;
