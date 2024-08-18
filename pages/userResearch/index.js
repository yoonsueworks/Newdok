import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useResearchQuery } from "public/hooks/UserResearch";
import { GlobalContext } from "pages/_app";

import ArrivedBrands from "components/pages/userResearch/ArrivedBrands";
import IndustryInterest from "components/pages/userResearch/IndustryInterest";
import UserResearchLayout from "./steps/UserResearchLayout";
import IndustryDropDown from "shared/IndustryDropDown";

import { pages } from "constants/user_research_pages";

export default function UserResearch() {
  const router = useRouter();

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
    1: <></>,
    2: <IndustryInterest />,
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

  return <UserResearchLayout infos={pages[page]} comp={comps[page]} />;
}
