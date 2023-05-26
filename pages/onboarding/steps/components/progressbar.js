import { useEffect, useState } from "react";
import S from "./progressbar.module.css";

export default function Progressbar({ progress }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
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
  }, [progress]);

  return (
    <div className={`${S.progress} h-2 w-full bg-purple=30`}>
      <div className={`${S.changable}`} style={style}>
        {/* {width}% */}
      </div>
    </div>
  );
}
