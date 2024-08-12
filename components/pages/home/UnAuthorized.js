import Image from "next/image";

const UnAuthorized = () => {
  return (
    <div className="w-full h-full justify-between bg-neutralgray-50">
      {/* 1 */}
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
            <button className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-full w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 ">
              뉴스레터 추천받기
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-[362px] xs:h-[362px] bg-white">
        <div>
          <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-xl font-bold xl:leading-9">
            지금 인기 있는 뉴스레터
          </div>
          <div>뉴스레터 스와이퍼</div>
        </div>
      </div>
      {/* 3 */}
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
      {/* 4 */}
      <div className="w-full xl:h-[400px] md:h-[296px] sm:h-full xs:h-full sm:flex sm:justify-center xs:flex xs:justify-center">
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
      {/* 5 */}
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
      {/* 6 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-white flex flex-col text-center justify-center">
        <div className="mb-5 bg-gradient-to-r from-[#759CFB] to-[#3563FE] bg-clip-text text-transparent text-4xl sm:text-2xl xs:text-2xl font-bold sm:leading-9 xs:leading-9 leading-[48px]">
          뉴독에서 다양한 <br /> 뉴스레터를 만나보세요
        </div>
        <div className="xl:text-base font-medium leading-relaxed text-[#565656]">
          요즘 뜨는 트렌드부터 업무 인사이트까지,
          <br />
          흥미로운 뉴스레터가 기다리고 있어요.
        </div>
      </div>
      {/* 6 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-white">
        <div className="text-xl font-bold text-[#333333]">
          오늘 구독하면 내일 도착!
        </div>
        <div> 컴포넌츠</div>
      </div>
      {/* 7 */}
      <div className="w-full xl:h-[365px] md:h-[365px] sm:h-full xs:h-full bg-white">
        <div className="text-xl font-bold text-[#333333]">
          NEW! 새로 등록된 뉴스레터
        </div>
        <div> 컴포넌츠</div>
      </div>
      {/* 8 */}
      <div className="w-full xl:h-[600px] md:h-[338px] sm:h-[298px] xs:h-[298px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#759CFB] to-[#3563FE]">
        <div className="text-4xl sm:text-[26px] xs:text-[26px] text-white font-bold leading-[48px] sm:leading-10 xs:leading-10">
          나를 위한 뉴스레터 구독,
          <br />
          뉴독에서 더욱 편리하게
        </div>
        <button className="mt-5 xl:mt-6 text-white xl:text-xl text-base font-bold font-['Pretendard'] leading-7 bg-blue-600 rounded-full w-fit xl:px-8 xl:py-[18px] px-6 py-2.5 ">
          뉴스레터 구독하기
        </button>
      </div>
      {/* 9 */}
      <footer>footer</footer>
    </div>
  );
};

export default UnAuthorized;
