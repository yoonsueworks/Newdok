import { useState } from "react";
import { useRouter } from "next/router";
import { useNewsletterBrand } from "service/hooks/newsletters";

import BrandArticles from "components/pages/brandHome/BrandArticles";
import BrandInfo from "components/pages/brandHome/BrandInfo";

import Background2 from "shared/Background2";
import Loading from "shared/Loading";
import CloseIcon from "icons/close_off.svg";

import { BottomSheet } from "react-spring-bottom-sheet";

const BrandHome = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useNewsletterBrand(pathBrandId);

  return (
    <>
      {data ? (
        <>
          <div className="w-full h-full bg-purple-700">
            <BrandInfo data={data} setOpen={setOpen} />
            <BrandArticles data={data.brandArticleList} />
          </div>
          <BottomSheet
            open={open}
            onDismiss={() => setOpen(false)}
            snapPoints={({ maxHeight }) => [0.9 * maxHeight]}
          >
            <div className="flex justify-between p-2.5 items-center">
              <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0">
                <CloseIcon width="24" height="24" stroke="white" fill="white" />
              </div>
              <div className="single-20-b">{data.brandName} 구독하기</div>
              <button
                className="w-7.5 h-7.5 flex justify-center items-center p-1.5"
                onClick={() => setOpen(false)}
              >
                <CloseIcon width="24" height="24" />
              </button>
            </div>
            <iframe
              src={data.subscribeUrl}
              width="100%"
              height="800px"
            ></iframe>
          </BottomSheet>
        </>
      ) : (
        <Background2>
          <Loading />
        </Background2>
      )}
    </>
  );
};

export default BrandHome;
