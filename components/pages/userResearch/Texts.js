import Image from "next/image";

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
    <div className="grid mb-7">
      <div className="w-full grid gap-y-1">
        <div className="w-full headline-s shrink-0 mb-1">
          {page === 5 && <Nickname />}
          {infos?.header_1_1}
          <br />
          {infos?.header_1_2}
          <br />
          {page === 2 && <Nickname />}
          {infos?.header_1_3}
        </div>
        {page === 1 && (
          <>
            <div className="w-full mb-6 flex justify-center">
              <Image
                src="/images/Sign_up_3.png"
                alt="뉴독 일러스트"
                width={280}
                height={280}
                loading="lazy"
              />
            </div>
            <div className="p-5 bg-neutralgray-50 border border-neutralgray-100 rounded-lg mb-4 flex flex-col gap-y-3">
              <div className="input-01 text-neutralgray-700">구독 이메일</div>
              <div className="body-m text-blue-600">{subscribeEmail}</div>
            </div>
          </>
        )}

        <div className="body-s text-neutralgray-700 mb-6">
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
