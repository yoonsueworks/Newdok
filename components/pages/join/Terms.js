import { useContext, useState, useEffect } from "react";

import { SignUpContext } from "context/SignUpContext";
import { GlobalContext } from "pages/_app";
import { useRouter } from "next/router";
import { useSignUp } from "service/hooks/user";

import { BottomSheet } from "react-spring-bottom-sheet";
import { NotionRenderer } from "react-notion";
import CloseIcon from "icons/close_off.svg";
import Loading from "shared/Loading";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const Terms = ({ blockMap }) => {
  const { userInfo, setUserInfo } = useContext(SignUpContext);
  const { userDatas, setUserDatas } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [clickedTerm, setClickedTerm] = useState(null);
  const [privacy, setPrivacy] = useState(null);
  const [agreement, setAgreement] = useState(null);

  const [all, setAll] = useState(false);
  const [age, setAge] = useState(false);
  const [service, setService] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const router = useRouter();
  const signUp = useSignUp(userInfo);

  /* userInfo post 요청 */
  const postSignUp = async () => {
    try {
      const result = await signUp.mutateAsync(userInfo);
      console.log(result);
      /* 응답으로 받은 사용자 데이터 전역으로 설정 */
      setUserDatas(result.user);
    } catch (error) {
      console.log(error?.response);
    }
  };

  const handleCheckbox = () => {
    const check = all ? false : true;
    setAge(check);
    setService(check);
    setMarketing(check);
  };

  const submitUserInfo = async () => {
    await postSignUp();
    router.push("/userResearch");
  };

  const handleTermClick = (e) => {
    setClickedTerm(e.target.id / 1);
    setOpen(true);
  };

  useEffect(() => {
    setUserInfo(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      "https://notion-api.splitbee.io/v1/page/82ef5aea46d84623b7b19bb951b6043c?pvs=4"
    )
      .then((res) => res.json())
      .then((res) => setPrivacy(res));
    fetch(
      "https://notion-api.splitbee.io/v1/page/18aacf9713bc427a850ae8da92b69087?pvs=4"
    )
      .then((res) => res.json())
      .then((res) => setAgreement(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full overflow-scroll w-full flex flex-col justify-between">
      <div className="flex flex-col gap-y-[14px]">
        <div className="flex justify-between border-b border-purple-200 pb-4">
          <span className="single-20-b text-purple-700">전체 약관 동의</span>
          <input
            type="checkbox"
            checked={all || (age && service && marketing)}
            id="check1"
            onChange={() => {
              setAll((prev) => !prev);
              handleCheckbox();
            }}
          />
          <label id="check1" htmlFor="check1"></label>
        </div>
        <ul>
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
            <span>만 14세 이상 확인 (필수)</span>
            <input
              type="checkbox"
              checked={age}
              id="check2"
              onChange={() => setAge((prev) => !prev)}
            />
            <label id="check2" htmlFor="check2"></label>
          </li>
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
            <span>
              <span
                className="underline underline-offset-2 cursor-pointer"
                id={1}
                onClick={handleTermClick}
              >
                서비스 이용
              </span>
              동의 (필수)
            </span>
            <input
              type="checkbox"
              checked={service}
              id="check3"
              onChange={() => setService((prev) => !prev)}
            />
            <label id="check3" htmlFor="check3"></label>
          </li>
          <li className="flex justify-between py-3.5 single-16-m text-neutralgray-900">
            <span>
              <span
                className="underline underline-offset-2 cursor-pointer"
                id={2}
                onClick={handleTermClick}
              >
                개인 정보 수집 및 이용
              </span>
              동의 (필수)
            </span>

            <input
              type="checkbox"
              checked={marketing}
              id="check4"
              onChange={() => setMarketing((prev) => !prev)}
            />
            <label id="check4" htmlFor="check4"></label>
          </li>
        </ul>
      </div>
      <button
        type="submit"
        className="mt-16 p-5 text-white bg-purple-700 rounded-[14px] focus:outline-none disabled:bg-neutralgray-500 single-24-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
        disabled={!(age && service && marketing)}
        onClick={submitUserInfo}
      >
        가입 완료
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        snapPoints={({ maxHeight }) => [0.8 * maxHeight]}
      >
        <TermHeader
          handleDismiss={() => setOpen(false)}
          name={clickedTerm === 1 ? "서비스 이용 약관" : "개인 정보 처리 방침"}
        />
        <div className="w-full h-fit mt-16 pt-5 px-5">
          <NotionRenderer blockMap={clickedTerm === 1 ? agreement : privacy} />
        </div>
      </BottomSheet>
    </div>
  );
};

export default Terms;

const TermHeader = ({ handleDismiss, name }) => {
  return (
    <div className="w-full h-fit p-2.5 flex justify-between items-center elevation-1-bottom bg-white z-1 absolute">
      <div className="w-11 h-11 bg-white"></div>
      <div className="single-20-b text-neutralgray-900">{name}</div>
      <div
        className="w-11 h-11 bg-white flex justify-center items-center cursor-pointer"
        onClick={() => handleDismiss()}
      >
        <CloseIcon width="32" height="32" />
      </div>
    </div>
  );
};
