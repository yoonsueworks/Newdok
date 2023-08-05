import Button from "shared/Button";
import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "pages/_app";
import { FetchResearchResult } from "pages/api/userResearch";

const Buttons = ({ infos }) => {
  const {
    clickNext,
    clickBefore,
    isActivated,
    research,
    userInfos,
    setIntersection,
    setUnion,
    setPage,
  } = useContext(GlobalContext);
  const router = useRouter();

  const getResponseDatas = () => {
    setIntersection(fetch.intersection);
    setUnion(fetch.union);
  };

  const fetchResearch = () => {
    const fetch = () => FetchResearchResult(research, userInfos?.interests);
    fetch();
    getResponseDatas();
    setPage((prev) => prev + 1);
  };

  return (
    <div className="px-5">
      {infos?.id === 1 ? (
        <Button
          mode="default"
          text="시작하기"
          state={true}
          size="big"
          func={clickNext}
        />
      ) : infos?.id === 2 ? (
        <div>
          <Button
            mode="alive"
            func={clickNext}
            state={isActivated}
            size="big"
            text="다음"
            onboarding="산업군을"
          />
        </div>
      ) : infos?.id === 3 ? (
        <div className="flex space-x-4">
          <Button
            mode="alive"
            func={fetchResearch}
            state={isActivated}
            size="big"
            text="다음"
            onboarding="관심사를"
          />
        </div>
      ) : (
        <Button
          mode="ghost"
          text="메인으로"
          state={true}
          size="big"
          func={() => router.push("/home")}
        />
      )}
    </div>
  );
};

export default Buttons;
