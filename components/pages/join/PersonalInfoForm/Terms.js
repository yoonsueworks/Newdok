import { useContext, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

import { SignUpContext } from "context/SignUpContext";
import { useSignUp } from "service/hooks/user";
import { userDatasAtom } from "service/atoms/atoms";

import ArrowRight from "icons/ver1.0/arrow_right_off.svg";

const Terms = () => {
  const { userInfo, setUserInfo } = useContext(SignUpContext);
  const [, setUserDatas] = useRecoilState(userDatasAtom);

  const [all, setAll] = useState(false);
  const [age, setAge] = useState(false);
  const [service, setService] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const router = useRouter();
  const signUp = useSignUp(userInfo);

  const [serviceLink, privacyLink] = [
    "https://newdok.notion.site/18aacf9713bc427a850ae8da92b69087",
    "https://newdok.notion.site/82ef5aea46d84623b7b19bb951b6043c?pvs=4",
  ];

  /* userInfo post 요청 */
  const postSignUp = async () => {
    try {
      const result = await signUp.mutateAsync(userInfo);
      /* 응답으로 받은 사용자 데이터 전역으로 설정 */
      setUserDatas(result.user);
      router.push("/userResearch");
    } catch (error) {
      console.log(error?.response);
      alert("회원가입에 실패하였습니다." + error?.response.status);
    }
  };

  const handleCheckbox = () => {
    const check = !all;
    setAge(check);
    setService(check);
    setPrivacy(check);
    setMarketing(check);
  };

  const openLink = (e) => {
    window.open(e.target.id === 1 + "" ? serviceLink : privacyLink);
  };

  const submitUserInfo = async () => {
    await postSignUp();
    router.push("/userResearch");
  };

  useEffect(() => {
    setUserInfo(userInfo);
  }, [setUserInfo, userInfo]);

  return (
    <div className="h-full overflow-scroll w-full flex flex-col justify-between">
      <div className="flex flex-col gap-y-[16px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={all || (age && service && privacy)}
              id="check1"
              onChange={() => {
                setAll((prev) => !prev);
                handleCheckbox();
              }}
            />
            <label id="check1" htmlFor="check1"></label>
            <span className="title-s text-neutralgray-700">전체 약관 동의</span>
          </div>
        </div>
        <ul>
          <li className="flex justify-between mb-3">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={age}
                id="check2"
                onChange={() => setAge((prev) => !prev)}
              />
              <label id="check2" htmlFor="check2"></label>
              <span className="body-s text-neutralgray-700">
                만 14세 이상 확인 (필수)
              </span>
            </div>
          </li>
          <li className="flex justify-between mb-3 body-s text-neutralgray-700">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={service}
                id="check3"
                onChange={() => setService((prev) => !prev)}
              />
              <label id="check3" htmlFor="check3"></label>
              <span>서비스 이용 동의 (필수)</span>
            </div>
            <ArrowRight
              width="24"
              height="24"
              className="cursor-pointer"
              id={1}
              onClick={openLink}
            />
          </li>
          <li className="flex justify-between mb-3 body-s text-neutralgray-700">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={privacy}
                id="check4"
                onChange={() => setPrivacy((prev) => !prev)}
              />
              <label id="check4" htmlFor="check4"></label>
              <span>개인 정보 수집 및 이용 동의 (필수)</span>
            </div>
            <ArrowRight
              width="24"
              height="24"
              className="cursor-pointer"
              id={2}
              onClick={openLink}
            />
          </li>
          <li className="flex justify-between mb-3 text-neutralgray-700">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={marketing}
                id="check5"
                onChange={() => setMarketing((prev) => !prev)}
              />
              <label id="check5" htmlFor="check5"></label>
              <span>마케팅 활용/광고성 정보 수신 동의 (선택)</span>
            </div>
          </li>
        </ul>
      </div>
      <button
        type="submit"
        className="mt-8 mb-14 p-4 text-white bg-blue-600 rounded-xl focus:outline-none disabled:bg-neutralgray-200 disabled:text-neutralgray-400 button-03 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700"
        disabled={!(age && service && privacy)}
        onClick={submitUserInfo}
      >
        가입 완료
      </button>
    </div>
  );
};

export default Terms;
