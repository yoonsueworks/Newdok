import AppBar from "shared/AppBar";

const SignUpLayout = ({ description, forms, step, setStep }) => {
  const children = forms.props.children;

  return (
    <>
      {step === 1 ? (
        <div className="w-full h-screen py-14 px-5 flex flex-col justify-between gap-y-7">
          <div className="h-fit">{description}</div>
          <div className="h-full flex flex-col justify-between">{forms}</div>
        </div>
      ) : (
        <div className="w-full h-screen overflow-scroll py-14 px-5 flex flex-col gap-y-7">
          <div className="h-fit">{description}</div>
          <div className="">
            <div className="h-fit">{children[0]}</div>
            <div className="h-fit">{children[1]}</div>
            <div className="h-fit">{children[2]}</div>
            <div className="h-fit">{children[3]}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpLayout;
