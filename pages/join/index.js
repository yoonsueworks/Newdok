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
  2: ["아이디를", "설정해 주세요."],
  3: ["비밀번호를", "설정해 주세요."],
  4: ["프로필 설정을 위해", "개인 정보를 입력해 주세요."],
  5: ["마지막으로", "이용 약관에 동의해 주세요."],
};

const forms = {
  1: <PhoneForm />,
  2: <IdForm />,
  3: <PswdForm />,
  4: <PersonalInfoForm />,
  5: <Terms />,
};
