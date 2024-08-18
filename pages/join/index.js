import { useState } from "react";
import { SignUpContext } from "context/SignUpContext";

import PersonalInfoForm from "components/pages/join/PersonalInfoForm";
import Description from "components/pages/join/Description";
import PhoneForm from "components/pages/join/PhoneForm";

import SignUpLayout from "./layout";

const Join = () => {
  const [step, setStep] = useState(2);
  const [userInfo, setUserInfo] = useState({});

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
  2: ["회원정보를", "입력해 주세요."],
};

const forms = {
  1: <PhoneForm />,
  2: <PersonalInfoForm />,
};
