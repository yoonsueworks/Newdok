import { useRouter } from "next/router";

import Background from "shared/Background";
import ButtonText from "shared/ButtonText";
import ArrowRight from "icons/arrow_right_off.svg";
import LogOut from "icons/logout_off.svg";

import { myaccount_menus } from "constants/userPage";

const MyAccount = () => {
  const router = useRouter();
  const buttonCSS =
    "w-full h-fit flex justify-between items-center contentbox-border p-5 single-18-b cursor-pointer";
  return (
    <Background>
      <div className="h-full flex flex-col justify-between items-center pb-14 pt-8">
        <div className="gap-y-2.5 grid w-full">
          {myaccount_menus.map((menu) => {
            return (
              <div
                key={menu.id}
                className={buttonCSS}
                onClick={() => {
                  router.push(menu.path);
                }}
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
    </Background>
  );
};

export default MyAccount;
