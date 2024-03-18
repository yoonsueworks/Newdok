import GNB from "components/shared/GNB";
import Image from "next/image";

const SignUpLayout = ({ description, forms, step, setStep }) => {
  const children = forms.props.children;

  return (
    <>
      <div className="w-full flex flex-col xl:items-center xl:justify-center h-screen">
        <div className="w-full xl:w-[768px] pt-14 xl:px-28 px-5 pb-8">
          <Image
            src="/images/Newdok_Logo-Horizontal_300.png"
            alt="newdok"
            width="106"
            height="24"
          />
        </div>
        {step === 1 ? (
          <div className="w-full xl:w-[768px] h-full justify-between pb-14 px-5 xl:px-28 flex flex-col gap-y-7">
            <div className="h-fit">{description}</div>
            <div className="h-full flex flex-col justify-between">{forms}</div>
          </div>
        ) : (
          <div className="w-full xl:w-[768px] h-full overflow-scroll pb-14 px-5 flex flex-col gap-y-7">
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
    </>
  );
};

export default SignUpLayout;
