import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Nickname from "shared/Nickname";

const UserResearchPage = ({ infos }) => {
  const { page } = useContext(GlobalContext);

  return (
    <div className="grid  mb-7">
      <div className="w-full grid gap-y-1">
        <div className="w-full multiple-24-b shrink-0 mb-1">
          {page === 4 && <Nickname />}
          {infos?.header_1_1}
          <br />
          {infos?.header_1_2}
          <br />
          {/* {page === 1 && <Nickname />} */}
          {infos?.header_1_3}
        </div>
        <div className="multiple-16-m text-neutralgray-900 mb-1">
          {infos?.caption}
          <br />
          {infos?.caption_2}
          <br />
          {infos?.caption_3}
        </div>
      </div>
    </div>
  );
};

export default UserResearchPage;
