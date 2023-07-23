import { useContext } from "react";
import { BrandHomeContext } from "context/BrandHomeContext";

import Button from "shared/Button";
import Tags from "shared/Tags";

import CheckIcon from "icons/check_off.svg";

const BrandInfo = () => {
  const value = useContext(BrandHomeContext);
  const { setOpen } = value;

  const containerCSS = "w-full h-fit grid py-8 px-5 gap-y-6 bg-beige-100";
  const infosCSS = "grid gap-y-5";
  const profileCSS = "flex gap-x-5";
  const thumbnailCSS =
    "w-[100px] h-[100px] border border-warmgray-30 rounded-[100px] bg-white";
  const profileWrapperCSS = "flex flex-col gap-y-4";
  const h6titleCSS = "single-24-b text-purple-700 mb-2";
  const dateCSS = "single-14-m flex items-center gap-x-1";
  const descriptionCSS = "multiple-16-m";

  return (
    <div className={containerCSS}>
      <div className={infosCSS}>
        <div className={profileCSS}>
          <div className={thumbnailCSS}></div>
          <div className={profileWrapperCSS}>
            <Tags tags={[{ id: 1, name: "시사" }]} usage="brand" />
            <div>
              <h6 className={h6titleCSS}>NEWNEEK</h6>
              <div className={dateCSS}>
                <CheckIcon width="16" height="16" stroke="#171414" />
                매주 평일 아침
              </div>
            </div>
          </div>
        </div>
        <div className={descriptionCSS}>
          세상 돌아가는 소식은 궁금한데, 시간이 없다고요? &#60;뉴닉&#62;은 신문
          볼 새 없이 바쁘지만, 세상과의 연결고리는 튼튼하게 유지하고 싶은
          여러분들을 위해 세상 돌아가는 소식을 모두 담아 간단한게 정리해 드려요.
        </div>
      </div>
      <Button text="구독하기" state={true} func={() => setOpen(true)} />
    </div>
  );
};

export default BrandInfo;
