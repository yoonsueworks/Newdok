import { useRouter } from "next/router";

const Onboarding = () => {
  const router = useRouter();
  return (
    <div>
      <div onClick={() => router.push("/signup")}>회원가입</div>
      <span>
        이미 계정이 있나요?
        <div onClick={() => router.push("/login")}>로그인 hello</div>
      </span>
    </div>
  );
};

export default Onboarding;
