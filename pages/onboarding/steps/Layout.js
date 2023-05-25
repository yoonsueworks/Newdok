import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../_app";
import Button from "../../../components/Button";
import Topbar from "../../../components/Topbar";
import Onboarding from "../index";

export default function Layout({ infos }) {
  const value = useContext(GlobalContext);
  const { clickNext, clickBefore, isActivated } = value;
  const router = useRouter();

  if (!infos) {
    return null;
  }

  return (
    <div className="flex flex-col h-full pb-20">
      <Topbar />
      <div className="h-2">
        progressbar---------------progressbar---------------
      </div>
      {/* TODO: progressbar 분리 */}
      <div className="w-full h-full flex flex-col justify-between px-5 mt-16">
        <div className="w-full flex flex-col">
          <div className="grid gap-y-[18px] mb-10">
            <div className="display">{infos?.display}</div>
            <div className="headline w-[302px] flex items-end">
              {infos?.id === 1 ? (
                infos?.headline
              ) : (
                <>
                  <div className="w-[226px] headline shrink-0">
                    {infos?.headline}
                  </div>
                  <div className="title text-warmgray-50 mb-1">
                    {infos?.caption}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-full relative">
            <div className="fixed absolute w-full h-12 bottom-0 bg-gradient-to-b from-white to-transparent transform rotate-180"></div>
            {infos?.comp}
          </div>
        </div>
        {infos?.id === 1 ? (
          <div className="w-full">
            <Button mode="alive" func={clickNext} state={true} size="big" />
          </div>
        ) : (
          <div className="flex space-x-4">
            <Button mode="ghost" func={clickBefore} state={true} size="big" />
            <Button
              mode="alive"
              func={() => router.push("/main")}
              state={isActivated}
              size="big"
            />
          </div>
        )}
      </div>
    </div>
  );
}
