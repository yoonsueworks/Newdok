import { useRouter } from "next/router";
import BrandArticle from "./BrandArticle";

const BrandArticles = ({ data }) => {
  const router = useRouter();
  const containerCSS = "pb-8 bg-purple-700 h-full px-5";
  const listCSS = "flex flex-col gap-y-2.5";

  return (
    <div className="w-full h-full">
      <div className={containerCSS}>
        <div className="overflow-scroll">
          {data.length > 0 ? (
            <ul className={listCSS}>
              {data.map((el) => {
                return (
                  <BrandArticle
                    func={() => router.push(`/articleRead/${el.id}`)}
                    data={el}
                    key={el.id}
                  />
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col mt-24 items-center gap-y-1">
              <div className="multiple-20-b text-white">
                아티클을 준비하는 중이에요.
              </div>
              <span className="multiple-16-m text-white">
                조금만 기다려주세요!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandArticles;
