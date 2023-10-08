import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userDatasAtom, userResearchAtom } from "service/atoms/atoms";
import { useGetUserResearch } from "service/hooks/user";

import Button from "shared/Button";
import LocalStorage from "../../../public/utils/LocalStorage";

const Buttons = ({ infos }) => {
  const value = useContext(GlobalContext);
  const { clickNext, isActivated, research, setResponseData } = value;
  const router = useRouter();

  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const resetResearchValues = useResetRecoilState(userResearchAtom);
  const { refetch } = useGetUserResearch(research);

  const handleGetResultClick = async () => {
    const result = await refetch();
    if (result.isSuccess) {
      console.log(result);
      LocalStorage.setItem("NDuserDatas", result?.data?.user);
      LocalStorage.setItem("NDtoken", result?.data?.accessToken);
      // 요청 성공 시 로컬스토리지 설정

      setUserDatas(result?.data?.user);
      setResponseData(result?.data?.data);
      clickNext();
      console.log(result.isError);
      return;
    }
  };

  const handleGoToMain = () => {
    resetResearchValues();
    router.push("/home");
  };

  return (
    <div className="px-5">
      {infos?.id === 2 ? (
        <Button
          mode="default"
          text="시작하기"
          state={true}
          size="big"
          // func={testfunc}
          func={clickNext}
        />
      ) : infos?.id === 3 ? (
        <div>
          <Button
            mode="alive"
            func={clickNext}
            state={isActivated}
            size="big"
            text="다음"
            onboarding="산업군을"
          />
        </div>
      ) : infos?.id === 4 ? (
        <div className="flex space-x-4">
          <Button
            mode="alive"
            func={handleGetResultClick}
            state={isActivated}
            size="big"
            text="다음"
            onboarding="관심사를"
          />
        </div>
      ) : (
        <Button
          mode="ghost"
          text="다음"
          state={true}
          size="big"
          func={clickNext}
        />
      )}
    </div>
  );
};

export default Buttons;
