import { useRouter } from "next/router";
import Image from "next/image";

import Tags from "shared/Tags";

const RecommendedCard = ({ data }) => {
  const router = useRouter();

  return (
    <li
      className="border border-neutralgray-200 rounded-xl flex flex-col w-[320px] h-fit"
      onClick={() => router.push(`/brandHome/${data.brandId}`)}
    >
      <div className="bg-neutral-50 rounded-tr-xl rounded-tl-xl flex px-5 py-4">
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
        <div className="grid gap-y-1">
          <div className="text-[#1e1e1e] text-base font-medium font-['Spoqa Han Sans Neo'] leading-normal">
            {data.brandName}
          </div>
          <div className="text-[#555555] text-[11px] font-normal font-['Spoqa Han Sans Neo'] leading-none">
            매주 평일 아침
          </div>
        </div>
      </div>
      <div className="px-5 pt-3 pb-4 flex flex-col gap-y-3">
        <div className="text-[#555555] text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          {data.shortDescription}
        </div>
        <Tags tags={data.interests} />
      </div>
    </li>
  );
};

export default RecommendedCard;
