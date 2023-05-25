import { useContext } from "react";
import { GlobalContext } from "../../_app";
import Button from "../../../components/Button";
import Topbar from "../../../components/Topbar";
import { useRouter } from "next/router";
import Onboarding from "../index";

export default function Layout({ infos }) {
  const value = useContext(GlobalContext);
  const { clickNext, clickBefore, isActivated } = value;
  const router = useRouter();

  if (!infos) {
    return null; // or display a loading state/error message
  }
  const { id, display, headline, caption, comp } = infos;
  // console.log(infos);

  return (
    // <div className="flex flex-col h-full pb-20">
    //   <Topbar />
    //   <div className="h-2">
    //     progressbar------------TODO: progressbar 분리--------------
    //   </div>
    // </div>
    <div className="flex flex-col h-full pb-20">
      <Topbar />
      <div className="h-2">
        progressbar---------------progressbar---------------
      </div>
      {/* TODO: progressbar 분리 */}
      <div className="w-full h-full flex flex-col justify-between px-5 mt-16">
        <div className="w-full flex flex-col">
          <div className="mb-10">
            <div className="display">{infos?.display}</div>
            <div className="headline">{infos?.headline}</div>
          </div>
          <div className="w-full">{infos?.comp}</div>
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
