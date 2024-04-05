import { useRouter } from "next/router";

import ArrowRight from "icons/arrow_right_off.svg";

import { userPage_menus } from "constants/userPage";

const Menus = () => {
  const router = useRouter();

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center px-5 pt-8 xl:px-28">
      <div className="w-full grid gap-y-2.5 px-5">
        {userPage_menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="w-full h-fit flex justify-between items-center contentbox-border p-5 single-18-b cursor-pointer"
              onClick={() => {
                router.push(menu.path);
              }}
            >
              {menu.name}
              <ArrowRight width="24" height="24" />
            </div>
          );
        })}
        <div className="w-full flex justify-between items-center bg-warmgray-30 p-5 rounded-lg single-18-b">
          버전 <span className="block single-14-m">v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Menus;
