<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 0d6f5ec (merge from develop)
const Signup = () => {
  return <div>signup</div>;
};

export default Signup;
<<<<<<< HEAD
>>>>>>> 0fda4c4 (Feat: user related chores routing)
=======
=======
import { useRouter } from "next/router";
import Button from "../../components/Button";

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
>>>>>>> d3c9608 (merge from develop)
>>>>>>> 0d6f5ec (merge from develop)
