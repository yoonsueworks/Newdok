import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

import { accessTokenAtom, userDatasAtom } from "service/atoms/atoms";
import { authSelector } from "service/atoms/selectors";
import { usePostLogin } from "service/hooks/login";

import BottomTextButtons from "components/pages/login/BottomTextButtons";
import PasswordChild from "shared/PasswordChild";
import LocalStorage from "public/utils/LocalStorage";

import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ loginId: "", password: "" });
  const [pwVisible, setPwVisible] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const { mutate } = usePostLogin(userInfo);
  const [, setAccessToken] = useRecoilState(accessTokenAtom);
  const [, setUserDatas] = useRecoilState(userDatasAtom);
  const isAuthenticated = useRecoilValue(authSelector);

  const setLoggedInDatas = (data) => {
    setAccessToken(data.accessToken);
    setUserDatas(data.user);
    LocalStorage.setItem("NDtoken", data?.accessToken);
  };

  const onSubmit = async () => {
    await mutate(userInfo, {
      onSuccess: (data) => {
        setLoggedInDatas(data);
        router.push("/home");
      },
      onError: (error) => {
        setIsRequested(true);
        console.log(error);
      },
    });
  };

  const getErrorMessage = () => {
    if (!userInfo.password) return "";
  };

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  https: return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-full xl:w-[768px] xl:p-28 md:py-28 md:px-10 h-screen pb-14 flex flex-col justify-between items-center px-5 pt-14">
        <div className="flex flex-col gap-y-16 content-between items-center h-full w-full">
          <Image src="/images/logo-3.0.svg" alt="" width="200" height="45" />
          <form
            className="flex flex-col w-full sm:justify-between md:justify-start xl:justify-start gap-y-14 w-full h-full"
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={handleEnterKeyPress}
          >
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <span className="text-sm text-neutralgray-800">아이디</span>
                <input
                  {...register("loginId", {
                    required: true,
                    pattern: {
                      message: getErrorMessage(),
                    },
                  })}
                  placeholder={"아이디를 입력해주세요."}
                  className={`${
                    isRequested
                      ? "inputError-border inputError-fill text-error"
                      : "input-border text-neutralgray-600"
                  } flex w-full h-fit rounded-lg p-4 h-fit single-16-m input-01`}
                  type="text"
                  id="loginId"
                  onChange={(e) => handleUserInfo(e)}
                />
                <p className="text-error label-s">
                  {isRequested &&
                    "등록되지 않은 계정이거나, 아이디 혹은 비밀번호를 확인해주세요."}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-sm text-neutralgray-800">비밀번호</span>
                <div
                  className={`${
                    isRequested
                      ? "inputError-border inputError-fill text-error"
                      : "input-border text-neutralgray-600"
                  } flex w-full h-fit rounded-lg p-4 h-fit single-16-m input-01`}
                >
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    maxLength="12"
                    placeholder={"비밀번호를 입력해주세요."}
                    className="single-16-m h-full w-full bg-transparent"
                    type={pwVisible ? "text" : "password"}
                    id="password"
                    onChange={(e) => handleUserInfo(e)}
                  />
                  <PasswordChild setInputType={setPwVisible} type={pwVisible} />
                </div>
                <p className="text-error label-s">
                  {isRequested &&
                    "등록되지 않은 계정이거나, 아이디 혹은 비밀번호를 확인해주세요."}
                </p>
              </div>
            </div>
            <div className="h-fit w-full">
              <button
                type="submit"
                disabled={!userInfo.loginId || !userInfo.password}
                className="h-fit w-full p-4 mb-3 disabled:text-neutralgray-400 text-white bg-blue-600 rounded-xl focus:outline-none disabled:bg-neutralgray-200 button-03 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700"
              >
                로그인
              </button>
              <BottomTextButtons />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
