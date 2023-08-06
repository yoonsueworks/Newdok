import Image from "next/image";

export default function Home() {
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
