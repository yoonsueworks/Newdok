import { useContext } from "react";
import { GlobalContext } from "../_app";
import Button from "../../components/Button";
import Topbar from "../../components/Topbar";
import { useRouter } from "next/router";

export default function Layout({ infos }) {
  const value = useContext(GlobalContext);
  const { id, display, headline, caption, comp } = infos;
  const { clickNext, clickBefore, isActivated } = value;
  const router = useRouter();

  return (
    <div className="flex flex-col h-full pb-20">
      <Topbar />
      <div className="h-2">
        progressbar---------------progressbar---------------
      </div>
      {/* TODO: progressbar 분리 */}
      <div className="w-full h-full flex flex-col justify-between px-5 mt-16">
        <div className="w-full flex flex-col">
          <div className="mb-10">
            <div className="display">{display}</div>
            <div className="headline">{headline}</div>
          </div>
          <div className="w-full">{comp}</div>
        </div>
        {id === 1 ? (
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
