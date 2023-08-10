import AppBar from "shared/AppBar";

const SignUpLayout = ({ description, forms, step, setStep }) => {
  return (
    <>
      <AppBar
        iconl={true}
        textl={""}
        iconr={false}
        func={
          step > 1 ? () => setStep((prev) => prev - 1) : () => history.back()
        }
        shadow={false}
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
