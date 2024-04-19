import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";
import ToastPopUp from "shared/ToastPopUp";

const UserPage = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const userDatas = {
    birthYear: "1996",
    createdAt: "2023-08-20T07:41:51.553Z",
    emailIndex: "4",
    gender: "여성",
    id: 29,
    industryId: 11,
    interests: [
      { userId: 29, interestId: 5, createdAt: "2023-12-06T11:43:56.040Z" },

      { userId: 29, interestId: 10, createdAt: "2023-12-06T11:43:56.416Z" },

      { userId: 29, interestId: 15, createdAt: "2023-12-06T11:43:56.567Z" },
      { userId: 29, interestId: 18, createdAt: "2023-12-06T11:43:56.718Z" },

      { userId: 29, interestId: 19, createdAt: "2023-12-06T11:43:56.871Z" },

      { userId: 29, interestId: 22, createdAt: "2023-12-06T11:43:57.022Z" },
    ],
    loginId: "testacc1",
    nickname: "뉴독안녕",
    password: "$2b$10$5CfRhNut.XvSSIp8IaqmTel.TVPZ/cjEGv7MXmFUQm9cjcrsMGVJC",
    phoneNumber: "01041478220",
    subscribeEmail: "newdok4@newdok.site",
    subscribePassword: "!Kknewdok4",
  };
  const router = useRouter();

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(userDatas.subscribeEmail);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 1500);
  };

  useEffect(() => {
    if (!userDatas.subscribeEmail) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-beige-100">
      <div className="w-full flex flex-col items-center">
        <Profile
          email={userDatas.subscribeEmail}
          copyClipboard={copyClipboard}
        />
        <Menus />
      </div>
      <ToastPopUp toastMessage="mailCopied" isVisible={isToastVisible} />
    </div>
  );
};

export default UserPage;
