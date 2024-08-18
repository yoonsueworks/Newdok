import { useRouter } from "next/router";
import Image from "next/image";

const Find = () => {
  const router = useRouter();
  return (
    <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center text-[#333333] xl:text-4xl md:text-2xl md:leading-9 sm:text-xl sm:leading-7 xs:text-xl xs:leading-7 font-bold font-['Pretendard'] leading-[52px] bg-[#F5F5F7] ">
      <div className="w-full h-full rounded-xl flex-shrink-0 relative ">
        <Image
          alt="뉴스레터 이미지"
          src="/images/home_1.png"
          fill
          sizes="20"
          quality={45}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute mx-auto left-0 right-0 xl:top-[180px] md:top-20 sm:top-[72px] xs:top-[72px]">
          <div>
            지금 내게 필요한 뉴스레터,
            <br />
            가장 빠르게 찾는 방법
          </div>
          <button
            className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-full w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 "
            onClick={() => router.push("/login")}
          >
            뉴스레터 추천받기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Find;
