import { useState, useContext } from "react";
import { GlobalContext } from "../_app";
import Job from "./steps/Job";
import Interest from "./steps/Interest";
import Layout from "./steps/Layout";

const pages = [
  {
    id: 1,
    display: "반가워요",
    headline: `뉴스레터 추천을 위해 종사 중인 산업을 선택해 주세요.`,
    caption: "",
    comp: <Job />,
  },
  {
    id: 2,
    display: "거의 다 왔어요!💪",
    headline: "더 정확한 추천을 위해 관심사를 선택해 주세요.",
    caption: " (최대 3개)",
    comp: <Interest />,
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [isActivated, setIsActivated] = useState(false);
  const [progress, setProgress] = useState(1);
  const value = useContext(GlobalContext);

  const handleProgress = (condition) => {
    condition === true
      ? setProgress((prev) => Number.parseInt(prev) + 1)
      : setProgress((prev) => Number.parseInt(prev) - 2);
  };

  const handleProgressWithOption = (num) => {
    num > 0 && setProgress((prev) => num);
  };

  const clickNext = () => {
    setStep(step + 1);
    handleProgressWithOption(3);
  };

  const clickBefore = () => {
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

  return <Layout infos={pages[step]} />;
}
