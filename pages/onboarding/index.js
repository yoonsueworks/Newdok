import { useState, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";

import Job from "./steps/Job";
import Interest from "./steps/Interest";
import Layout from "./steps/Layout";
import API from "../../config";

const pages = [
  {
    id: 1,
    display: "반가워요👋",
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
  const router = useRouter();

  const value = useContext(GlobalContext);
  const { intersection, setIntersection, union, setUnion } =
    useContext(GlobalContext);

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

  const loadMainAfterSplash = () => {
    router.push("/loadingSplash");

    const timeout = setTimeout(() => {
      router.push("/main");
    }, 2500);

    return () => clearTimeout(timeout);
  };

  const queryParams = {
    industry: userInfos.industry,
    interest: userInfos.interests || [],
  };

  const params = Object.entries(queryParams)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join("&");
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");

  const fetchDatas = () => {
    fetch(`${API.recommend}${params}`)
      .then((res) => res.json())
      .then((res) => {
        setIntersection(res.intersection);
        setUnion(res.union);
      })
      .finally(() => {
        loadMainAfterSplash();
      });
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
  value.fetchDatas = fetchDatas;

  typeof window !== "undefined"
    ? sessionStorage.setItem("params", params)
    : null;

  return <Layout infos={pages[step]} />;
}
