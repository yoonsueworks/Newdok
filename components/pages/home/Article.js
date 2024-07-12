import { useRouter } from "next/router";
import Image from "next/image";

const Article = ({ article }) => {
  const router = useRouter();
  const status = article.status === "Unread";

  return (
    <li
      className={`w-full h-fit flex gap-x-4 items-center border p-4 rounded-xl cursor-pointer ${
        status
          ? "bg-white text-warmgray-100 border-neutralgray-200"
          : "bg-neutralgray-200 border-neutralgray-300"
      }`}
      onClick={() => router.push(`/articleRead/${article.articleId}`)}
    >
      <div className="w-58 h-58 rounded-xl flex-shrink-0 relative border border-warmgray-30">
        <Image
          alt={article.brandName}
          src={article.imageUrl}
          fill
          sizes="100"
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
      <div className="w-full flex flex-col gap-y-1 overflow-scroll">
        <div className="w-full flex justify-between">
          <div className="label-l text-neutralgray-700">
            {article.brandName}
          </div>
          <div
            className={`label-s ${
              status ? "text-blue-600" : "text-neutralgray-600"
            }`}
          >
            {status ? "안읽음" : "읽음"}
          </div>
        </div>
        <div className="xl:h-[18px] xl:w-[300px] ts:w-[224px] xs:w-[200px] w-fit input-01 xl:title-s text-neutralgray-800 xl:text-ellipsis sm:text-ellipsis xs:text-ellipsis overflow-hidden whitespace-nowrap">
          {article.articleTitle}
        </div>
      </div>
    </li>
  );
};

export default Article;
