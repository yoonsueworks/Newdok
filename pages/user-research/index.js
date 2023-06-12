<<<<<<< HEAD
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
=======
<<<<<<<< HEAD:pages/onboarding/index.js
const Onboarding = () => {
  return (
    <>
      <div>carousel</div>
      <div>
        <div>시작하기 버튼 자리</div>
        <div>
          이미 계정이 있나요 <span>로그인 버튼</span>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
========
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
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
  const [userInfos, setUserInfos] = useState([]);
  const [isActivated, setIsActivated] = useState(false);

  const [progress, setProgress] = useState(1);
<<<<<<< HEAD

  const value = useContext(GlobalContext);

  const comps = { 1: <Job />, 2: <Interest />, 3: <div>mailbox</div> };
=======
  const router = useRouter();

  const value = useContext(GlobalContext);
  const { intersection, setIntersection, union, setUnion } =
    useContext(GlobalContext);
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)

  const handleProgress = (condition) => {
    condition === true
      ? setProgress((prev) => Number.parseInt(prev) + 1)
      : setProgress((prev) => Number.parseInt(prev) - 2);
  };

  const handleProgressWithOption = (num) => {
    num > 0 && setProgress((prev) => num);
  };

  const clickNext = () => {
<<<<<<< HEAD
    setPage((prev) => prev + 1);
=======
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
    setStep(step + 1);
    handleProgressWithOption(3);
  };

  const clickBefore = () => {
<<<<<<< HEAD
    setPage((prev) => prev - 1);
=======
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
    setStep(step - 1);
    handleProgress(false);
    value.resetUserInterests();
  };

<<<<<<< HEAD
  const queryParams = useResearchQuery(userInfos.industry, userInfos.interests);
=======
  const loadMainAfterSplash = () => {
    router.push("/loadingSplash");

    const timeout = setTimeout(() => {
      router.push("/home");
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
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)

  value.clickNext = clickNext;
  value.clickBefore = clickBefore;
  value.userInfos = userInfos;
  value.setUserInfos = setUserInfos;
  value.setIsActivated = setIsActivated;
  value.isActivated = isActivated;
  value.progress = progress;
  value.handleProgress = handleProgress;
  value.handleProgressWithOption = handleProgressWithOption;
<<<<<<< HEAD
  value.research = queryParams;
  value.setPage = setPage;

  typeof window !== "undefined"
    ? sessionStorage.setItem("params", queryParams)
    : null;

  return <UserResearchLayout infos={pages[page]} comp={comps[page]} />;
}
=======
  value.fetchDatas = fetchDatas;

  typeof window !== "undefined"
    ? sessionStorage.setItem("params", params)
    : null;

  return <Layout infos={user_research_pages[step]} />;
}
>>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch):pages/user-research/index.js
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
