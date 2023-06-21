import { useContext } from "react";
import { GlobalContext } from "../../_app";
import Button from "shared/Button";
import Topbar from "shared/Topbar";
import ProgressBar from "components/ProgressBar";

export default function Layout({ infos }) {
  const value = useContext(GlobalContext);
  const { clickNext, clickBefore, isActivated, progress, fetchDatas } = value;

  return (
    <div className="flex flex-col h-full pb-20">
      <Topbar />
      <ProgressBar progress={progress} type="userResearch" />
      <div className="w-full h-full flex flex-col justify-between px-5 mt-16">
        <div className="w-full flex flex-col">
          <div className="grid gap-y-[18px] mb-10">
            <div className="w-full">
              <div className="w-[226px] header_2 shrink-0 mb-1">
                <span className="block">{infos?.header_1_1}</span>
                <span className="block">{infos?.header_1_2}</span>
              </div>
              <div className="body_2 text-warmgray-100 mb-1">
                {infos?.caption}
              </div>
            </div>
          </div>
          <div className="w-full relative">{infos?.comp}</div>
        </div>
        {infos?.id === 1 ? (
          <div className="w-full">
            <Button
              mode="alive"
              func={clickNext}
              state={isActivated}
              size="big"
              text="다음"
              onboarding="산업군을"
            />
          </div>
        ) : (
          <div className="flex space-x-4">
            <Button
              mode="ghost"
              func={clickBefore}
              state={true}
              size="big"
              text="이전"
            />
            <Button
              mode="alive"
              func={fetchDatas}
              state={isActivated}
              size="big"
              text="결과 보기"
              onboarding="관심사를"
            />
          </div>
        )}
      </div>
    </div>
  );
}
