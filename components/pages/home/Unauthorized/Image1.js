import Image from "next/image";

const Image1 = () => {
  return (
    <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full sm:px-5 xs:px-5 sm:py-12 xs:py-12 bg-[#F5F5F7] sm:flex sm:justify-center xs:flex xs:justify-center">
      <div className="flex sm:flex-col xs:flex-col justify-center items-center">
        <div className="flex flex-col sm:mb-14 xs:mb-14">
          <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
            일일이 찾아볼 필요 없이 <br /> 내게 필요한 뉴스레터만 쏙쏙
          </div>
          <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
            어떤 뉴스레터를 구독해야 할지 모르겠다면
            <br />
            종사 중인 산업과 관심사만 등록하세요.
            <br />
            뉴독이 대신 찾아드릴게요!
          </div>
        </div>
        <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
          <Image
            alt="뉴스레터 이미지"
            src="/images/home_3.png"
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

export default Image1;
