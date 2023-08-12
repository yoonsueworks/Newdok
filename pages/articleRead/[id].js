import { useArticleRead } from "service/hooks/newsletters";
import { useRouter } from "next/router";
import { useDateEdit } from "../../public/hooks/useDateEdit";

import Background2 from "shared/Background2";
import Loading from "shared/Loading";

const ArticleRead = () => {
  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];

  const { data } = useArticleRead(pathBrandId);
  const formattedDate = useDateEdit(data?.date);
  //TODO: AppBar, Nav

  return (
    <div className="w-full h-full relative">
      {data ? (
        <>
          <div className="w-full h-fit absolute bg-purple-700 z-10 p-4 flex flex-col gap-y-2">
            <h6 className="multiple-18-b text-white">{data.articleTitle}</h6>
            <div className="single-12-m text-beige-100">{formattedDate}</div>
          </div>
          <div className="w-full h-full overflow-scroll pt-[79px]">
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
