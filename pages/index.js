import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { authSelector } from "service/atoms/selectors";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useRecoilValue(authSelector);

  useEffect(() => {
    router.push("/home");
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
