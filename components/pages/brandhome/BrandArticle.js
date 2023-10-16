import { useDateEdit } from "public/hooks/useDateEdit";

const BrandArticle = ({ func, data }) => {
  const formattedDate = useDateEdit(data?.date);
  const wrapperCSS =
    "h-fit p-5 grid gap-y-2.5 rounded-lg border border-warmgray-20 bg-white cursor-pointer";

  const titleCSS = "block single-18-b text-warmgray-100";
  const dateCSS = "block single-12-m text-warmgray-60";


  return (
    <li className={wrapperCSS} onClick={func}>
      <span className={titleCSS}>{data.title}</span>
      <span className={dateCSS}>{formattedDate}</span>
    </li>
  );
};

export default BrandArticle;
