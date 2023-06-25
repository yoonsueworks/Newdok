import Image from "next/image";
import { useRouter } from "next/router";

import ButtonText from "shared/ButtonText";
import Button from "shared/Button";
import OnBoardingSwiper from "components/pages/onboarding/OnBoardingSwiper";

const Onboarding = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between pb-14 px-5">
      <OnBoardingSwiper />

      <div className="grid gap-y-8 w-full text-center">
        <Button
          size="big"
          mode="enabled"
          state={true}
          text="회원가입"
          func={() => router.push("/signup")}
        />
        <div className="single-14-m flex justify-center gap-x-2">
          이미 계정이 있나요?
          <ButtonText
            func={() => router.push("/login")}
            text="로그인"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};
export default Onboarding;

