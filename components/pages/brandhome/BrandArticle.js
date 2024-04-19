import { useDateEdit } from "public/hooks/useDateEdit";

const BrandArticle = ({ func, data }) => {
  const formattedDate = useDateEdit(data?.date);

  return (
    <li
      className="h-fit p-5 grid gap-y-2.5 rounded-lg border border-warmgray-20 bg-white cursor-pointer"
      onClick={func}
    >
      <span className="block single-18-b text-warmgray-100">{data.title}</span>
      <span className="block single-12-m text-warmgray-60">
        {formattedDate}
      </span>
    </li>
  );
};

export default BrandArticle;
