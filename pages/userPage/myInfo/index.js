import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import Background from "shared/Background";
import SettingIcon from "icons/setting_off.svg";
import AppBar from "shared/AppBar";

import { industries } from "constants/industries";

const MyInfo = () => {
  const router = useRouter();
  const userDatas = useRecoilValue(userDatasAtom);
  const { nickname, industryId } = userDatas;
  // TODO: 관심사 추가

  const MyInfoInputs = [
    {
      id: 1,
      title: "닉네임",
      placeholder: "",
      value: nickname,
      routeTo: router.asPath + "/modifyNickname",
    },
    {
      id: 2,
      title: "종사 산업",
      placeholder: "산업군을 설정해 주세요.",
      value: industryId ? industries[industryId - 1].name : "",
      routeTo: router.asPath + "/modifyIndustry",
    },
    {
      id: 3,
      title: "관심사",
      placeholder: "관심사를 설정해 주세요.",
      value: "관심사가 있으면 ? 관심사.map() : 없으면 인풋",
      routeTo: router.asPath + "/modifyInterest",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="프로필 편집"
            iconr={false}
            func={() => router.push("/userPage")}
          />
        </div>
      </div>
      <Background>
        <div className="w-full h-full pt-24 pb-14 flex flex-col gap-y-8">
          <div className="multiple-24-b">
            등록하신 정보에 맞춰
            <br />
            뉴스레터를 추천해 드려요.
          </div>
          <div className="flex flex-col gap-y-4">
            {MyInfoInputs.map((userInfo) => {
              return (
                <div key={userInfo.id} className="flex flex-col gap-y-2">
                  <div className="single-14-m text-purple-700">
                    {userInfo.title}
                  </div>
                  <div className="flex justify-between gap-x-2">
                    <input
                      className="w-full contentbox-border p-4 single-16-m text-neutralgray-900"
                      readOnly
                      placeholder={userInfo.placeholder}
                      value={userInfo.value}
                    />
                    <button
                      onClick={() => router.push(userInfo.routeTo)}
                      className="p-4 bg-purple-700 rounded-xl hover:bg-purple-500 active:bg-purple-800 transition-colors duration-300"
                    >
                      <SettingIcon width="24" height="24" fill="white" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Background>
    </>
  );
};

export default MyInfo;
