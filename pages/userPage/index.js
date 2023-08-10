import { useContext, useState, useEffect } from "react";
import LocalStorage from "../../public/utils/LocalStorage";
import { useRouter } from "next/router";
import Background from "shared/Background";
import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";
import { GlobalContext } from "../_app";

const UserPage = () => {
  const [email, setEmail] = useState(null);
  const { setToastPopUp, setToastMessage } = useContext(GlobalContext);
  const router = useRouter();

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(email);
    setToastPopUp();
    setToastMessage("mailCopied");
  };

  useEffect(() => {
    const userDatas = JSON.parse(LocalStorage.getItem("NDUserDatas"));
    userDatas?.subscribeEmail
      ? setEmail(userDatas.subscribeEmail)
      : router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-beige-100 h-full">
      <Profile email={email} copyClipboard={copyClipboard} />
      <Background>
        <Menus />
      </Background>
    </div>
  );
};

export default UserPage;
