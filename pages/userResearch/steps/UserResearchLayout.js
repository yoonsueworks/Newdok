import { useContext } from "react";
import { GlobalContext } from "../../_app";

import Topbar from "shared/Topbar";
import ProgressBar from "shared/ProgressBar";
import Texts from "components/pages/userResearch/Texts";
import Buttons from "components/pages/userResearch/Buttons";

export default function UserResearchLayout({ infos, comp }) {
  const { page } = useContext(GlobalContext);
  console.log(page);
  return (
    <div className="w-full h-full pb-14 flex flex-col content-between">
      <div className="flex flex-col h-full">
        <Topbar />
        <ProgressBar type="userResearch" />
        <div className="mt-14 px-4">
          <Texts infos={infos} className="mb-7" />
          {comp}
        </div>
      </div>

      <Buttons infos={infos} />
    </div>
  );
}
