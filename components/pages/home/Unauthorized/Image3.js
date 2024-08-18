import Image from "next/image";

const Image3 = () => {
  return (
    <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-[#F5F5F7] sm:flex sm:justify-center xs:flex xs:justify-center">
      <div className="flex sm:flex-col xs:flex-col justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
            어려운 구독 중지도
            <br />
            뉴독에서는 쉽고 빠르게
          </div>
          <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
            그만 보고 싶은 뉴스레터도, 기억하고 싶은 아티클도
            <br />
            버튼 하나로 간편하게 관리해요!
          </div>
        </div>
        <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
          <Image
            alt="뉴스레터 이미지"
            src="/images/home_5.png"
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
        </div>
      </div>
    </div>
  );
};

export default Image3;
