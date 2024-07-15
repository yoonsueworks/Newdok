import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { atom, useRecoilState } from "recoil";
import { userCurrentPlaceAtom } from "service/atoms/atoms";

import GNB from "./GNB";
import BrowseOff from "icons/ver3.0/Line Newsletter.svg";
import BrowseOn from "icons/ver3.0/Fill Newsletter.svg";
import MailBoxOff from "icons/ver3.0/Line Mailbox.svg";
import MailBoxOn from "icons/ver3.0/Fill Mailbox.svg";
import HomeOff from "icons/ver3.0/Line Home.svg";
import HomeOn from "icons/ver3.0/Fill Home.svg";
import BookmarkOff from "icons/ver3.0/Line Bookmark.svg";
import BookmarkOn from "icons/ver3.0/Fill Bookmark.svg";
import ProfileOff from "icons/ver3.0/Line User.svg";
import ProfileOn from "icons/ver3.0/Fill User.svg";

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
    <>
      <div className="flex-col">
        <div className="xl:h-16 w-[120px] xl:w-full md:h-14 flex justify-center items-center bg-white sm:hidden xs:hidden">
          <GNB />
        </div>
        <div className="sm:h-fit sm:sticky sm:bottom-0 md:w-fit md:h-full md:flex md:flex-col md:px-3 md:py-3 xl:w-[200px] xl:px-2 xl:flex xl:flex-col xl:h-full xs:elevation-2-top sm:elevation-2-top pt-3 pb-6 gap-y-12 bg-white">
          <div className="flex justify-between xs:px-5 sm:px-5 md:flex md:flex-col md:gap-y-8 xl:items-start xl:flex xl:flex-col xl:gap-y-4">
            {NAV_MENUS.map((menu) => {
              return (
                <li
                  className={`md:w-[60px] md:h-[70px] xl:h-[48px] xl:w-full xl:p-3.5 list-none text-center flex flex-col xl:flex-row xl:gap-x-2 gap-y-1 md:justify-center align-center items-center single-12-m rounded-xl ${
                    menu.path === userCurrentPlace
                      ? "md:bg-blue-50 xl:bg-blue-50"
                      : "bg-transparent"
                  }`}
                  key={menu.id}
                  onClick={() => clickMenu(menu)}
                >
                  <div>
                    {menu.path === userCurrentPlace
                      ? menu.state_on
                      : menu.state_off}
                  </div>
                  <span
                    className={`shrink-0 w-fit break-keep xs:label-s sm:label-s md:label-s xl:body-s ${
                      menu.path === userCurrentPlace
                        ? "text-blue-600"
                        : "text-warmgray-100 "
                    }`}
                  >
                    {menu.name_kr}
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

const MENU_NAMES = {
  BROWSEALL: "browseAll",
  MANAGESUBSCRIPTION: "manageSubscription",
  HOME: "home",
  USERPAGE: "userPage",
  BOOKMARK: "bookmark",
};

const NAV_MENUS = [
  {
    id: 1,
    name_kr: "둘러보기",
    name_eng: MENU_NAMES.BROWSEALL,
    state_on: <BrowseOn width="28" height="28" />,
    state_off: <BrowseOff width="28" height="28" />,
    path: "/browseAll",
  },

  {
    id: 2,
    name_kr: "구독관리",
    name_eng: MENU_NAMES.MANAGESUBSCRIPTION,
    state_on: <MailBoxOn width="28" height="28" />,
    state_off: <MailBoxOff width="28" height="28" />,
    path: "/manageSubscription",
  },

  {
    id: 3,
    name_kr: "홈",
    name_eng: MENU_NAMES.HOME,
    state_on: <HomeOn width="28" height="28" />,
    state_off: <HomeOff width="28" height="28" />,
    path: "/home",
  },
  {
    id: 4,
    name_kr: "북마크함",
    name_eng: MENU_NAMES.BOOKMARK,
    state_on: <BookmarkOn width="28" height="28" />,
    state_off: <BookmarkOff width="28" height="28" />,
    path: "/bookmarks",
  },
  {
    id: 5,
    name_kr: "마이페이지",
    name_eng: MENU_NAMES.USERPAGE,
    state_on: <ProfileOn width="28" height="28" />,
    state_off: <ProfileOff width="28" height="28" />,
    path: "/userPage",
  },
];
