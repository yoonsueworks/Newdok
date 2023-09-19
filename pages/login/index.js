import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { usePostLogin } from "service/hooks/login";
import { accessTokenAtom, userDatasAtom } from "service/atoms/atoms";

import AppBar from "shared/AppBar";
import PasswordChild from "shared/PasswordChild";
import BottomTextButtons from "components/pages/login/BottomTextButtons";
import LocalStorage from "../../public/utils/LocalStorage";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ loginId: "", password: "" });
  const [pwVisible, setPwVisible] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const { mutate } = usePostLogin(userInfo);
  const [, setAccessToken] = useRecoilState(accessTokenAtom);
  const [, setUserDatas] = useRecoilState(userDatasAtom);

  const setLoggedInDatas = (data) => {
    setAccessToken(data.accessToken);
    setUserDatas(data.user);

    LocalStorage.setItem("NDtoken", data?.accessToken);
    LocalStorage.setItem("NDnickname", data?.user.nickname);
    LocalStorage.setItem("NDuserDatas", JSON.stringify(data?.user));
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
    const referrer = document.referrer;
    if (referrer.includes("userPage")) {
      router.push("/home");
    } else {
      history.back();
    }
  };

  return (
    <>
      <AppBar
        iconl={true}
        textl={""}
        iconr={false}
        func={handlePrevClick}
        shadow={true}
      />
      <div className="w-full h-screen pb-14 flex flex-col justify-between px-5 pt-14 items-center">
        <div className="flex flex-col gap-y-16 content-between items-center h-full w-full">
          <Image
            src="/images/logo_3_black.png"
            alt=""
            width="200"
            height="45"
          />
          <form
            className="flex flex-col justify-between gap-y-4 w-full h-full"
            onSubmit={handleSubmit(onSubmit)}
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
              <div className="flex flex-col gap-y-2">
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
            <button
              type="submit"
              disabled={!userInfo.loginId || !userInfo.password}
              className="h-fit p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            >
              로그인
            </button>
          </form>
        </div>
        <BottomTextButtons />
      </div>
    </>
  );
};

export default SignIn;
