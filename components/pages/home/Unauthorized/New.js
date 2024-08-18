import Image from "next/image";
import { useBrowseAll } from "service/hooks/newsletters";

const New = () => {
  const orderOpt = `orderOpt=%EC%B5%9C%EC%8B%A0%20%EB%93%B1%EB%A1%9D%EC%88%9C`;
  const { data } = useBrowseAll(orderOpt);
  const recommendedBrandsUpto4 = data?.slice(0, 4);

  return (
    <div className="w-full xl:h-[365px] h-[500px] bg-white flex flex-col justify-center xl:px-[72px] md:px-8 sm:px-4 xs:px-4 gap-y-4">
      <div className="text-xl font-bold text-[#333333] pl-2">
        NEW! 새로 등록된 뉴스레터
      </div>
      <ul className="grid xl:grid-cols-2 gap-x-3 gap-y-3">
        {recommendedBrandsUpto4?.map((data) => (
          <li
            className="bg-white px-5 py-4 h-max w-full border border-neutralgray-200 rounded-xl flex gap-x-2"
            key={data.brandId}
          >
            <div className="w-12 h-12 rounded-xl flex-shrink-0 border border-neutralgray-300 relative mr-3">
              <Image
                alt={data.brandName}
                src={data.imageUrl}
                fill
                sizes="100"
                quality={45}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
                style={{
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="button-02">{data.brandName}</div>
              <div className="text-[13px] font-normal break-keep w-full">
                {data.shortDescription}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default New;
