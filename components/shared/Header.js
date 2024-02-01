import Image from "next/image";
import { useRouter } from "next/router";
import Topbar from "./Topbar";

export default function Header({ clickedTab, changeTab, tabs, clickedId }) {
  const clickedCSS =
    "h-full w-2/4 flex justify-center items-center single-20-b text-purple-700 border-b-2 border-purple-700";

  const unClickedCss =
    "h-full w-2/4 flex justify-center items-center single-20-m text-neutralgray-900 border-b-2 border-white";

  return (
    <>
      <div className="w-full h-fit z-1 cursor-pointer">
        <div className="w-full h-fit">
          <div className="top-0 bg-white">
            <div className="h-[64px] flex w-full">
              {tabs.map(({ id, name }) => {
                return (
                  <div
                    key={id}
                    id={id}
                    className={`${
                      clickedId === id ? clickedCSS : unClickedCss
                    } transition-all duration-300`}
                    onClick={(e) => changeTab(e.target.id)}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TABNAMES = [
  {
    id: 1,
    name: "추천 뉴스레터",
  },
  {
    id: 2,
    name: "모든 뉴스레터",
  },
];
