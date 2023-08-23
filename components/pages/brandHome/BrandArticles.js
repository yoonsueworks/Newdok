import { useRouter } from "next/router";
import BrandArticle from "./BrandArticle";

const BrandArticles = ({ data }) => {
  const router = useRouter();
  const containerCSS =
    "w-full px-5 py-8 grid gap-y-4 bg-purple-700 overflow-auto";
  const titleCSS = "text-white single-18-b";
  const listCSS = "grid gap-y-2.5";
  const reversedData = data.reverse();
  console.log(data, reversedData);

  return (
    <div className={containerCSS}>
      <span className={titleCSS}>지난 아티클 보기</span>
      <ul className={listCSS}>
        {reversedData.map((el) => {
          return (
            <BrandArticle
              func={() => router.push(`/articleRead/${el.id}`)}
              data={el}
              key={el.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BrandArticles;
