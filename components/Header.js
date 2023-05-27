import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Topbar from "./Topbar";

export default function Header({ clickedTab, changeTab, tabs, clickedId }) {
  const clickedCSS =
    "h-full w-2/4 flex justify-center items-center headline_s text-purple-30 border-b-2 border-purple-30";
  const unClickedCss =
    "h-full w-2/4 flex justify-center items-center headline_s text-warmgray-100 ";

  return (
    <header className="w-full absolute fixed z-10 cursor-pointer">
      <Topbar />
      <Image
        src="/images/GNB.png"
        alt="splashImage"
        width={0}
        height={0}
        sizes="100vw"
        priority={false}
        style={{ width: "100%", height: "auto" }}
      />

      <div className="absolute w-full">
        <div className="top-0 bg-white">
          <div className="h-14 flex w-full">
            {tabs.map(({ id, name }) => {
              return (
                <div
                  key={id}
                  id={id}
                  className={clickedId === id ? clickedCSS : unClickedCss}
                  onClick={(e) => changeTab(e.target.id)}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

const TABNAMES = [
  {
    id: 1,
    name: "추천 뉴스레터",
  },
  {
    id: 2,
    name: "산업별 뉴스레터",
  },
];
