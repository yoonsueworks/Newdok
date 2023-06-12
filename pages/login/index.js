import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const routeHome = () => router.push("/home");

  return (
    <div>
      <div>input1</div>
      <div>input2</div>
      <div>로그인 버튼</div>
      <div>
        <div>Id/PW 찾기</div>
        <div>회원가입</div>
      </div>
      <div onClick={() => routeHome()}>비회원으로 이동하기</div>
    </div>
  );
};

export default SignIn;
