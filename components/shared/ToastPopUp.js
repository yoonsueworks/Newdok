import Copied from "icons/check_off.svg";

const ToastPopUp = () => {
  return (
    <div className="w-full p-5 z-1000">
      <div className="w-full p-4 rounded-lg bg-purple-400 text-white flex gap-x-2 single-16-b elevation-1-bottom items-center">
        <Copied width="24" height="24" stroke="white" />
        {MESSAGE.mailCopied && <div>내 구독용 이메일 주소가 복사됐어요.</div>}
      </div>
    </div>
  );
};

export default ToastPopUp;

const MESSAGE = {
  mailCopied: "내 구독용 이메일 주소가 복사됐어요.",
  nicknameChanged: "닉네임이 변경되었습니다.",
  industryChanged: "종사 산업이 변경되었습니다.",
  interestChanged: "관심사가 변경되었습니다.",
  phoneNumberChanged: "휴대폰 번호가 변경되었습니다.",
  pwChanged: "비밀번호가 변경되었습니다.",
};
