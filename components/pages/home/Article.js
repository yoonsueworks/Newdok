import { useRouter } from "next/router";
import Image from "next/image";

const Article = ({ article }) => {
  const router = useRouter();
  const readState = true;

  const articleWrapperCSS = `w-full h-fit flex gap-x-4 items-center border border-warmgray-30 p-4 rounded-lg ${
    readState ? "bg-white text-warmgray-100" : "bg-warmgray-20 text-warmgray-60"
  }`;
  const flexBoxCSS = "w-full flex flex-col gap-y-1";
  const titleCSS = "w-full flex justify-between single-14-m";
  const articleTitleCSS = "multiple-18-b break-keep";
  const readStateCSS = `caption_2 ${
    readState ? "text-purple-400" : "text-warmgray-60"
  }`;

  return (
    <li
      className={articleWrapperCSS}
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
      <div className={flexBoxCSS}>
        <div className={titleCSS}>
          <div>{article.brandName}</div>
          <div className={readStateCSS}>{readState ? "안읽음" : "읽음"}</div>
        </div>
        <div className={articleTitleCSS}>{article.articleTitle}</div>
      </div>
    </li>
  );
};

export default Article;
