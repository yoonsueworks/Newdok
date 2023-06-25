import { useState } from "react";

import { useRouter } from "next/router";

import HomeOff from "icons/home_off.svg";
import HomeOn from "icons/home_on.svg";
import MailBoxOff from "icons/mail_box_off.svg";
import MailBoxOn from "icons/mail_box_on.svg";
import ProfileOff from "icons/profile_off.svg";
import ProfileOn from "icons/profile_on.svg";

const Nav = () => {
  const router = useRouter();
  const [clickedMenu, setClickedMenu] = useState(2);

  const liCSS =
    "list-none text-center flex flex-col gap-y-1 justify-center align-center items-center single-12-m";
  const clickedCSS = (id) =>
    clickedMenu === id ? "text-purple-700 font-bold" : "text-warmgray-100 ";

  const clickMenu = (menu) => {
    setClickedMenu(menu.id);
    router.push(menu.path);
  };

  return (
    <div className="w-full h-fit bg-white absolute bottom-0 grid grid-cols-3 elevation-2-top pt-3.5 pb-5">
      {NAV_MENUS.map((menu) => {
        return (
          <li className={liCSS} key={menu.id} onClick={() => clickMenu(menu)}>
            <div>
              {clickedMenu === menu.id ? menu.state_on : menu.state_off}
            </div>
            <span className={clickedCSS(menu.id)}>{menu.name_kr}</span>
          </li>
        );
      })}
    </div>
  );
};

export default Nav;

const MENU_NAMES = {
  RECOMMENDED: "recommended",
  HOME: "home",
  MYPAGE: "mypage",
};

const NAV_MENUS = [
  {
    id: 1,
    name_kr: "둘러보기",
    name_eng: MENU_NAMES.RECOMMENDED,
    state_on: <MailBoxOn width="32" height="32" />,
    state_off: <MailBoxOff width="32" height="32" />,
    path: "/lookaround",
  },
  {
    id: 2,
    name_kr: "홈",
    name_eng: MENU_NAMES.HOME,
    state_on: <HomeOn width="32" height="32" />,
    state_off: <HomeOff width="32" height="32" />,
    path: "/home",
  },
  {
    id: 3,
    name_kr: "마이페이지",
    name_eng: MENU_NAMES.MYPAGE,
    state_on: <ProfileOn width="32" height="32" />,
    state_off: <ProfileOff width="32" height="32" />,
    path: "/myPage",
  },
];
