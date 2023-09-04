import { useArticleRead } from "service/hooks/newsletters";
import { useRouter } from "next/router";

import ArticleTitle from "components/pages/articleRead/ArticleTitle";
import BrandInfoBar from "shared/BrandInfoBar";
import Background2 from "shared/Background2";
import Loading from "shared/Loading";
import Nav from "shared/Nav";

const ArticleRead = () => {
  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useArticleRead(pathBrandId);

  return (
    <div className="w-full h-full relative">
      {data ? (
        <>
          <BrandInfoBar name={data.brandName} />
          <ArticleTitle data={data} />
          <div className="w-full h-full overflow-scroll pt-[79px] relative">
            {data && (
              <div dangerouslySetInnerHTML={{ __html: data.articleHTML }}></div>
            )}
          </div>
          <div className="sticky bottom-0">
            <Nav />
          </div>
        </>
      ) : (
        <Background2>
          <Loading />
        </Background2>
      )}
    </div>
  );
};

export default ArticleRead;
