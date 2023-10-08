import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Nickname from "shared/Nickname";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

const UserResearchPage = ({ infos }) => {
  const { page } = useContext(GlobalContext);
  const [userDatas] = useRecoilState(userDatasAtom);
  const subscribeEmail = userDatas.subscribeEmail;

  return (
    <div className="grid  mb-7">
      <div className="w-full grid gap-y-1">
        <div className="w-full multiple-24-b shrink-0 mb-1">
          {page === 5 && <Nickname />}
          {infos?.header_1_1}
          <br />
          {infos?.header_1_2}
          <br />
          {page === 2 && <Nickname />}
          {infos?.header_1_3}
        </div>
        {page === 1 && (
          <div className="p-6 bg-neutralgray-50 border border-neutralgray-100 rounded-lg my-4 flex flex-col gap-y-3">
            <div className="single-16-b text-purple-700">구독 이메일</div>
            <div className="single-18-m text-neutralgray-900">
              {subscribeEmail}
            </div>
          </div>
        )}

        <div className="multiple-16-m text-neutralgray-900 mb-1">
          {infos?.caption}
          <br />
          {infos?.caption_2}
          <br />
          {infos?.caption_3}
        </div>
      </div>
    </div>
  );
};

export default UserResearchPage;
