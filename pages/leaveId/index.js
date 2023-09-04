import { useRouter } from "next/router";
import { useState } from "react";

import UserHistoryButton from "components/pages/leaveId/userHistoryButton";
import ReasonLeave from "components/pages/leaveId/reasonLeave";
import UserHistory from "components/pages/leaveId/userHistory";
import AppBar from "shared/AppBar";

import { leaveResearch } from "constants/leaveResearch";

const LeaveId = () => {
  const [process, setProcess] = useState(0);
  const [inqueries, setInqueries] = useState([]);
  const router = useRouter();

  const handleLeaveBtnClick = () => {
    // console.log(inqueries);
    // router.push("/");
    // TODO: 회원 탈퇴 API 연결
    // TODO: 아톰, 로컬 스토리지 삭제
  };

  const LeaveIdProcess = [
    {
      id: 1,
      page: <UserHistory />,
      button: <UserHistoryButton setProcess={setProcess} />,
    },
    {
      id: 2,
      page: (
        <ReasonLeave
          leaveResearch={leaveResearch}
          inqueries={inqueries}
          setInqueries={setInqueries}
        />
      ),
      button: (
        <button
          type="submit"
          className="w-full h-fit p-5 rounded-2xl bg-purple-700 single-24-b text-white active:bg-purple-800 hover:bg-purple-500 transition-colors duration-300 disabled:bg-neutralgray-500"
          disabled={inqueries.length < 1}
          onClick={handleLeaveBtnClick}
        >
          탈퇴 완료
        </button>
      ),
    },
  ];

  const handlePrevBtn = () => {
    if (process === 0) router.push("/userPage/myAccount");
    if (process === 1) setProcess(0);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="회원탈퇴"
            iconr={false}
            func={handlePrevBtn}
          />
        </div>
      </div>
      <div className="w-full h-full bg-beige-100 px-5 flex flex-col justify-between pt-24">
        <div className="w-full h-fit flex flex-col gap-y-7">
          {LeaveIdProcess[process]["page"]}
        </div>
        <div className="flex flex-col gap-y-4 pb-14">
          {LeaveIdProcess[process]["button"]}
        </div>
      </div>
    </>
  );
};

export default LeaveId;

// 회원 탈퇴 프로세스 2단계
