import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

const Nickname = () => {
  const userDatas = useRecoilValue(userDatasAtom);
  const nickname = userDatas?.nickname;

  return <>{nickname}</>;
};

export default Nickname;
