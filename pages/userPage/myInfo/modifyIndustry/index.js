import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  userDatasAtom,
  userResearchAtom,
  infoChangeSuccessAtom,
} from "service/atoms/atoms";
import { useModifyIndustry } from "service/hooks/user";
import LocalStorage from "public/utils/LocalStorage";

import IndustryDropDown from "shared/IndustryDropDown";
import Background2 from "shared/Background2";
import AppBar from "shared/AppBar";

const ModifyIndustry = () => {
  const router = useRouter();
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const [userResearch, setUserResearch] = useRecoilState(userResearchAtom);
  const [infoChangeSuccess, setInfoChangeSuccess] = useRecoilState(
    infoChangeSuccessAtom
  );

  const { mutate } = useModifyIndustry();

  const submitIndustryModify = async (e) => {
    e.preventDefault();
    const body = { industryId: userResearch.industryId };
    await mutate(body, {
      onSuccess: (data) => {
        setUserDatas(data);
        LocalStorage.setItem("NDuserDatas", data);
        setInfoChangeSuccess("industryChanged");
        router.push("/userPage/myInfo");
      },
      onError: () => {
        alert("종사 산업군 변경에 실패했습니다.");
      },
    });
  };

  return (
    <div className="pb-16 w-full h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="종사 산업 변경"
            iconr={false}
            func={() => router.push("/userPage/myInfo")}
          />
        </div>
      </div>
      <Background2>
        <div className="w-full h-full mt-16 pt-8 px-5 pb-14">
          <form className="w-full h-full flex flex-col justify-between">
            <IndustryDropDown />
            <button
              type="submit"
              className="p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
              disabled={
                !userResearch.industryId ||
                userResearch.industryId === (undefined || userDatas.industryId)
              }
              onClick={submitIndustryModify}
            >
              변경하기
            </button>
          </form>
        </div>
      </Background2>
    </div>
  );
};

export default ModifyIndustry;
