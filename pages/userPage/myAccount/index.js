import { useRouter } from "next/router";
import { useContext } from "react";

import Background2 from "shared/Background2";
import ButtonText from "shared/ButtonText";
import ArrowRight from "icons/arrow_right_off.svg";
import LogOut from "icons/logout_off.svg";

import AppBar from "shared/AppBar";
import { myaccount_menus } from "constants/userPage";
import LocalStorage from "../../../public/utils/LocalStorage";
import { GlobalContext } from "pages/_app";

const MyAccount = () => {
  const { setToken } = useContext(GlobalContext);
  const router = useRouter();
  const buttonCSS =
    "w-full h-fit flex justify-between items-center contentbox-border p-5 single-18-b cursor-pointer";

  const routeTo = (path) => {
    router.push(path);
  };

  const deleteToken = () => LocalStorage.removeItem("NDtoken");
  const deleteNickname = () => LocalStorage.removeItem("NDNickname");
  const deleteUserDatas = () => LocalStorage.removeItem("NDUserDatas");

  const handleLogOut = () => {
    localStorage.clear();
    deleteToken();
    deleteNickname();
    deleteUserDatas();
    routeTo("/login");
  };

  return (
    <Background2>
      <div className="h-full relative w-full">
        <div className="absolute top-0 w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="계정 관리"
            iconr={false}
            func={() => history.back()}
          />
        </div>
        <div className="pt-24 h-full px-5 flex flex-col justify-between items-center pb-14">
          <div className="gap-y-2.5 grid w-full">
            {myaccount_menus.map((menu) => {
              return (
                <div
                  key={menu.id}
                  className={buttonCSS}
                  onClick={
                    menu.id !== 3 ? () => routeTo(menu.path) : handleLogOut
                  }
                >
                  {menu.name}
                  {menu.id !== 3 ? (
                    <ArrowRight width="24" height="24" />
                  ) : (
                    <LogOut width="24" height="24" />
                  )}
                </div>
              );
            })}
          </div>
          <ButtonText
            text="회원탈퇴"
            size="medium"
            func={() => {
              router.push("/leaveId");
            }}
          />
        </div>
      </div>
    </Background2>
  );
};

export default MyAccount;
