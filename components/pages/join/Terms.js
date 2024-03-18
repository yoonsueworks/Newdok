import { useContext, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

import { SignUpContext } from "context/SignUpContext";
import { useSignUp } from "service/hooks/user";
import { userDatasAtom } from "service/atoms/atoms";

import ArrowRight from "icons/arrow_right_off.svg";

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
      <div className="flex flex-col gap-y-[14px]">
        <div className="flex justify-between border-b border-purple-200 pb-4">
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
            <span className="single-20-b text-purple-700">전체 약관 동의</span>
          </div>
        </div>
        <ul>
          <li className="flex justify-between py-3.5">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={age}
                id="check2"
                onChange={() => setAge((prev) => !prev)}
              />
              <label id="check2" htmlFor="check2"></label>
              <span className="single-16-m text-neutralgray-900">
                만 14세 이상 확인 (필수)
              </span>
            </div>
          </li>
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
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
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
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
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
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
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={!(age && service && privacy)}
        onClick={submitUserInfo}
      >
        가입 완료
      </button>
    </div>
  );
};

export default Terms;
