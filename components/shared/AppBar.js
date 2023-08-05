import BackIcon from "icons/back_off.svg";
import { useRouter } from "next/router";

const Appbar = ({ iconl, textl, iconr, func }) => {
  const router = useRouter();
  return (
    <div className="w-full h-fit flex justify-between items-center p-2.5">
      <div className="flex h-fit items-center gap-x-4 shrink-0">
        <button
          type="button"
          className="flex h-11 p-1.5 shrink-0 items-center"
          onClick={func}
        >
          {iconl && <BackIcon width="24" height="24" className="shrink-0" />}
        </button>
        <div className="shrink-0 single-20-b w-fit">{textl}</div>
      </div>
      <div className="w-fit h-fit">
        {iconr && (
          <button
            type="button"
            className="single-16-m p-1.5 h-full"
            onClick={() => router.push("/home")}
          >
            <span className="border-b border-neutralgray-900 text-neutralgray-900">
              건너뛰기
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Appbar;
