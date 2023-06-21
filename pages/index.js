import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import Button from "shared/Button";
import Topbar from "shared/Topbar";

export default function Home() {
  const router = useRouter();

  const routeSignup = () => router.push("/signup");
  const routeLogin = () => router.push("/login");

  const routeOnbooarding = () => router.push("/onboarding");

  const cookieOrToken = false;

  // useEffect(() => {
  //   const checkUserToken = async () => {
  //     cookieOrToken ? routeHome() : routeOnbooarding();
  //   };

  //   checkUserToken();
  // });
  // TODO: 토큰 확인 후 페이지 라우팅

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[280px] h-[280px] bg-white border-2">
          <div className="border h-36">will be logo splash</div>
        </div>
      </div>
    </>
  );
}
