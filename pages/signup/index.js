import { useContext, useState } from "react";
import { useRouter } from "next/router";

import SignUpLayout from "pages/signUp/layout";
import Button from "components/shared/Button";

import PersonalInfoForm from "components/pages/signUp/PersonalInfoForm";
import PhoneForm from "components/pages/signUp/PhoneForm";
import PswdForm from "components/pages/signUp/PswdForm";
import IdForm from "components/pages/signUp/IdForm";
import Terms from "components/pages/signUp/Terms";

import { useForm } from "react-hook-form";
import { SignUpContext } from "context/SignUpContext";
// import InputHookForm from "../../components/shared/InputHookForm";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const routeUserResearch = () => router.push("/userResearch");

  const handleNextProcess = (data) => {
    setUserInfo(data);
    setStep((prev) => prev + 1);
  };

  console.log(userInfo);

  const description = {
    1: ["본인 확인을 위해", "휴대폰 번호를 입력해 주세요."],
    2: ["아이디를", "설정해 주세요."],
    3: ["비밀번호를", "설정해 주세요."],
    4: ["프로필 설정을 위해", "개인 정보를 입력해 주세요."],
    5: ["마지막으로", "이용 약관에 동의해 주세요."],
  };

  const component = {
    1: {
      comp: (
        <PhoneForm
          name={"phone"}
          placeholder={""}
          condition={""}
          error={"재전송은 3회까지 가능해요."}
        />
      ),
    },
    2: {
      comp: (
        <IdForm
          name={"phone"}
          placeholder={""}
          condition={""}
          error={"재전송은 3회까지 가능해요."}
        />
      ),
      // name: "id",
      // placeholder: "",
      // condition: "",
      // error: "",
    },
    3: {
      comp: (
        <PswdForm
          name={"phone"}
          placeholder={""}
          condition={""}
          error={"재전송은 3회까지 가능해요."}
        />
      ),
      // name: "pswd",
      // placeholder: "",
      // condition: "",
      // error: "",
    },
    4: {
      comp: (
        <PersonalInfoForm
          name={"phone"}
          placeholder={""}
          condition={""}
          error={"재전송은 3회까지 가능해요."}
        />
      ),
      // name: "userInfos",
      // placeholder: "",
      // condition: "",
      // error: "",
    },
    5: {
      comp: (
        <Terms
          name={"phone"}
          placeholder={""}
          condition={""}
          error={"재전송은 3회까지 가능해요."}
        />
      ),
      // name: "terms",
      // placeholder: "",
      // condition: "",
      // error: "",
    },
  };

  return (
    <SignUpContext.Provider>
      <div className="w-full h-full flex flex-col justify-between mb-14 px-4">
        <SignUpLayout>
          <div className="flex flex-col overflow-scroll gap-y-7">
            <div className="multiple-24-b">
              <span>{description[step][0]}</span>
              <br />
              <span>{description[step][1]}</span>
            </div>
            {component[step].comp}
            {/* <form
              onSubmit={handleSubmit((data) => {
                handleNextProcess(data);
              })}
              className="flex flex-col gap-y-8"
            >
              {component[step].comp}
            </form> */}
          </div>
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
    </SignUpContext.Provider>
  );
};

export default SignUp;
