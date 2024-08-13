import { useDateEdit } from "public/hooks/useDateEdit";

const ArticleTitle = ({ data }) => {
  const formattedDate = useDateEdit(data?.date);
  return (
    <div className="w-full h-fit absolute bg-white z-10 p-4 flex flex-col gap-y-1 border-b border-neutralgray-300">
      <div className="title-s text-neutralgray-800">{data.articleTitle}</div>
      <div className="body-s text-neutralgray-600">{formattedDate}</div>
    </div>
  );
};

export default ArticleTitle;
