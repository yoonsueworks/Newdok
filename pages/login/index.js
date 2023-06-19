import { useRouter } from "next/router";

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
      </div>
    </div>
  );
};

export default SignIn;
