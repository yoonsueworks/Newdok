import { useEffect, useState } from "react";
import S from "./progressbar.module.css";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";

export default function ProgressBar({ type }) {
  const [style, setStyle] = useState({});
  const { progress } = useContext(GlobalContext);
  const pathnameResearch = "userResearch";
  const percent = (progress - 2) * 25;

  useEffect(() => {
    if (type === pathnameResearch) {
      setStyle({
        width: `${percent}%`,
        backgroundColor: "#674188",
        transition: "width 0.5s ease-in-out",
      });
    }
  }, [progress, type, percent]);

  return (
    <div className={`${S.progress} h-1 w-full bg-beige-100`}>
      <div className={`${S.changable}`} style={style}></div>
    </div>
  );
}
