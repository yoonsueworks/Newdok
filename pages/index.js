import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();
  const routeOnbooarding = () => router.push("/onboarding");
  return (
    <div className="w-full h-full pb-10 flex flex-col items-center justify-end">
      <div className="w-full px-5 flex flex-col items-center justify-between space-y-31.25">
        <div className="mb-10">
          <Image
            src="/images/splash.png"
            alt="splashImage"
            width="207"
            height="278"
          />
        </div>
        <div className="mb-10 headline">필요한 뉴스레터? 📨</div>
        <Button
          func={routeOnbooarding}
          mode="enabled"
          state={true}
          size="big"
        />
      </div>
    </div>
  );
}
