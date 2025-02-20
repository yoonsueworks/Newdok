import Image from "next/image";

import { useDateEdit } from "public/hooks/useDateEdit";

const ArticleTitle = ({ data }) => {
  const formattedDate = useDateEdit(data?.date);
  return (
    <>
      {/* display : xl, md */}
      <div className="w-full h-fit absolute bg-white z-10 p-4 flex flex-col gap-y-1 border-b border-neutralgray-300 xl:block md:block sm:hidden xs:hidden">
        <div className="title-s text-neutralgray-800">{data.articleTitle}</div>
        <div className="body-s text-neutralgray-600">{formattedDate}</div>
      </div>
      {/* display : xs, sm */}
      <div className="sm:block xs:block md:hidden xl:hidden w-full h-[200px]">
        <div className="w-full h-full relative">
          {/* Image with z-index 1 */}
          <Image
            alt="뉴스레터 이미지"
            src={data.brandImageUrl}
            fill
            sizes="100"
            quality={45}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
            style={{
              objectFit: "cover",
              zIndex: 1, // Image behind the gradient and title
            }}
          />

          <div className="w-full h-full bg-gradient-to-b from-[#000000]/0 to-[#1e1e1e] shadow opacity-40 absolute top-0 left-0 z-10"></div>
          <div className="absolute left-0 bottom-0 z-20 mx-auto p-4">
            <h3 className="text-white title-s">{data.articleTitle}</h3>
            <div className="text-neutralgray-200 body-s">{formattedDate}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleTitle;
