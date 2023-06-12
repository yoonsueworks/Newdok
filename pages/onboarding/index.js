<<<<<<< HEAD
import { useRouter } from "next/router";

const Onboarding = () => {
  const router = useRouter();

  return (
    <div>
<<<<<<< HEAD
      <button onClick={() => router.push("/signup")}>회원가입</button>
      <br />
      <button onClick={() => router.push("/login")}>로그인</button>
=======
      <div onClick={() => router.push("/signup")}>회원가입</div>
      <span>
        이미 계정이 있나요?
        <div onClick={() => router.push("/login")}>로그인 hello</div>
      </span>
>>>>>>> 6173b3a (test hello)
    </div>
=======
const Onboarding = () => {
  return (
    <>
      <div>caption</div>
      <div>headline</div>
      <div>carousel</div>
      <div>
        <div>시작하기 버튼 자리</div>
        <div>
          이미 계정이 있나요 <span>로그인 버튼</span>
        </div>
      </div>
    </>
>>>>>>> d3c9608 (merge from develop)
  );
};

export default Onboarding;
