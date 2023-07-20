import { useRouter } from "next/router";
import { myaccount_menus } from "constants/mypage";
import ArrowRight from "icons/arrow_right_off.svg";
import LogOut from "icons/logout_off.svg";
import ButtonText from "../../../components/shared/ButtonText";

const MyAccount = () => {
  const router = useRouter();
  const buttonCSS =
    "w-full h-fit flex justify-between items-center bg-white border border-1 border-warmgray-30 p-5 rounded-lg single-18-b cursor-pointer";
  return (
    <div className="w-full h-full bg-beige-100 px-5 py-8 flex flex-col justify-between items-center">
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
      <ButtonText text="회원탈퇴" size="medium" />
    </div>
  );
};

export default MyAccount;
