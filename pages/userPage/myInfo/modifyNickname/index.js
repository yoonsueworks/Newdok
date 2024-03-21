import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userDatasAtom, infoChangeSuccessAtom } from "service/atoms/atoms";
import { useModifyNickname } from "service/hooks/user";
import LocalStorage from "public/utils/LocalStorage";

import Background2 from "shared/Background2";
import InputLabel from "shared/InputLabel";
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
    nicknameInput: conditionControl.sameWithPreviousNickname
      ? "inputError-border"
      : !nickname || (nickname && conditionControl.specialsIncluded)
      ? "input-border"
      : "",
  };

  const getErrorMessage = () => {
    if (!nickname) return nicknameErrorMessage.error_nickname;
    if (nickname && !conditionControl.specialsIncluded)
      return nicknameErrorMessage.error_nickname;
    if (conditionControl.sameWithPreviousNickname)
      return "동일한 닉네임으로 변경할 수 없습니다.";
  };

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
            className="w-full h-full flex flex-col justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-y-2">
              <InputLabel htmlFor="nickname" text="닉네임" />
              <input
                {...register("nickname", {
                  required: true,
                  pattern: /^[\da-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,12}$/,
                })}
                maxLength="12"
                placeholder={userDatas.nickname}
                className={`rounded-lg p-4 single-16-m input-border placeholder:text-neutralgray-900 focus:inputFocused-border
                ${
                  conditionControl.sameWithPreviousNickname
                    ? "inputError-border"
                    : !nickname ||
                      (nickname && conditionControl.specialsIncluded)
                    ? "input-border"
                    : ""
                }`}
                id="nickname"
              />
              <p
                className={`single-12-m ${
                  conditionControl.sameWithPreviousNickname
                    ? "text-error"
                    : "text-neutralgray-500"
                }`}
              >
                {getErrorMessage()}
              </p>
            </div>
            <button
              type="submit"
              className="p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
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
