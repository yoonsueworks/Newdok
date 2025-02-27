import { useContext, useEffect, useState } from "react";
import { SignUpContext } from "context/SignUpContext";

import InfoForm from "components/pages/join/PersonalInfoForm/InfoForm";
import PswdForm from "components/pages/join/PersonalInfoForm/PswdForm";
import IdForm from "components/pages/join/PersonalInfoForm/IdForm";
import Terms from "components/pages/join/PersonalInfoForm/Terms";

const PersonalInfoForm = () => {
  const { setUserInfo, userInfo, setStep } = useContext(SignUpContext);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <div className="flex flex-col gap-y-8">
      <div className="h-fit">
        <IdForm />
      </div>
      <div className="h-fit">
        <PswdForm />
      </div>
      <div className="h-fit">
        <InfoForm />
      </div>
      <div className="h-fit">
        <Terms />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
