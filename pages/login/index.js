import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import BottomTextButtons from "components/pages/login/BottomTextButtons";
import PasswordChild from "shared/PasswordChild";
import EmailChild from "shared/EmailChild";
import Button from "shared/Button";
import Input from "shared/Input";

const SignIn = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ loginId: "", password: "" });
  const [inputType, setInputType] = useState(false);
  // const postUserLogin = useUserLogin(JSON.stringify(userInfo));

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validateID =
    userInfo.loginId.length > 0
      ? /^[A-Za-z0-9]{6,12}$/.test(userInfo.loginId)
      : true;
  const validatePW =
    userInfo.password.length > 0
      ? /^[A-Za-z0-9]{8}$/.test(userInfo.password)
      : true;

  const isValid = validateID && validatePW;

  const handleLogin = async () => {
    await postUserLogin();
  };

  const LOGIN_INPUTS = [
    {
      id: 1,
      placeholder: "이메일 주소 입력",
      name: "loginId",
      child: <EmailChild />,
      func: handleUserInfo,
      isValid: validateID,
      type: "text",
      error: "이메일 주소는 영문/숫자 조합입니다.",
    },
    {
      id: 2,
      placeholder: "비밀번호 입력",
      name: "password",
      child: <PasswordChild setInputType={setInputType} type={inputType} />,
      func: handleUserInfo,
      isValid: validatePW,
      type: inputType,
      error: "비밀번호는 최소 8자 이상입니다.",
    },
  ];

  return (
    <div className="w-full h-screen pb-14 flex flex-col justify-between px-4 pt-28">
      <div className="flex flex-col gap-y-16 justify-center items-center">
        <Image src="/images/logo_3_black.png" alt="" width="200" height="45" />
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
      </div>
      <div className="w-full flex flex-col items-center">
        <Button
          mode="alive"
          func={handleLogin}
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
