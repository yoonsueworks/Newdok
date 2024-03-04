import AppBar from "shared/AppBar";

const SignUpLayout = ({ description, forms, step, setStep }) => {
  const children = forms.props.children;

  return (
    <div className="w-full flex xl:justify-center">
      {step === 1 ? (
        <div className="w-full xl:w-[768px] justify-between h-screen py-14 px-5 xl:px-28 flex flex-col gap-y-7">
          <div className="h-fit">{description}</div>
          <div className="h-full flex flex-col justify-between">{forms}</div>
        </div>
      ) : (
        <div className="w-full h-screen overflow-scroll py-14 px-5 flex flex-col gap-y-7">
          <div className="h-fit">{description}</div>
          <div className="flex flex-col gap-y-8">
            <div className="h-fit">{children[0]}</div>
            <div className="h-fit">{children[1]}</div>
            <div className="h-fit">{children[2]}</div>
            <div className="h-fit">{children[3]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpLayout;
