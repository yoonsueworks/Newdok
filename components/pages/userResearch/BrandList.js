import Image from "next/image";
import PublicationCycle from "shared/PublicationCycle";
import BrandName from "shared/BrandName";
import Tags from "../../shared/Tags";

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
      <div className="bg-neutralgray-50 border border-neutralgray-200 p-5 flex justify-between h-fit rounded-t-xl">
        <div className="flex gap-x-4 items-center">
          <div className="w-[48px] h-[48px] rounded-xl flex-shrink-0 contentbox-border relative border border-neutralgray-200 flex justify-center items-center">
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
                borderRadius: 11,
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
          className="px-5 py-2 h-fit rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 button-03 text-white cursor-pointer transition-colors duration-300"
        >
          구독하기
        </button>
      </div>
      <div className="w-full grid bg-white border-b border-l border-r border-neutralgray-200 inset-x-0 p-5 gap-y-3 rounded-b-xl">
        <p className="body-s text-neutralgray-900">{secondDescription}</p>
        <ul className="flex gap-x-2 flex-wrap">
          <Tags tags={interests} />
        </ul>
      </div>
    </li>
  );
};
