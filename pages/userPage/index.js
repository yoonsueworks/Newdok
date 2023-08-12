import { useContext, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useRouter } from "next/router";
import Background from "shared/Background";
import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";
import { GlobalContext } from "../_app";

const UserPage = () => {
  const [email, setEmail] = useState(null);
  const { setToastPopUp, setToastMessage } = useContext(GlobalContext);
  const userDatas = useRecoilValue(userDatasAtom);
  const router = useRouter();

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(email);
    setToastPopUp();
    setToastMessage("mailCopied");
  };

  useEffect(() => {
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

// TODO: Protected Route 로 구현하고, email은 그냥 아톰에서 가지고 오기
// useEffect...어쩌고 라우팅 걸고.. 이런거 다 지우기
