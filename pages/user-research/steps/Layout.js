import { useContext } from "react";
import { GlobalContext } from "../../_app";
import Button from "../../../components/Button";
import Topbar from "../../../components/Topbar";
import Progressbar from "./components/progressbar";

export default function Layout({ infos }) {
  const value = useContext(GlobalContext);
  const { clickNext, clickBefore, isActivated, progress, fetchDatas } = value;

  return (
    <div className="flex flex-col h-full pb-20">
      <Topbar />
      <Progressbar progress={progress} />
      <div className="w-full h-full flex flex-col justify-between px-5 mt-16">
        <div className="w-full flex flex-col">
          <div className="grid gap-y-[18px] mb-10">
            <div className="display">{infos?.display}</div>
            <div className="header_1 w-[302px] flex items-end">
              {infos?.id === 1 ? (
                infos?.headline
              ) : (
                <>
                  <div className="w-[226px] header_1 shrink-0">
                    {infos?.headline}
                  </div>
                  <div className="header_3 text-warmgray-50 mb-1">
                    {infos?.caption}
                  </div>
                </>
              )}
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
