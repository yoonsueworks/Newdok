import { useBrandRead } from "service/hooks/newsletters";
import { useRouter } from "next/router";

import ArticleTitle from "components/pages/articleRead/ArticleTitle";
import BrandInfoBar from "components/pages/articleRead/BrandInfoBar";
import Background2 from "shared/Background2";
import Loading from "shared/Loading";

const ArticleRead = () => {
  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useBrandRead(pathBrandId);

  return (
    <div className="w-full h-full relative">
      {data ? (
        <>
          <BrandInfoBar articleInfo={data} />
          <div className="w-full h-full overflow-scroll relative">
            <ArticleTitle data={data} />
            {data && (
              <div dangerouslySetInnerHTML={{ __html: data.articleHTML }}></div>
            )}
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
