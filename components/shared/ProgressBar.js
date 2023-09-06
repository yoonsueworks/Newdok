import { useEffect, useState } from "react";
import S from "./progressbar.module.css";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";

export default function ProgressBar({ type }) {
  const [style, setStyle] = useState({});
  const { progress } = useContext(GlobalContext);

  useEffect(() => {
    if (type === "userResearch") {
      setStyle({
        width: `${progress * 25}%`,
        backgroundColor: "#674188",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <div className={`${S.progress} h-1 w-full bg-beige-100`}>
      <div className={`${S.changable}`} style={style}></div>
    </div>
  );
}
