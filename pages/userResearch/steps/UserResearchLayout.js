import { useContext } from "react";
import { GlobalContext } from "../../_app";

import AppBar from "shared/AppBar";
import ProgressBar from "shared/ProgressBar";
import Texts from "components/pages/userResearch/Texts";
import Buttons from "components/pages/userResearch/Buttons";

export default function UserResearchLayout({ infos, comp }) {
  const { page, setPage, handleProgress } = useContext(GlobalContext);
  const handlePageBtn = () => {
    setPage((prev) => prev - 1);
    handleProgress(false);
  };

  const conditionfirstPage = page === 1;

  return (
    <div className="w-full h-full pb-14 flex flex-col content-between">
      <div className="flex flex-col h-full bg-white">
        <div className="elevation-1-bottom">
          <AppBar
            iconl={!conditionfirstPage}
            textl={""}
            iconr={conditionfirstPage}
            func={handlePageBtn}
          />
        </div>
        {!conditionfirstPage && <ProgressBar type="userResearch" />}
        <div className="mt-14 px-5 h-full mb-14">
          <Texts infos={infos} className="mb-7" />
          {comp}
        </div>
      </div>
      <Buttons infos={infos} />
    </div>
  );
}
