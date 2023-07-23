const BrandArticle = ({ func }) => {
  const wrapperCSS =
    "h-fit p-5 grid gap-y-2.5 rounded-lg border border-warmgray-20 bg-white";

  const titleCSS = "block single-18-b text-warmgray-100";
  const dateCSS = "block single-12-m text-warmgray-60";

  return (
    <li className={wrapperCSS} onClick={func}>
      <span className={titleCSS}>🦔또 내지갑만 진심(으로 텅텅)이지</span>
      <span className={dateCSS}>6월 8일 (목) 오전 6:34</span>
    </li>
  );
};

export default BrandArticle;
