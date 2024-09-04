import { useState } from "react";
import { SignUpContext } from "context/SignUpContext";

import PersonalInfoForm from "components/pages/join/PersonalInfoForm";
import Description from "components/pages/join/Description";
import PhoneForm from "components/pages/join/PhoneForm";
import PswdForm from "components/pages/join/PswdForm";
import IdForm from "components/pages/join/IdForm";
import Terms from "components/pages/join/Terms";
import SignUpLayout from "./layout";

const Join = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  console.log(userInfo, "userinfo");

  const value = {
    step: step,
    setStep: setStep,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  return (
    <SignUpContext.Provider value={value}>
      <SignUpLayout
        step={step}
        setStep={setStep}
        description={<Description description={description[step]} />}
        forms={forms[step]}
      />
    </SignUpContext.Provider>
  );
};

export default Join;

const description = {
  1: ["본인 확인을 위해", "휴대폰 번호를 입력해 주세요."],
  2: ["회원가입하고", "간편하게 뉴스레터를 구독하세요!"],
};

const forms = {
  1: <PhoneForm />,
  2: (
    <>
      <IdForm />
      <PswdForm />
      <PersonalInfoForm />
      <Terms />
    </>
  ),
};
