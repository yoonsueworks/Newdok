import { useContext, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useRouter } from "next/router";
import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";
import { GlobalContext } from "../_app";

const UserPage = () => {
  const { setToastPopUp, setToastMessage } = useContext(GlobalContext);
  const userDatas = useRecoilValue(userDatasAtom);
  const router = useRouter();

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(userDatas.subscribeEmail);
    setToastPopUp();
    setToastMessage("mailCopied");
  };

  useEffect(() => {
    if (!userDatas.subscribeEmail) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-beige-100 h-full">
      <Profile email={userDatas.subscribeEmail} copyClipboard={copyClipboard} />
      <div className="w-full h-fit px-5 bg-beige-100 overflow-scroll">
        <Menus />
      </div>
    </div>
  );
};

export default UserPage;
