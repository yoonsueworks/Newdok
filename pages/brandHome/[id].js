import { useState } from "react";
import { useRouter } from "next/router";
import { useNewsletterBrand } from "service/hooks/newsletters";

import BrandArticles from "components/pages/brandHome/BrandArticles";
import BrandInfo from "components/pages/brandHome/BrandInfo";

import Background2 from "shared/Background2";
import Loading from "shared/Loading";
import Nav from "shared/Nav";

import CloseIcon from "icons/close_off.svg";
import MessageModal from "shared/MessageModal";

import { BottomSheet } from "react-spring-bottom-sheet";

const BrandHome = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useNewsletterBrand(pathBrandId);

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.push("/join");
  };

  return (
    <>
      {data ? (
        <>
          <div className="w-full h-full bg-purple-700 relative">
            <BrandInfo
              data={data}
              setOpen={setOpen}
              controlModal={setIsModalOpen}
            />
            <BrandArticles data={data.brandArticleList} />
            <Nav />
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
          <MessageModal
            isOpen={isModalOpen}
            controlModal={setIsModalOpen}
            title="회원가입 안내"
            info={[
              "구독 신청은 회원가입이 필요해요.",
              "회원가입 후 간편하게 뉴스레터를 받아 보세요!",
            ]}
            button={
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-500 active:bg-purple-800 text-white bg-purple-700 transition-colors duration-300"
                >
                  회원가입
                </button>
              </div>
            }
          />
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
