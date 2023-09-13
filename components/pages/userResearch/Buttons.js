import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useRecoilState } from "recoil";
import { userDatasAtom, userResearchAtom } from "service/atoms/atoms";
import { useGetUserResearch } from "service/hooks/user";

import Button from "shared/Button";

const Buttons = ({ infos }) => {
  const value = useContext(GlobalContext);
  const { clickNext, isActivated, research, setResponseData } = value;
  const router = useRouter();

  const [, setUserDatas] = useRecoilState(userDatasAtom);
  const resetResearchValues = useRecoilState(userResearchAtom);
  const { refetch } = useGetUserResearch(research);

  const handleGetResultClick = async () => {
    const result = await refetch();
    if (result.isSuccess) {
      setUserDatas(result?.data?.user);
      setResponseData(result?.data?.data);
      clickNext();
    }
    if (result.isError) {
      alert(
        "회원가입 시 사전조사를 하신 회원의 경우 마이페이지에서 산업군, 관심사 변경이 가능합니다."
      );
      router.push("/userPage/myInfo");
    }
  };

  const handleGoToMain = () => {
    resetResearchValues();
    router.push("/home");
  };

  return (
    <div className="px-5">
      {infos?.id === 1 ? (
        <Button
          mode="default"
          text="시작하기"
          state={true}
          size="big"
          func={clickNext}
        />
      ) : infos?.id === 2 ? (
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
      ) : infos?.id === 3 ? (
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
          text="메인으로"
          state={true}
          size="big"
          func={handleGoToMain}
        />
      )}
    </div>
  );
};

export default Buttons;
