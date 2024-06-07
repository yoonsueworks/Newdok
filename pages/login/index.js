import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

import { accessTokenAtom, userDatasAtom } from "service/atoms/atoms";
import { authSelector } from "service/atoms/selectors";
import { usePostLogin } from "service/hooks/login";

import BottomTextButtons from "components/pages/login/BottomTextButtons";
import PasswordChild from "shared/PasswordChild";
import AppBar from "shared/AppBar";
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

  const handlePrevClick = () => {
    if (isAuthenticated) {
      router.push("/home");
    } else {
      history.back();
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full xl:w-[768px] xl:p-28 md:py-28 md:px-10 h-screen pb-14 flex flex-col justify-between items-center px-5 pt-14">
        <div className="flex flex-col gap-y-16 content-between items-center h-full w-full">
          <Image
            src="/images/logo_3_black.png"
            alt=""
            width="200"
            height="45"
          />
          <form
            className="flex flex-col w-full sm:justify-between md:justify-start xl:justify-start gap-y-8 w-full h-full"
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={handleEnterKeyPress}
          >
            <div className="flex flex-col gap-y-4">
              <input
                {...register("loginId", {
                  required: true,
                  pattern: {
                    message: getErrorMessage(),
                  },
                })}
                placeholder={"아이디 입력"}
                className="input-border flex w-full h-fit rounded-lg p-4 h-fit single-16-m text-neutralgray-900"
                type="text"
                id="loginId"
                onChange={(e) => handleUserInfo(e)}
              />
              <div className="flex flex-col">
                <div className="input-border flex w-full h-fit rounded-lg p-4 h-fit single-16-m text-neutralgray-900">
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    maxLength="12"
                    placeholder={"비밀번호 입력"}
                    className="single-16-m h-full w-full"
                    type={pwVisible ? "text" : "password"}
                    id="password"
                    onChange={(e) => handleUserInfo(e)}
                  />
                  <PasswordChild setInputType={setPwVisible} type={pwVisible} />
                </div>
                <p className="text-error single-12-m">
                  {isRequested &&
                    "등록되지 않은 계정이거나, 아이디 혹은 비밀번호를 확인해주세요."}
                </p>
              </div>
            </div>
            <div className="h-fit w-full">
              <button
                type="submit"
                disabled={!userInfo.loginId || !userInfo.password}
                className="h-fit w-full p-5 mb-8 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
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
