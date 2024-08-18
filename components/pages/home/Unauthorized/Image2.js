import Image from "next/image";

const Image2 = () => {
  return (
    <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full  sm:flex sm:justify-center xs:flex xs:justify-center">
      <div className="flex sm:flex-col-reverse xs:flex-col-reverse justify-center items-center">
        <div className="w-[360px] h-[360px] rounded-xl flex-shrink-0 relative ">
          <Image
            alt="뉴스레터 이미지"
            src="/images/home_4.png"
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
        <div className="flex flex-col">
          <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-2xl font-bold xl:leading-9">
            다른 메일과 섞이지 않고
            <br />
            오늘 받은 뉴스레터만 한눈에
          </div>
          <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
            복잡하게 쌓여가는 메일함은 안녕!
            <br />
            이젠 뉴스레터만 날짜별로 모아볼 수 있어요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image2;
