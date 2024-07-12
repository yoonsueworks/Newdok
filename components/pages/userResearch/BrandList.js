import Image from "next/image";
import PublicationCycle from "shared/PublicationCycle";
import BrandName from "shared/BrandName";

const BrandList = ({ data, handleSubscribeClick }) => {
  return (
    <ul
      className="grid gap-y-2.5 w-full overflow-auto scroll-smooth"
      id="onboardInterestsBox"
    >
      {data?.map((brandInfo) => {
        return (
          <div key={brandInfo.id}>
            <ArrivedBrand
              brandInfo={brandInfo}
              handleSubscribeClick={handleSubscribeClick}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default BrandList;

const ArrivedBrand = ({ brandInfo, handleSubscribeClick }) => {
  const {
    brandName,
    id,
    imageUrl,
    interests,
    publicationCycle,
    secondDescription,
  } = brandInfo;
  return (
    <li className="grid w-full h-fit">
      <div className="bg-beige-50 border border-neutralgray-200 p-5 flex justify-between h-fit rounded-t-lg">
        <div className="flex gap-x-4 items-center">
          <div className="w-[48px] h-[48px] rounded-full flex-shrink-0 contentbox-border relative border border-neutralgray-200 flex justify-center items-center">
            <Image
              alt={brandName}
              src={imageUrl}
              fill
              sizes="48"
              quality={45}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
              style={{
                objectFit: "cover",
                borderRadius: 50,
              }}
            />
          </div>
          <div className="grid gap-y-2">
            <BrandName brandName={brandName} />
            <PublicationCycle publicationCycle={publicationCycle} />
          </div>
        </div>
        <button
          type="button"
          id={id}
          onClick={handleSubscribeClick}
          className="p-3.5 h-fit rounded-[10px] bg-purple-700 hover:bg-purple-500 active:bg-purple-800 single-18-b text-white cursor-pointer transition-colors duration-300"
        >
          구독하기
        </button>
      </div>
      <div className="w-full grid bg-white border-b border-l border-r border-neutralgray-200 inset-x-0 p-5 gap-y-3 rounded-b-lg">
        <p className="single-14-m text-neutralgray-900">{secondDescription}</p>
        <ul className="flex gap-x-2 flex-wrap">
          {interests.map((interest, id) => {
            return (
              id < 3 && (
                <li
                  key={interest.id}
                  className="rounded-lg neutralgray-200beige-100 text-purple-700 single-12-m p-2 h-fit shrink-0"
                >
                  {interest.name}
                </li>
              )
            );
          })}
        </ul>
      </div>
    </li>
  );
};
