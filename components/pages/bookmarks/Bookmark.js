import { useRouter } from "next/router";
import Image from "next/image";

const Bookmark = ({
  brandId,
  articleId,
  articleTitle,
  brandName,
  date,
  sampleText,
  imageURL,
}) => {
  const router = useRouter();
  return (
    <div
      className="border border-neutralgray-200 px-4 py-5 rounded-xl bg-white flex grid grid-y-3 cursor-pointer"
      key={brandId}
      onClick={() => router.push(`/articleRead/${articleId}`)}
    >
      <div className="flex justify-between mb-2">
        <span className="title-s text-neutralgray-900 ">{articleTitle}</span>
        <div className="label-l text-neutralgray-600 xl:block md:block sm:hidden xs:hidden">
          {date}
        </div>
      </div>
      <div className="body-s text-neutralgray-700 mb-3">{sampleText}</div>
      <div
        className="input-01 text-neutralgray-700 flex gap-x-1 w-full flex justify-between"
        onClick={() => router.push(`/brandHome/${brandId}`)}
      >
        <div className="">
          <div className="flex">
            <div className="w-5 h-5 rounded-xl flex-shrink-0 relative border border-warmgray-30 mr-1">
              <Image
                alt={brandName}
                src={imageURL}
                fill
                sizes="20"
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
            {brandName}
          </div>
        </div>
        <div className="label-l text-neutralgray-600 sm:block xs:block xl:hidden md:hidden break-keep">
          {date}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
