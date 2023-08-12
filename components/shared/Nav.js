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
import LocalStorage from "public/utils/LocalStorage";

const Nav = () => {
  const router = useRouter();
  const [page, setPage] = useState(null);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);

  const hasBrowseAll = router.pathname === "/browseAll";
  const hasUserPage = router.pathname.includes("/userPage");
  const hasHome = router.pathname === "/home";

  const clickMenu = (menu) => {
    setPage(menu.id);
    router.push(menu.path);
  };

  useEffect(() => {
    if (hasBrowseAll) {
      setPage(1);
    } else if (hasHome) {
      setPage(2);
    } else if (hasUserPage) {
      setPage(3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // const localAccessToken = LocalStorage.getItem("NDtoken");
    // const localUserDatas = LocalStorage.getItem("NDUserDatas");
    // if (localAccessToken) {
    //   setAccessToken(localAccessToken);
    //   setUserDatas(JSON.parse(localUserDatas));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-fit bg-white grid grid-cols-3 elevation-2-top pt-3.5 pb-5">
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
  HOME: "home",
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
    name_kr: "홈",
    name_eng: MENU_NAMES.HOME,
    state_on: <HomeOn width="32" height="32" />,
    state_off: <HomeOff width="32" height="32" />,
    path: "/home",
  },
  {
    id: 3,
    name_kr: "마이페이지",
    name_eng: MENU_NAMES.userPage,
    state_on: <ProfileOn width="32" height="32" />,
    state_off: <ProfileOff width="32" height="32" />,
    path: "/userPage",
  },
];
