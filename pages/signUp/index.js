import { useRouter } from "next/router";
import Button from "components/shared/Button";
import SignUpLayout from "pages/signUp/layout";
import { useState } from "react";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const routeUserResearch = () => router.push("/userResearch");

  const comps = {
    1: <div>본인 확인을 위해 휴대폰 번호를 입력해 주세요.</div>,
    2: <div>아아디를 설정해 주세요.</div>,
    3: <div>비밀번호를 설정해 주세요.</div>,
    4: <div>프로필 설정을 위해 개인 정보를 입력해 주세요.</div>,
    5: <div>마지막으로 이용 약관에 동의해 주세요.</div>,
  };

  return (
    <div className="w-full h-full flex flex-col justify-between mb-14 px-4">
      <SignUpLayout>
        <div className="h-[400px] w-full">{step < 6 && comps[step]}</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
      </SignUpLayout>
      <Button
        func={() => setStep((prev) => prev + 1)}
        // func={routeUserResearch}
        mode="enabled"
        state={true}
        size="big"
        text="시작하기"
        onClick={
          step < 6
            ? () => setStep((prev) => prev + 1)
            : router.push("/userResearch")
        }
      />
    </div>
  );
};

export default SignUp;
