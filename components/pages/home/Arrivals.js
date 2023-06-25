import Button from "shared/Button";

const Arrivals = () => {
  const wrapperCSS = "w-full h-fit grid gap-y-[119px] p-5";
  const contentsCSS = "flex flex-col items-center";
  const imageCSS = "w-[390px] h-[200px] border mb-5";
  const text1 = "header_2 mb-1";
  const text2 = "text-sm mb-1";

  return (
    <div className={wrapperCSS}>
      <div className={contentsCSS}>
        <div className={imageCSS}>image</div>
        <div className={text1}>오늘 도착한 아티클이 없어요.</div>
        <div className={text2}>
          <span>구독 신청 이후 수신된 아티클만 볼 수 있어요.</span>
        </div>
      </div>
      <Button text="금요일에 발행되는 뉴스레터 보기" mode="ghost" />
    </div>
  );
};

export default Arrivals;
