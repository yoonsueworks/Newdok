import { useState, useContext } from "react";
import { GlobalContext } from "pages/_app";
import Image from "next/image";

import Job from "components/pages/userResearch/Job";
import Interest from "components/pages/userResearch/Interest";
import ArrivedBrands from "components/pages/userResearch/ArrivedBrands";

import { pages } from "constants/user_research_pages";
import { useResearchQuery } from "../../public/hooks/UserResearch";
import UserResearchLayout from "./steps/UserResearchLayout";

export default function UserResearch() {
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
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
    2: <Job />,
    3: <Interest />,
    4: <ArrivedBrands />,
  };

  const handleProgress = (condition) => {
    condition === true
      ? setProgress((prev) => Number.parseInt(prev) + 1)
      : setProgress((prev) => Number.parseInt(prev) - 2);
  };

  const handleProgressWithOption = (num) => {
    num > 0 && setProgress((prev) => num);
  };

  const clickNext = () => {
    setPage((prev) => prev + 1);
    setStep(step + 1);
    handleProgressWithOption(3);
  };

  const clickBefore = () => {
    setPage((prev) => prev - 1);
    setStep(step - 1);
    handleProgress(false);
    value.resetUserInterests();
  };

  value.clickNext = clickNext;
  value.clickBefore = clickBefore;
  value.userInfos = userInfos;
  value.setUserInfos = setUserInfos;
  value.setIsActivated = setIsActivated;
  value.isActivated = isActivated;
  value.progress = progress;
  value.handleProgress = handleProgress;
  value.handleProgressWithOption = handleProgressWithOption;
  value.research = queryParams;
  value.setPage = setPage;
  value.page = page;

  return <UserResearchLayout infos={pages[page]} comp={comps[page]} />;
}
