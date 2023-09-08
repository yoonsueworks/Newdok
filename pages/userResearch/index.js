import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useResearchQuery } from "public/hooks/UserResearch";
import { GlobalContext } from "pages/_app";

import ArrivedBrands from "components/pages/userResearch/ArrivedBrands";
import Interest from "components/pages/userResearch/Interest";
import UserResearchLayout from "./steps/UserResearchLayout";
import IndustryDropDown from "shared/IndustryDropDown";

import { pages } from "constants/user_research_pages";

export default function UserResearch() {
  const router = useRouter();
  // const [page, setPage] = useState(4);
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(0);
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const [userInfos, setUserInfos] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [isActivated, setIsActivated] = useState(false);
  const [progress, setProgress] = useState(1);
  const queryParams = useResearchQuery(userInfos.industry, userInfos.interests);

  const value = useContext(GlobalContext);

  const comps = {
    1: (
      <div className="w-full">
        <Image
          src="/images/signup_300.png"
          alt="사용자 정보와 관련된 일러스트"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    ),
    2: <IndustryDropDown />,
    3: <Interest />,
    4: <ArrivedBrands />,
  };

  const handleProgress = (condition) => {
    
    condition === true
      ? setProgress((prev) => Number.parseInt(prev) + 1)
      : setProgress((prev) => Number.parseInt(prev) - 1);
  };

  const clickNext = () => {
    setPage((prev) => prev + 1);
    setStep(step + 1);
    handleProgress(true);
  };

  const clickBefore = () => {
    setPage((prev) => prev - 1);
    setStep(step - 1);
    handleProgress(false);
    value?.resetUserInterests();
  };

  value.clickNext = clickNext;
  value.clickBefore = clickBefore;
  value.userInfos = userInfos;
  value.setUserInfos = setUserInfos;
  value.responseData = responseData;
  value.setResponseData = setResponseData;
  value.setIsActivated = setIsActivated;
  value.isActivated = isActivated;
  value.progress = progress;
  value.handleProgress = handleProgress; // setProgress
  value.research = queryParams;
  value.setPage = setPage;
  value.page = page;

  // useEffect(() => {
  //   if (userDatas.industryId !== null) {
  //     alert(
  //       "회원가입 시 사전조사를 하신 회원의 경우 마이페이지에서 산업군, 관심사 변경이 가능합니다."
  //     );
  //     router.push("/userPage/myInfo");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <UserResearchLayout infos={pages[page]} comp={comps[page]} />;
}
