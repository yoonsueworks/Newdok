import Article from "./Article";

const Articles = () => {
  const wrapperCSS = "w-full h-fit px-4 grid gap-y-4";
  const titleCSS = "w-full flex justify-between";
  const readStateCSS = "w-fit flex gap-x-1 items-center";
  const badgeCSS =
    "inline-block min-w-[20px] h-5 rounded-full bg-purple-400 text-xs justify-center p-1 text-white leading-none text-center";
  const articlesCSS = "grid gap-y-2.5";

  return (
    <div className={wrapperCSS}>
      <div className={titleCSS}>
        <span>N개의 아티클이 도착했어요.</span>
        <div className={readStateCSS}>
          안읽음
          <div className={badgeCSS}>3</div>
        </div>
      </div>
      <div className={articlesCSS}>
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Articles;
