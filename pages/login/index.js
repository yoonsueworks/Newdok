import { useRouter } from "next/router";
<<<<<<< HEAD
import ButtonText from "shared/ButtonText";
import Button from "shared/Button";

const SignIn = () => {
  const router = useRouter();
  const route = (segment) => router.push(segment);

  const TEXT_BUTTONS = [
    { id: 1, text: "ID/PW 찾기", func: console.log("find id/pw") },
    { id: 2, text: "회원가입", func: () => route("/signup") },
    { id: 3, text: "비회원으로 이동하기", func: () => route("/home") },
  ];

  return (
    <div>
      <form>
        <input placeholder="input" />
        <input placeholder="input" />
      </form>
      <Button
        mode="alive"
        func={() => console.log("로그인 함수")}
        // state={isActivated}
        size="big"
        text="로그인"
        onboarding="관심사를"
      />
      <div className="text_button">
        {TEXT_BUTTONS.map(({ id, text, func }) => {
          return <ButtonText key={id} text={text} func={func} />;
        })}
=======

const SignIn = () => {
  const router = useRouter();
  const routeHome = () => router.push("/home");

  return (
    <div>
      <div>input1</div>
      <div>input2</div>
      <div>로그인 버튼</div>
      <div>
<<<<<<< HEAD
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
>>>>>>> 0fda4c4 (Feat: user related chores routing)
=======
        <div>Id/PW 찾기</div>
        <div>회원가입</div>
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
      </div>
      <div onClick={() => routeHome()}>비회원으로 이동하기</div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default SignIn;
=======
export default Login;
>>>>>>> 0fda4c4 (Feat: user related chores routing)
=======
export default SignIn;
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
