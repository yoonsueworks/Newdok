import Background from "shared/Background";
import Profile from "components/pages/myPage/Profile";
import Menus from "components/pages/myPage/Menus";

const MyPage = () => {
  return (
    <>
      <Profile />
      <Background>
        <Menus />
      </Background>
    </>
  );
};

export default MyPage;
