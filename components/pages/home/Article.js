const Article = () => {
  const readState = true;

  const articleWrapperCSS = `w-full h-fit flex gap-x-4 items-center border border-warmgray-30 p-4 rounded-lg ${
    readState ? "bg-white text-warmgray-100" : "bg-warmgray-20 text-warmgray-60"
  }`;

  const thumbnailCSS =
    "w-12 h-12 border border-warmgray-30 rounded-full shrink-0";
  const flexBoxCSS = "w-full flex flex-col gap-y-1";
  const titleCSS = "w-full flex justify-between caption_1";
  const readStateCSS = `caption_2 ${
    readState ? "text-purple-400" : "text-warmgray-60"
  }`;

  return (
    <li className={articleWrapperCSS}>
      <div className={thumbnailCSS} />
      <div className={flexBoxCSS}>
        <div className={titleCSS}>
          <div>머니레터:title</div>
          <div className={readStateCSS}>{readState ? "안읽음" : "읽음"}</div>
        </div>
        <div>Article:ArticleTitle</div>
      </div>
    </li>
  );
};

export default Article;
