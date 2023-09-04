import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LocalStorage from "public/utils/LocalStorage";

export default function Home() {
  const router = useRouter();
  const token = LocalStorage.getItem("NDtoken");

  useEffect(() => {
    const checkUserToken = async () => {
      await router.push(token ? "/home" : "/introduction");
    };
    setTimeout(() => checkUserToken(), 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[280px] h-[280px] bg-white">
          <Image
            width="280"
            height="280"
            responsive="true"
            alt="Newdok logo"
            src="/images/logo_7_black.png"
            priority
            required
          />
        </div>
      </div>
    </>
  );
}
