import { useContext } from "react";
import { GlobalContext } from "../../_app";

import AppBar from "shared/AppBar";
import ProgressBar from "shared/ProgressBar";
import Texts from "components/pages/userResearch/Texts";
import Buttons from "components/pages/userResearch/Buttons";

export default function UserResearchLayout({ infos, comp }) {
  const { page } = useContext(GlobalContext);

  return (
    <div className="w-full h-full pb-14 flex flex-col content-between">
      <div className="flex flex-col h-full">
        <AppBar
          iconl={page !== 1}
          textl={""}
          iconr={page === 1}
          func={() => history.back()}
        />
        <ProgressBar type="userResearch" />
        <div className="mt-14 px-5 h-full">
          <Texts infos={infos} className="mb-7" />
          <div className="overflow-hidden h-max-[437px]">{comp}</div>
        </div>
      </div>

      <Buttons infos={infos} />
    </div>
  );
}
