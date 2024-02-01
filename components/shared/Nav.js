import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { atom, useRecoilState } from "recoil";
import { userDatasAtom, accessTokenAtom } from "service/atoms/atoms";

import HomeOff from "icons/home_off.svg";
import HomeOn from "icons/home_on.svg";
import MailBoxOff from "icons/mail_box_off.svg";
import MailBoxOn from "icons/mail_box_on.svg";
import ProfileOff from "icons/profile_off.svg";
import ProfileOn from "icons/profile_on.svg";

const Nav = () => {
  const router = useRouter();
  const [page, setPage] = useState(null);

  const hasBrowseAll = router.pathname === "/browseAll";
  const hasManageSubscription = router.pathname === "/manageSubscription";
  const hasHome = router.pathname === "/home";
  const hasBookmark = router.pathname === "/bookmark";
  const hasUserPage = router.pathname.includes("/userPage");

  const clickMenu = (menu) => {
    setPage(menu.id);
    router.push(menu.path);
  };

  useEffect(() => {
    if (hasBrowseAll) {
      setPage(1);
    } else if (hasManageSubscription) {
      setPage(2);
    } else if (hasHome) {
      setPage(3);
    } else if (hasBookmark) {
      setPage(4);
    } else if (hasUserPage) {
      setPage(5);
    }
  }, [hasBrowseAll, hasHome, hasUserPage, hasManageSubscription, hasBookmark]);

  return (
    <div className=" sm:h-fit sm:sticky sm:bottom-0 md:w-fit md:h-full md:flex md:flex-col bg-white grid grid-cols-5 elevation-2-top pt-3.5 pb-5">
      {NAV_MENUS.map((menu) => {
        return (
          <li
            className="list-none text-center flex flex-col gap-y-1 justify-center align-center items-center single-12-m"
            key={menu.id}
            onClick={() => clickMenu(menu)}
          >
            <div>{page === menu.id ? menu.state_on : menu.state_off}</div>
            <span
              className={
                page === menu.id
                  ? "text-purple-700 font-bold"
                  : "text-warmgray-100 "
              }
            >
              {menu.name_kr}
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default Nav;

const MENU_NAMES = {
  RECOMMENDED: "recommended",
  MANAGESUBSCRIPTION: "manageSubscription",
  HOME: "home",
  BOOKMARK: "bookmark",
  userPage: "userPage",
};

const NAV_MENUS = [
  {
    id: 1,
    name_kr: "둘러보기",
    name_eng: MENU_NAMES.RECOMMENDED,
    state_on: <MailBoxOn width="32" height="32" />,
    state_off: <MailBoxOff width="32" height="32" />,
    path: "/browseAll",
  },
  {
    id: 2,
    name_kr: "구독관리",
    name_eng: MENU_NAMES.MANAGESUBSCRIPTION,
    state_on: <HomeOn width="32" height="32" />,
    state_off: <HomeOff width="32" height="32" />,
    path: "/manageSubscription",
  },
  {
    id: 3,
    name_kr: "홈",
    name_eng: MENU_NAMES.HOME,
    state_on: <HomeOn width="32" height="32" />,
    state_off: <HomeOff width="32" height="32" />,
    path: "/home",
  },
  {
    id: 4,
    name_kr: "북마크함",
    name_eng: MENU_NAMES.BOOKMARK,
    state_on: <HomeOn width="32" height="32" />,
    state_off: <HomeOff width="32" height="32" />,
    path: "/home",
  },
  {
    id: 5,
    name_kr: "마이페이지",
    name_eng: MENU_NAMES.userPage,
    state_on: <ProfileOn width="32" height="32" />,
    state_off: <ProfileOff width="32" height="32" />,
    path: "/userPage",
  },
];
