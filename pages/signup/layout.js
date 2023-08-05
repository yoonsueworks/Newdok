import { useContext } from "react";
import { SignUpContext } from "context/SignUpContext";
import Appbar from "shared/Appbar";

const SignUpLayout = ({ description, forms }) => {
  const { step, setStep } = useContext(SignUpContext);
  return (
    <>
      <Appbar
        iconl={true}
        textl={""}
        iconr={false}
        func={
          step > 1 ? () => setStep((prev) => prev - 1) : () => history.back()
        }
      />
      <div className="w-full bg-beige-100 h-1">
        <div
          className="bg-purple-700 h-1"
          style={{ width: `${step * 20}%` }}
        ></div>
      </div>
      <div className="w-full h-screen py-14 px-5 flex flex-col justify-between gap-y-7">
        <div className="h-fit">{description}</div>
        {forms}
      </div>
    </>
  );
};

export default SignUpLayout;
