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
      className="bg-white p-5 h-max w-full border border-neutralgray-200 rounded-lg cursor-pointer"
      onClick={() => router.push(`/brandHome/${brandId || id}`)}
    >
      <div className="flex gap-x-4">
        <div className="w-58 h-58 rounded-full flex-shrink-0 border border-neutralgray-200 relative">
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
              borderRadius: 50,
            }}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="grid gap-y-3">
            <div className="flex items-center gap-x-2  mb-1">
              <h4 className="single-18-sb">{brandName}</h4>
              {isSubscribed === "CONFIRMED" && (
                <div className="p-1 bg-purple-400 rounded-full w-fit h-fit text-white single-12-sb">
                  구독 중
                </div>
              )}
            </div>
            <div className="single-14-m break-keep w-full">
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
      <ul className="grid gap-y-2.5">
        {datas?.length > 1 &&
          datas?.map((data) => {
            return <ListedItem key={data.id} datas={data} />;
          })}
      </ul>
    </>
  );
}
