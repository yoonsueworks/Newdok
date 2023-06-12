import { useEffect, useState } from "react";
import S from "./progressbar.module.css";

export default function ProgressBar({ progress, type }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (type === "userResearch") {
      if (progress === 1) {
        setStyle({
          width: `25%`,
          backgroundColor: "#674188",
        });
      } else if (progress === 2) {
        setStyle({
          width: `50%`,
          backgroundColor: "#674188",
        });
      } else if (progress === 3) {
        setStyle({
          width: `75%`,
          backgroundColor: "#674188",
        });
      } else if (progress === 4) {
        setStyle({
          width: `100%`,
          backgroundColor: "#674188",
        });
      }
    } else if (type === "signUp") {
    }
  }, [progress]);

  return (
    <div className={`${S.progress} h-1 w-full bg-purple=700`}>
      <div className={`${S.changable}`} style={style}></div>
    </div>
  );
}
