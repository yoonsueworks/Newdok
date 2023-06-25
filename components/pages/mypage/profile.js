import { useRouter } from "next/router";
import Button from "shared/Button";
import CopyIcon from "icons/copy_off.svg";
import ListIcon from "icons/list_off.svg";
import SettingIcon from "icons/setting_off.svg";

const Profile = () => {
  const router = useRouter();
  const buttonCSS =
    "w-full p-3.5 flex gap-x-1 justify-center items-center rounded-[10px] bg-white shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 group-hover:bg-purple-50 group-active:bg-purple-100 cursor-pointer single-18-b";

  return (
    <div className="pt-14 pb-8 px-5 grid gap-x-6 gap-y-6 bg-white">
      <div className="grid gap-y-1">
        <div className="single-24-b text-purple-700">도커스</div>
        <div className="single-18-m flex gap-x-2 flex items-center">
          <div>newdok12@newdok.tbd</div>
          <CopyIcon width="24" height="24" />
        </div>
      </div>
      <div className="flex justify-between gap-x-2.5">
        <div className="group w-full">
          <button
            className={buttonCSS}
            onClick={() => {
              router.push("/myPage/subscriptionList");
            }}
          >
            <ListIcon width="20" height="20" fill="#674188" /> 구독 리스트 보기
          </button>
        </div>
        <div className="group w-full">
          <button
            className={buttonCSS}
            onClick={() => {
              router.push("/myPage/myInfo");
            }}
          >
            <SettingIcon width="20" height="20" fill="#674188" /> 프로필 편집
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
