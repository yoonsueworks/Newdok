import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useRouter } from "next/router";

import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";
import ToastPopUp from "shared/ToastPopUp";

const UserPage = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const userDatas = useRecoilValue(userDatasAtom);
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
    <div className="bg-beige-100 h-full flex flex-col justify-between">
      <div>
        <Profile
          email={userDatas.subscribeEmail}
          copyClipboard={copyClipboard}
        />
        <div className="w-full h-fit px-5 bg-beige-100 overflow-scroll">
          <Menus />
        </div>
      </div>
      <ToastPopUp toastMessage="mailCopied" isVisible={isToastVisible} />
    </div>
  );
};

export default UserPage;
