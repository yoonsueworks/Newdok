import { useEffect } from "react";
import Image from "next/image";

export default function LoadingSplash() {
  useEffect(() => {
    const preventGoBack = () => {
      history.pushState(null, "", location.href);
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);

    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-6 bg-white">
      <Image
        src="/images/Newdok_Logo-motion.gif"
        alt="My GIF"
        className="object-cover mb-20"
        width="300"
        height="400"
        priority={true}
      />
      <div className="header_1 text-center">
        사용자님께 맞는 <br />
        뉴스레터를 찾고있어요...🔍
      </div>
    </div>
  );
}
