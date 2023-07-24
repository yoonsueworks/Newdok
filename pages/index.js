import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Button from "shared/Button";
import Topbar from "shared/Topbar";

export default function Home() {
  const router = useRouter();

  const routeSignup = () => router.push("/signUp");
  const routeLogin = () => router.push("/login");

  const routeOnbooarding = () => router.push("/onBoarding");

  const cookieOrToken = false;

  useEffect(() => {
    // const checkUserToken = async () => {
    //   cookieOrToken ? routeHome() : routeOnbooarding();
    // };
    // checkUserToken();
    router.push("/onBoarding");
    // TODO: 토큰 확인 후 페이지 라우팅
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
