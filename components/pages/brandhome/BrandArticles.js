import BrandArticle from "./BrandArticle";

const BrandArticles = () => {
  const containerCSS = "w-full px-5 py-8 grid gap-y-4 bg-purple-700";
  const titleCSS = "text-white single-18-b";
  const listCSS = "grid gap-y-2.5";

  return (
    <div className={containerCSS}>
      <span className={titleCSS}>지난 아티클 보기</span>
      <ul className={listCSS}>
        <BrandArticle />
        <BrandArticle />
        <BrandArticle />
      </ul>
    </div>
  );
};

export default BrandArticles;
