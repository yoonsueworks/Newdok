import { useRouter } from "next/router";

const Article = ({ html }) => {
  const router = useRouter();
  const readState = true;

  const articleWrapperCSS = `w-full h-fit flex gap-x-4 items-center border border-warmgray-30 p-4 rounded-lg ${
    readState ? "bg-white text-warmgray-100" : "bg-warmgray-20 text-warmgray-60"
  }`;

  const thumbnailCSS =
    "w-12 h-12 border border-warmgray-30 rounded-full shrink-0";
  const flexBoxCSS = "w-full flex flex-col gap-y-1";
  const titleCSS = "w-full flex justify-between single-14-m";
  const articleTitleCSS = "multiple-18-b";
  const readStateCSS = `caption_2 ${
    readState ? "text-purple-400" : "text-warmgray-60"
  }`;

  return (
    <li
      className={articleWrapperCSS}
      onClick={() => router.push("/articleRead")}
    >
      <div className={thumbnailCSS} />
      <div className={flexBoxCSS}>
        <div className={titleCSS}>
          <div>머니레터</div>
          <div className={readStateCSS}>{readState ? "안읽음" : "읽음"}</div>
        </div>
        <div className={articleTitleCSS}>A-Z, 시민단체 보조금 논란</div>
      </div>
    </li>
  );
};

export default Article;
