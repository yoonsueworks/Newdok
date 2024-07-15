import { useState } from "react";
import { useRouter } from "next/router";

import MessageModal from "shared/MessageModal";
import Nickname from "shared/Nickname";

import QuestionMarkIcon from "icons/ver1.0/question_mark_off.svg";
import SettingIcon from "icons/ver1.0/setting_off.svg";
import CopyIcon from "icons/ver3.0/Line Copy.svg";
import ListIcon from "icons/ver1.0/list_off.svg";

const Profile = ({ email, copyClipboard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const buttonCSS =
    "w-full h-fit p-4 justify-center items-center rounded-xl bg-white button-02 shadow-[inset_0_0px_0px_1px_#2866D3] text-blue-600 hover:bg-blue-50 active:bg-blue-100 cursor-pointer single-18-b transition-colors duration-300";

  const handleQuestionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center w-full pt-14 pb-8 px-5 bg-white xl:px-28">
      <div className="w-full grid gap-x-6 gap-y-6 flex">
        <div className="grid gap-y-4 xl:flex xl:justify-between">
          <div className="">
            <div className="title-m text-neutralgray-900 mb-3">
              <Nickname />
            </div>
            <div className="md:flex xl:flex">
              <div className="body-s gap-x-0.5 flex items-center text-neutralgray-700 mr-2 md:mb-1 sm:mb-1 xs:mb-1">
                <div>구독이메일</div>
                <button type="button" onClick={handleQuestionClick}>
                  <QuestionMarkIcon width="24" height="24" fill="#C0C0C0" />{" "}
                </button>
              </div>
              <div className="body-s flex gap-x-2 flex items-center">
                <div className="text-blue-600 ">{email}</div>
                <CopyIcon
                  width="20"
                  height="20"
                  onClick={copyClipboard}
                  color="#2866D3"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="md:w-full sm:w-full xs:w-full xl:w-fit flex justify-between gap-x-2.5">
            <button
              type="button"
              className={buttonCSS}
              onClick={() => {
                router.push("/userPage/myInfo");
              }}
            >
              프로필 편집
            </button>
          </div>
        </div>
        <MessageModal
          isOpen={isModalOpen}
          controlModal={setIsModalOpen}
          title="구독 이메일"
          titleSize="m"
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
