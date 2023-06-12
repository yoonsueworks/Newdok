import { useState, useContext } from "react";
import { GlobalContext } from "pages/_app";

import Job from "components/pages/user-research/Job";
import Interest from "components/pages/user-research/Interest";

import { pages } from "constants/user_research_pages";
import { useResearchQuery } from "../../public/hooks/UserResearch";
import UserResearchLayout from "./steps/UserResearchLayout";

export default function UserResearch() {
  const [step, setStep] = useState(0);
  const [page, setPage] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [isActivated, setIsActivated] = useState(false);

  const [progress, setProgress] = useState(1);

  const value = useContext(GlobalContext);

  const comps = { 1: <Job />, 2: <Interest />, 3: <div>mailbox</div> };

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

  const queryParams = useResearchQuery(userInfos.industry, userInfos.interests);

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

  typeof window !== "undefined"
    ? sessionStorage.setItem("params", queryParams)
    : null;

  return <UserResearchLayout infos={pages[page]} comp={comps[page]} />;
}
