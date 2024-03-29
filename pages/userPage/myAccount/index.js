import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useResetRecoilState, useRecoilState } from "recoil";
import {
  userDatasAtom,
  accessTokenAtom,
  infoChangeSuccessAtom,
} from "service/atoms/atoms";

import MessageModal from "shared/MessageModal";
import Background2 from "shared/Background2";
import ToastPopUp from "shared/ToastPopUp";
import ButtonText from "shared/ButtonText";
import AppBar from "shared/AppBar";
import ArrowRight from "icons/arrow_right_off.svg";
import LogOut from "icons/logout_off.svg";

import { myaccount_menus } from "constants/userPage";

const MyAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const resetUserDatas = useResetRecoilState(userDatasAtom);
  const resetAccessToken = useResetRecoilState(accessTokenAtom);
  const [infoChangeSuccess, setInfoChangeSuccess] = useRecoilState(
    infoChangeSuccessAtom
  );
  const router = useRouter();
  const buttonCSS =
    "w-full h-fit flex justify-between items-center contentbox-border p-5 single-18-b cursor-pointer";

  const routeTo = (path) => {
    router.push(path);
  };

  const handleLogOut = () => {
    /* 로컬 스토리지 삭제 */
    localStorage.clear();

    /* 아톰 초기화 */
    resetUserDatas();
    resetAccessToken();

    setIsModalOpen(false);
    router.push("/");
  };

  /* 요청 성공 시 infoChangeSuccess 변화에 따라 토스트 팝업 노출 */
  useEffect(() => {
    if (infoChangeSuccess) {
      setIsToastVisible(true);
      setTimeout(() => {
        setIsToastVisible(false);
        setInfoChangeSuccess("");
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background2>
      <div className="h-full relative w-full">
        <div className="absolute top-0 w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="계정 관리"
            iconr={false}
            func={() => router.push("/userPage")}
          />
        </div>
        <div className="pt-24 h-full flex flex-col justify-between items-center pb-14">
          <div className="gap-y-2.5 grid w-full px-5 ">
            {myaccount_menus.map(({ id, name, path }) => {
              return (
                <div
                  key={id}
                  className={buttonCSS}
                  onClick={() => {
                    id !== 3 ? routeTo(path) : setIsModalOpen(true);
                  }}
                >
                  {name}
                  {id !== 3 ? (
                    <ArrowRight width="24" height="24" />
                  ) : (
                    <LogOut width="24" height="24" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-full">
            <ToastPopUp
              toastMessage={infoChangeSuccess}
              isVisible={isToastVisible}
            />
          </div>
          {/* 베타 테스트 기간에는 회원탈퇴 기능 비활성화 */}
          {/* <ButtonText
            text="회원탈퇴"
            size="medium"
            func={() => {
              router.push("/leaveId");
            }}
          /> */}
        </div>
      </div>
      <MessageModal
        isOpen={isModalOpen}
        controlModal={() => setIsModalOpen(false)}
        title="로그아웃"
        info={["로그아웃할까요?"]}
        button={
          <button
            type="submit"
            className="w-full p-4 rounded-xl shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 bg-white single-20-b transition-colors duration-300 hover:bg-purple-50 active:bg-purple-100 mt-5"
            onClick={handleLogOut}
          >
            확인
          </button>
        }
      />
    </Background2>
  );
};

export default MyAccount;
