import { useState } from "react";
import { useRouter } from "next/router";

import MessageModal from "shared/MessageModal";
import Nickname from "shared/Nickname";

import QuestionMarkIcon from "icons/question_mark_off.svg";
import SettingIcon from "icons/setting_off.svg";
import CopyIcon from "icons/copy_off.svg";
import ListIcon from "icons/list_off.svg";

const Profile = ({ email, copyClipboard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const buttonCSS =
    "w-full p-3.5 flex gap-x-1 justify-center items-center rounded-[10px] bg-white shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 hover:bg-purple-50 active:bg-purple-100 cursor-pointer single-18-b transition-colors duration-300";

  const handleQuestionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center w-full pt-14 pb-8 px-5 bg-white xl:px-28">
      <div className="w-full px-5 grid gap-x-6 gap-y-6">
        <div className="grid gap-y-4">
          <div className="single-24-b text-neutralgray-900">
            <Nickname />
          </div>
          <div className="flex justify-between">
            <div className="single-18-b flex gap-x-0.5 items-center text-purple-700">
              <div>구독이메일</div>
              <button type="button" onClick={handleQuestionClick}>
                <QuestionMarkIcon width="24" height="24" fill="#9362A9" />{" "}
              </button>
            </div>
            <div className="single-18-m flex gap-x-2 flex items-center">
              <div className="text-neutralgray-900">{email}</div>
              <CopyIcon
                width="24"
                height="24"
                onClick={copyClipboard}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-2.5">
          <button
            type="button"
            className={buttonCSS}
            onClick={() => {
              router.push("/userPage/subscriptionList");
            }}
          >
            <ListIcon width="20" height="20" fill="#674188" /> 구독 리스트 보기
          </button>
          <button
            type="button"
            className={buttonCSS}
            onClick={() => {
              router.push("/userPage/myInfo");
            }}
          >
            <SettingIcon width="20" height="20" fill="#674188" /> 프로필 편집
          </button>
        </div>
        <MessageModal
          isOpen={isModalOpen}
          controlModal={setIsModalOpen}
          title="구독 이메일"
          info={[
            "회원가입 시 자동으로 생성되는 뉴스레터 구독을 위한 이메일 주소예요.",
            <div
              key={2}
              className="multiple-14-m bg-neutralgray-50 rounded-lg p-4 mt-4"
            >
              뉴독으로 아티클을 수신받으려면 뉴독이 발급하는 구독용 이메일
              주소로 구독을 신청해야 해요. 구독 이메일은 보통 이메일과 달리
              개인적인 용도로 사용하거나 발신하는 것이 불가능해요.
            </div>,
          ]}
          button={[]}
          pathTo="/join"
        />
      </div>
    </div>
  );
};

export default Profile;
