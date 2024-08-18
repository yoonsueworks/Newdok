import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center text-[#333333] xl:text-4xl md:text-2xl md:leading-9 sm:text-xl sm:leading-7 xs:text-xl xs:leading-7 font-bold font-['Pretendard'] leading-[52px] bg-[#F5F5F7] ">
      <div className="w-full h-full rounded-xl flex-shrink-0 relative ">
        <Image
          alt="뉴스레터 이미지"
          src="/images/home_8.png"
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
          <div className="text-4xl sm:text-[26px] xs:text-[26px] text-white font-bold leading-[48px] sm:leading-10 xs:leading-10">
            나를 위한 뉴스레터 구독,
            <br />
            뉴독에서 더욱 편리하게
          </div>
          <button
            className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-xl w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 "
            onClick={() => router.push("/login")}
          >
            뉴스레터 구독하기
          </button>
        </div>
      </div>
    </div>
  );
  <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center text-[#333333] xl:text-4xl md:text-2xl md:leading-9 sm:text-xl sm:leading-7 xs:text-xl xs:leading-7 font-bold font-['Pretendard'] leading-[52px] bg-[#F5F5F7] ">
    <div className="w-full h-full rounded-xl flex-shrink-0 relative ">
      <Image
        alt="뉴스레터 이미지"
        src="/images/home_8.png"
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
        <div className="text-4xl sm:text-[26px] xs:text-[26px] text-white font-bold leading-[48px] sm:leading-10 xs:leading-10">
          나를 위한 뉴스레터 구독,
          <br />
          뉴독에서 더욱 편리하게
        </div>
        <button
          className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-xl w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 "
          onClick={() => router.push("/login")}
        >
          뉴스레터 구독하기
        </button>
      </div>
    </div>
  </div>;
};

export default Subscribe;
