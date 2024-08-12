import Image from "next/image";
import { useRouter } from "next/router";
import Tags from "./Tags";
import { useEffect } from "react";

function ListedItem({ datas }) {
  const router = useRouter();
  const {
    brandId,
    brandName,
    imageUrl,
    interests,
    secondDescription,
    shortDescription,
    id,
    isSubscribed,
  } = datas;

  return (
    <li
      className="bg-white p-5 h-max w-full border border-neutralgray-200 rounded-xl cursor-pointer"
      onClick={() => router.push(`/brandHome/${brandId || id}`)}
    >
      <div className="flex gap-x-4">
        <div className="w-12 h-12 rounded-xl flex-shrink-0 border border-neutralgray-300 relative">
          <Image
            alt={brandName}
            src={imageUrl}
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
        <div className="flex flex-col gap-y-4">
          <div className="grid gap-y-1">
            <div className="flex items-center gap-x-2  mb-1">
              <div className="button-02">{brandName}</div>
              {isSubscribed === "CONFIRMED" && (
                <div className="px-1.5 py-1 bg-blue-600 rounded-full text-white label-s">
                  구독 중
                </div>
              )}
            </div>
            <div className="text-[13px] font-normal break-keep w-full">
              {secondDescription || shortDescription}
            </div>
          </div>
          <Tags tags={interests} />
        </div>
      </div>
    </li>
  );
}

export default function Lists({ datas }) {
  return (
    <>
      <ul className="grid gap-y-2.5 xl:gap-x-2.5">
        {datas?.length > 1 &&
          datas?.map((data) => {
            return <ListedItem key={data.id || data.brandId} datas={data} />;
          })}
      </ul>
    </>
  );
}
