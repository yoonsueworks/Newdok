import { useEffect, useState } from "react";
import LocalStorage from "public/utils/LocalStorage";

const Nickname = () => {
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const nickname = LocalStorage.getItem("NDnickname");
    setNickname(nickname);
  }, []);

  return <>{nickname && nickname}</>;
};

export default Nickname;
