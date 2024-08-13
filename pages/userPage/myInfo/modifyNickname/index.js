import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userDatasAtom, infoChangeSuccessAtom } from "service/atoms/atoms";
import { useModifyNickname } from "service/hooks/user";
import LocalStorage from "public/utils/LocalStorage";

import Background2 from "shared/Background2";
import InputLabel2 from "shared/InputLabel2";
import AppBar from "shared/AppBar";

import { nicknameErrorMessage } from "constants/join";

const ModifyNickname = () => {
  const router = useRouter();
  const { mutate } = useModifyNickname();
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const [, setInfoChangeSuccess] = useRecoilState(infoChangeSuccessAtom);

  const { register, handleSubmit, watch } = useForm({});
  const nickname = watch("nickname");

  const onSubmit = async () => {
    const body = { nickname: nickname };
    await mutate(body, {
      onSuccess: (data) => {
        setUserDatas(data);
        LocalStorage.setItem("NDnickname", nickname);
        LocalStorage.setItem("NDuserDatas", data);
        router.push("/userPage/myInfo");
        setInfoChangeSuccess("nicknameChanged");
      },
      onError: (error) => {
        if (error.response.status === 401) {
          alert("만료된 토큰입니다.");
          router.push("/login");
        }
      },
    });
  };

  const specials = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]*$/;

  const conditionControl = {
    specialsIncluded: specials.test(nickname),
    sameWithPreviousNickname: userDatas.nickname === nickname,
    nicknameInput:
      userDatas.nickname === nickname
        ? "inputError-border"
        : !nickname || (nickname && specials.test(nickname))
        ? "input-border"
        : "",
  };

  const getErrorMessage = () => {
    if (!nickname) return nicknameErrorMessage.modify_nickname;
    if (nickname && !conditionControl.specialsIncluded)
      return nicknameErrorMessage.error_nickname;
    if (conditionControl.sameWithPreviousNickname)
      return "동일한 닉네임으로 변경할 수 없습니다.";
  };

  console.log(nickname);

  return (
    <div className="pb-16 w-full h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="닉네임 변경"
            iconr={false}
            func={() => router.push("/userPage/myInfo")}
          />
        </div>
      </div>
      <Background2>
        <div className="w-full h-full my-16 pb-14 pt-8 px-5">
          <form
            className="w-full h-full flex flex-col gap-y-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-y-2">
              <InputLabel2 htmlFor="nickname" text="닉네임" />
              <input
                {...register("nickname", {
                  required: true,
                  pattern: /^[\da-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,12}$/,
                })}
                maxLength="12"
                placeholder={userDatas.nickname}
                className={`rounded-xl p-4 input-01 input-border placeholder:text-neutralgray-800 focus:inputFocused-border bg-transparent 
                ${
                  !nickname
                    ? ""
                    : nickname && conditionControl.sameWithPreviousNickname
                    ? "inputError-border focus:inputError-border"
                    : !nickname || !conditionControl.specialsIncluded
                    ? "inputError-border focus:inputError-border"
                    : ""
                }`}
                id="nickname"
              />
              <p
                className={`label-s ${
                  conditionControl.sameWithPreviousNickname ||
                  !conditionControl.specialsIncluded
                    ? "text-error"
                    : "text-neutralgray-700"
                }`}
              >
                {getErrorMessage()}
              </p>
            </div>
            <button
              type="submit"
              className="p-5 text-white bg-blue-600 rounded-xl focus:outline-none disabled:text-neutralgray-400 disabled:bg-neutralgray-200 button-03 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700"
              disabled={
                nickname?.length < 1 ||
                conditionControl.sameWithPreviousNickname
              }
            >
              변경하기
            </button>
          </form>
        </div>
      </Background2>
    </div>
  );
};
export default ModifyNickname;
