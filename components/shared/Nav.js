import { useEffect } from "react";
import { useRouter } from "next/router";
import { atom, useRecoilState } from "recoil";
import { userCurrentPlaceAtom } from "service/atoms/atoms";

import HomeOff from "icons/home_off.svg";
import HomeOn from "icons/home_on.svg";
import MailBoxOff from "icons/mail_box_off.svg";
import MailBoxOn from "icons/mail_box_on.svg";
import ProfileOff from "icons/profile_off.svg";
import ProfileOn from "icons/profile_on.svg";
import BrowseOff from "icons/browse_off.svg";
import BrowseOn from "icons/browse_on.svg";
import BookmarkOff from "icons/bookmark_off.svg";
import BookmarkOn from "icons/bookmark_on.svg";

const Nav = () => {
  const router = useRouter();
  const [userCurrentPlace, setUserCurrentPlace] =
    useRecoilState(userCurrentPlaceAtom);

  const clickMenu = (menu) => {
    setUserCurrentPlace(menu.path);
    router.push(menu.path);
  };

  useEffect(() => {
    setUserCurrentPlace(router.pathname);
  }, [setUserCurrentPlace, router.pathname]);

  return (
    <div className=" sm:h-fit sm:sticky sm:bottom-0 md:w-fit md:h-full md:flex md:flex-col bg-white grid grid-cols-5 elevation-2-top pt-3.5 pb-5">
      {NAV_MENUS.map((menu) => {
        return (
          <li
            className="list-none text-center flex flex-col gap-y-1 justify-center align-center items-center single-12-m"
            key={menu.id}
            onClick={() => clickMenu(menu)}
          >
            <div>
              {menu.path === userCurrentPlace ? menu.state_on : menu.state_off}
            </div>
            <span
              className={
                menu.path === userCurrentPlace
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
  USERPAGE: "userPage",
  BOOKMARK: "bookmark",
  MANAGESUBSCRIPTION: "manageSubscription",
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
    path: "/bookmark",
  },
  {
    id: 5,
    name_kr: "마이페이지",
    name_eng: MENU_NAMES.USERPAGE,
    state_on: <ProfileOn width="32" height="32" />,
    state_off: <ProfileOff width="32" height="32" />,
    path: "/userPage",
  },
  {
    id: 4,
    name_kr: "구독관리",
    name_eng: MENU_NAMES.MANAGESUBSCRIPTION,
    state_on: <BrowseOn width="32" height="32" />,
    state_off: <BrowseOff width="32" height="32" />,
    path: "/manageSubscription",
  },
  {
    id: 5,
    name_kr: "북마크함",
    name_eng: MENU_NAMES.BOOKMARK,
    state_on: <BookmarkOn width="32" height="32" />,
    state_off: <BookmarkOff width="32" height="32" />,
    path: "/bookmark",
  },
];
