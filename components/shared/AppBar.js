import LogoIcon from "icons/ver3.0/ver3.0_logo.svg";
import { useRouter } from "next/router";

const AppBar = ({ iconl, textl, iconr, func, shadow }) => {
  const router = useRouter();

  const shadowCSS = shadow ? "elevation-1-bottom" : "";

  return (
    <div
      className={`w-full h-14 flex justify-between items-center p-5 ${shadowCSS} bg-white z-1 `}
    >
      <div className="flex h-fit items-center gap-x-4 shrink-0 w-full sm:justify-between xs:justify-between">
        <div
          className="sm:block xs:block md:hidden xl:hidden flex shrink-0 items-center "
          onClick={func}
        >
          {iconl && <LogoIcon width="16" height="16" />}
        </div>
        <div className="shrink-0 title-s w-fit flex items-center h-fit">
          {textl}
        </div>
        <div className="sm:block xs:block md:hidden xl:hidden w-4 h-4"></div>
      </div>
      <div className="w-fit h-fit">
        {iconr && (
          <button
            type="button"
            className="single-16-m h-full"
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

export default AppBar;
