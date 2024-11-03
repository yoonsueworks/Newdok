import Image from "next/image";
import { useRouter } from "next/router";

const GNB = () => {
  const router = useRouter();

  return (
    <>
      <Image
        src="/images/logo_gnb.png"
        alt="newdok"
        width="106"
        height="56"
        className="xl:mt-2 cursor-pointer xl:block md:block sm:hidden xs:hidden"
        onClick={() => router.push("/")}
      />
      <Image
        src="/images/logo_gnb_xs.png"
        alt="newdok"
        width="20"
        height="20"
        className="mx-5 cursor-pointer xl:hidden md:hidden sm:block xs:block"
        onClick={() => router.push("/")}
      />
    </>
  );
};

export default GNB;
