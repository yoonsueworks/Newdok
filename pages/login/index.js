import { useRouter } from "next/router";
import { useState } from "react";

import Input from "shared/Input";
import Button from "shared/Button";
import PasswordChild from "components/pages/login/PasswordChild";
import EmailChild from "components/pages/login/EmailChild";

import BottomTextButtons from "components/pages/login/BottomTextButtons";

const SignIn = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ userId: "", password: "" });
  const [inputType, setInputType] = useState(false);

  const getUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validateID =
    userInfo.userId.length > 0
      ? /^[A-Za-z0-9]{6,12}$/.test(userInfo.userId)
      : true;
  const validatePW =
    userInfo.password.length > 0
      ? /^[A-Za-z0-9]{8}$/.test(userInfo.password)
      : true;

  const isValid = validateID && validatePW;

  const fetchLogin = () => {
    // TODO:fetch
    router.push("/home");
  };

  const LOGIN_INPUTS = [
    {
      id: 1,
      placeholder: "이메일 주소 입력",
      name: "userId",
      child: <EmailChild />,
      func: getUserInfo,
      isValid: validateID,
      type: "text",
      error: "이메일 주소는 영문/숫자 조합입니다.",
    },
    {
      id: 2,
      placeholder: "비밀번호 입력",
      name: "password",
      child: <PasswordChild setInputType={setInputType} type={inputType} />,
      func: getUserInfo,
      isValid: validatePW,
      type: inputType,
      error: "비밀번호는 최소 8자 이상입니다.",
    },
  ];

  return (
    <div className="w-full h-screen pb-14 flex flex-col justify-between  px-4">
      <form className="grid gap-y-4 w-full">
        {LOGIN_INPUTS.map(
          ({ id, placeholder, name, child, func, isValid, type, error }) => {
            return (
              <Input
                key={id}
                placeholder={placeholder}
                name={name}
                child={child}
                func={func}
                isValid={isValid}
                type={type}
                error={error}
              />
            );
          }
        )}
      </form>
      <div className="w-full flex flex-col items-center">
        <Button
          mode="alive"
          func={fetchLogin}
          state={isValid}
          size="big"
          text="로그인"
          onboarding="관심사를"
        />
        <BottomTextButtons />
      </div>
    </div>
  );
};

export default SignIn;
