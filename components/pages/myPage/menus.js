import { useRouter } from "next/router";
import ArrowRight from "icons/arrow_right_off.svg";
import { mypage_menus } from "constants/mypage";

const Menus = () => {
  const router = useRouter();

  const buttonCSS =
    "w-full h-fit flex justify-between items-center contentbox-border p-5 single-18-b cursor-pointer";
  const versionCSS =
    "w-full flex justify-between items-center bg-warmgray-30 p-5 rounded-lg single-18-b";
  return (
    <div className="w-full h-full flex flex-col gap-y-2.5 pt-8">
      {mypage_menus.map((menu) => {
        return (
          <div
            key={menu.id}
            className={buttonCSS}
            onClick={() => {
              router.push(menu.path);
            }}
          >
            {menu.name}
            <ArrowRight width="24" height="24" />
          </div>
        );
      })}
      <div className={versionCSS}>
        버전 <span className="block single-14-m">v1.0.0</span>
      </div>
    </div>
  );
};

export default Menus;
