import Button from "shared/Button";
import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "pages/_app";

const Buttons = ({ infos }) => {
  const { clickNext, isActivated, setPage } = useContext(GlobalContext);
  const router = useRouter();

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
            func={clickNext}
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
