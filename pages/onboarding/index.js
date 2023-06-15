import { useRouter } from "next/router";

const Onboarding = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/signup")}>회원가입</button>
      <br />
      <button onClick={() => router.push("/login")}>로그인</button>
    </div>
  );
};

export default Onboarding;
