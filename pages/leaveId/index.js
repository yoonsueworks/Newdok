import Button from "shared/Button";
import UserHistory from "components/pages/leaveId/userHistory";
import UserHistoryButton from "components/pages/leaveId/userHistoryButton";
import ReasonLeave from "../../components/pages/leaveId/reasonLeave";
import { leaveResearch } from "constants/leaveResearch";

const LeaveId = () => {
  return (
    <div className="w-full h-full bg-beige-100 px-5 flex flex-col justify-between">
      {/* 여기서부터 상단 안내, 탈퇴 이유 설문 자리 */}
      <div className="w-full h-fit flex flex-col gap-y-7">
        {/* 프로세스 1단계 */}
        <UserHistory />
        {/* 프로세스 2단계 */}
        {/* <ReasonLeave leaveResearch={leaveResearch} /> */}
      </div>
      {/* 여기서부터 하단 탈퇴 동의 항목 & 버튼 자리 */}
      <div className="flex flex-col gap-y-4 pb-14">
        {/* 프로세스 1단계 */}
        <UserHistoryButton />
        {/* 프로세스 2단계 */}
        {/* <Button text="탈퇴 완료" size="big" /> */}
      </div>
    </div>
  );
};

export default LeaveId;

// 회원 탈퇴 프로세스 2단계
