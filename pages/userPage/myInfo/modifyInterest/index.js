import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";

import Background2 from "shared/Background2";
import AppBar from "shared/AppBar";

import { useModifyInterests } from "service/hooks/user";
import { interests } from "constants/interests";

const ModifyInterest = () => {
  const router = useRouter();
  const [userDatas, setUserDatas] = useRecoilState(userDatasAtom);
  const prevInterests = userDatas?.interests?.map(
    (interest) => interest.interestId
  );

  const [userInterests, setUserInterests] = useState(prevInterests);
  const modifyInterests = useModifyInterests({
    interestIds: userInterests,
  });

  const clickInterestBtn = (e) => {
    const clickedBtn = Number(e.target.id);
    if (userInterests.includes(clickedBtn)) {
      const newUserInterests = userInterests.filter(
        (interestId) => interestId !== clickedBtn
      );
      setUserInterests(newUserInterests);
    }
    if (!userInterests.includes(clickedBtn)) {
      setUserInterests([...userInterests, clickedBtn]);
    }
  };

  const clickChangeSubmit = async () => {
    const form = { interestIds: userInterests };
    const result = await modifyInterests.mutateAsync(form);
    if (result) {
      setUserDatas(result);
      alert("관심사 변경이 완료되었습니다.");
      router.push("/userPage/myInfo");
    }
    if (!result) {
      alert("관심사 변경에 실패하였습니다.");
      router.push("/userPage/myInfo");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clickChangeSubmit();
  };

  const submitBtnCondition =
    userInterests?.length < 3 || userInterests === prevInterests;

  return (
    <div className="pb-16 w-full h-full">
      <div className="relative w-full">
        <div className="absolute w-full">
          <AppBar
            iconl={true}
            shadow={true}
            textl="관심사 변경"
            iconr={false}
            func={() => router.push("/userPage/myInfo")}
          />
        </div>
      </div>
      <Background2>
        <div className="w-full h-full mt-16 pt-8 px-5 pb-14">
          <form
            className="w-full h-full flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-7 h-full">
              <span className="multiple-16-m text-neutralgray-900">
                최소 3가지 이상을 선택해 주세요.
              </span>
              <div
                className="w-full grid grid-cols-2 gap-4 overflow-scroll mb-16"
                id="modifyInterestsBox"
              >
                {interests?.map((interest) => {
                  return (
                    <button
                      type="button"
                      key={interest.id}
                      id={interest.id}
                      className={`p-4 h-14 rounded-2xl single-16-m flex justify-center items-center cursor-pointer transition-colors duration-300 ${
                        userInterests?.includes(interest.id)
                          ? "bg-purple-400 text-white hover:bg-purple-500 active:bg-purple-800 selectedchip-border"
                          : "bg-white text-neutralgray-900 input-border hover:bg-purple-50 active:bg-purple-100"
                      }`}
                      onClick={clickInterestBtn}
                    >
                      {interest.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitBtnCondition}
              className="p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            >
              변경하기
            </button>
          </form>
        </div>
      </Background2>
    </div>
  );
};
export default ModifyInterest;

// TODO: style
