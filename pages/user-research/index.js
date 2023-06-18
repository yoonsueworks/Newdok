import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";

import Job from "./steps/Job";
import Interest from "./steps/Interest";
import Layout from "./steps/Layout";
import API from "../../config";

const user_research_pages = [
  {
    id: 1,
    header_1_1: "종사 중인 산업을",
    header_1_2: `선택해 주세요.`,
    caption: "선택하신 산업과 관련된 뉴스레터를 찾아드려요.",
    comp: <Job />,
  },
  {
    id: 2,
    header_1_1: "더 정확한 추천을 위해 ",
    header_1_2: "관심사를 선택해 주세요.",
    caption: "최소 3가지 이상을 선택해주세요.",
    comp: <Interest />,
  },
  {
    id: 3,
    header_1_1: "님을 위한 ",
    header_1_2: "맞춤형 뉴스레터가 도착했어요!",
    caption: "구독한 뉴스레터는 발행일에 맞춰 홈으로 배달해드려요.",
    comp: <Interest />,
    //TODO: comp 수정
  },
];

export default function UserResearch() {
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
        router.push("/subscription-b010");
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

  return <Layout infos={user_research_pages[step]} />;
}
