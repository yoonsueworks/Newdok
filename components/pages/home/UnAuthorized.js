import Button from "shared/Button";
import ButtonText from "shared/ButtonText";

const UnAuthorized = () => {
  const wrapperCSS = "w-full h-fit flex flex-col gap-y-[57px] p-5";
  const contentsCSS = "flex flex-col items-center";
  const imageCSS = "w-[390px] h-[200px] border mb-5";
  const text1 = "header_2 mb-1 text-center";
  const text2 = "text-sm mb-1";

  return (
    <div className={wrapperCSS}>
      <div className={contentsCSS}>
        <div className={imageCSS}>image</div>
        <div className={text1}>
          <span className="block">회원이 되면 간편하게</span>
          <span className="block">뉴스레터를 모아볼 수 있어요!</span>
        </div>
        <div className={text2}>
          <span>발행일에 맞춰 뉴스레터를 이곳으로 배달해 드려요.</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <Button text="회원가입" size="big" mode="default" />
        <div className="flex items-center gap-x-2">
          <span className="inline-block">이미 계정이 있나요?</span>
          <ButtonText text="로그인" />
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;
