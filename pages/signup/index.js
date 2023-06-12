import { useRouter } from "next/router";
import Button from "shared/Button";

const SignUp = () => {
  const router = useRouter();
  const routeUserResearch = () => router.push("/user-research");
  return (
    <div className="w-full h-full flex-end">
      <div className="h-[400px] w-full">회원가입 프로세스</div>
      <Button
        func={routeUserResearch}
        mode="enabled"
        state={true}
        size="big"
        text="시작하기"
        onClick={() => setProgress(1)}
      />
    </div>
  );
};

export default SignUp;
