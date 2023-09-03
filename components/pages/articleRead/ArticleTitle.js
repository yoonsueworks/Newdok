import { useDateEdit } from "public/hooks/useDateEdit";

const ArticleTitle = ({ data }) => {
  const formattedDate = useDateEdit(data?.date);
  return (
    <div className="w-full h-fit absolute bg-purple-700 z-10 p-4 flex flex-col gap-y-2">
      <h6 className="multiple-18-b text-white">{data.articleTitle}</h6>
      <div className="single-12-m text-beige-100">{formattedDate}</div>
    </div>
  );
};

export default ArticleTitle;
