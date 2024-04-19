import { useRouter } from "next/router";
import Image from "next/image";

const Article = ({ article }) => {
  const router = useRouter();
  const status = article.status === "Unread";

  return (
    <li
      className={`w-full h-fit flex gap-x-4 items-center border border-warmgray-30 p-4 rounded-lg cursor-pointer ${
        status
          ? "bg-white text-warmgray-100"
          : "bg-warmgray-20 text-warmgray-60"
      }`}
      onClick={() => router.push(`/articleRead/${article.articleId}`)}
    >
      <div className="w-58 h-58 rounded-full flex-shrink-0 relative border border-warmgray-30">
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
            borderRadius: 50,
          }}
        />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full flex justify-between single-14-m">
          <div>{article.brandName}</div>
          <div
            className={`caption_2 ${
              status ? "text-purple-400" : "text-warmgray-60"
            }`}
          >
            {status ? "안읽음" : "읽음"}
          </div>
        </div>
        <div className="multiple-18-b break-keep">{article.articleTitle}</div>
      </div>
    </li>
  );
};

export default Article;
