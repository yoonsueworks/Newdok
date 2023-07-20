import Button from "shared/Button";

const UserHistoryButton = () => {
  return (
    <>
      <div className="flex justify-between gap-x-8 py-3.5 text-neutralgray-900 items-center">
        <span className="block">
          탈퇴 후 등록된 정보는 모두 삭제되어 복구할 수 없음에 동의합니다.
        </span>
        <div className="w-6 h-6 bg-white shrink-0 border border-purple-700"></div>
      </div>
      <Button state="false" text="다음" size="big" />
    </>
  );
};

export default UserHistoryButton;
