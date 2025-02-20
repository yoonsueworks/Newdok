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

  const conditionFirstPage = page === 1;
  const conditionSecondPage = page === 2;
  const conditionFifthPage = page === 5;

  return (
    <div className="w-full h-full pb-14 flex flex-col content-between bg-white">
      <div className="flex flex-col bg-white items-center">
        {page > 2 && <ProgressBar type="userResearch" />}
        <div
          className={`mt-14 h-full md:w-[600px] xl:w-[600px] w-full ${
            page !== 1 && "mb-14"
          }`}
        >
          <Texts infos={infos} className="mb-7" />
          {comp}
          <Buttons infos={infos} />
        </div>
      </div>
    </div>
  );
}
