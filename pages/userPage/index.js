import Background from "shared/Background";
import Profile from "components/pages/userPage/Profile";
import Menus from "components/pages/userPage/Menus";

const userPage = () => {
  return (
    <>
      <Profile />
      <Background>
        <Menus />
      </Background>
    </>
  );
};

export default userPage;
