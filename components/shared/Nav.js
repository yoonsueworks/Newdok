import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { atom, useRecoilState } from "recoil";
import { userCurrentPlaceAtom } from "service/atoms/atoms";

import BrowseOff from "icons/ver1.0/browse_off.svg";
import BrowseOn from "icons/ver1.0/browse_on.svg";
import MailBoxOff from "icons/ver1.0/mail_box_off.svg";
import MailBoxOn from "icons/ver1.0/mail_box_on.svg";
import HomeOff from "icons/ver1.0/home_off.svg";
import HomeOn from "icons/ver1.0/home_on.svg";
import BookmarkOff from "icons/ver1.0/bookmark_off.svg";
import BookmarkOn from "icons/ver1.0/bookmark_on.svg";
import ProfileOff from "icons/ver1.0/profile_off.svg";
import ProfileOn from "icons/ver1.0/profile_on.svg";

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
        <div className="h-16 w-[120px] xl:w-full flex justify-center items-center bg-white sm:hidden xs:hidden">
          <Image
            src="/images/Newdok_Logo-Horizontal_300.png"
            alt="newdok"
            width="106"
            height="56"
            className="mt-2 xl:block sm:hidden xs:hidden"
          />
        </div>
        <div className="sm:h-fit sm:sticky sm:bottom-0 md:w-fit md:h-full md:flex md:flex-col md:px-6 xl:px-12 xl:flex xl:flex-col xl:h-full xs:elevation-2-top sm:elevation-2-top pt-3.5 pb-5 gap-y-12 bg-white">
          <div className="flex justify-between xs:px-5 sm:px-5 md:flex md:flex-col md:gap-y-8 xl:items-start xl:flex xl:flex-col xl:gap-y-8">
            {NAV_MENUS.map((menu) => {
              return (
                <li
                  className="list-none text-center flex flex-col xl:flex-row xl:gap-x-2 gap-y-1 justify-center align-center items-center single-12-m"
                  key={menu.id}
                  onClick={() => clickMenu(menu)}
                >
                  <div>
                    {menu.path === userCurrentPlace
                      ? menu.state_on
                      : menu.state_off}
                  </div>
                  <span
                    className={`shrink-0 w-fit break-keep ${
                      menu.path === userCurrentPlace
                        ? "text-purple-700 font-bold"
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
    state_on: <BrowseOn width="32" height="32" />,
    state_off: <BrowseOff width="32" height="32" />,
    path: "/browseAll",
  },

  {
    id: 2,
    name_kr: "구독관리",
    name_eng: MENU_NAMES.MANAGESUBSCRIPTION,
    state_on: <MailBoxOn width="32" height="32" />,
    state_off: <MailBoxOff width="32" height="32" />,
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
    state_on: <BookmarkOn width="32" height="32" />,
    state_off: <BookmarkOff width="32" height="32" />,
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
];
