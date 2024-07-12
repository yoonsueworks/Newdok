import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useNewsletterBrand } from "service/hooks/newsletters";

import BrandArticles from "components/pages/brandHome/BrandArticles";
import BrandInfo from "components/pages/brandHome/BrandInfo";

import MessageModal from "shared/MessageModal";
import Background2 from "shared/Background2";
import ToastPopUp from "shared/ToastPopUp";
import Loading from "shared/Loading";
import Nav from "shared/Nav";

import CloseIcon from "icons/ver1.0/close_off.svg";

import { BottomSheet } from "react-spring-bottom-sheet";
import LocalStorage from "public/utils/LocalStorage";

const BrandHome = () => {
  const [userDatas] = useRecoilState(userDatasAtom);

  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useNewsletterBrand(pathBrandId);

  const isLoggedIn = LocalStorage.getItem("NDtoken");

  const notAuthInfoMessage = [
    "구독 신청은 회원가입이 필요해요.",
    "회원가입 후 간편하게 뉴스레터를 받아 보세요!",
  ];
  const authInfoMessage = [
    "구독 신청을 완료하기 위해 구독 확인 메일의 확인 버튼을 눌러주세요.",
    <div
      key={3}
      className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4"
    >
      구독 확인 메일은 홈에서 확인할 수 있어요.
    </div>,
  ];

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (isLoggedIn) {
      router.push("/home");
      return;
    }
    if (isLoggedIn) {
      router.push("/join");
      return;
    }
  };

  const handleSubscribeClick = () => {
    window.navigator.clipboard.writeText(userDatas.subscribeEmail);
    setOpen(true);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 1500);
  };

  return (
    <>
      {data ? (
        <>
          <div className="w-full h-full bg-purple-700 flex flex-col justify-between relative overflow-scroll">
            <BrandInfo
              data={data}
              setOpen={handleSubscribeClick}
              controlModal={setIsModalOpen}
            />
            <BrandArticles data={data.brandArticleList} />
          </div>
          <BottomSheet
            open={open}
            onDismiss={() => setOpen(false)}
            snapPoints={({ maxHeight }) => [0.9 * maxHeight]}
          >
            <div>
              <div className="relative">
                <div className="flex justify-between p-2.5 items-center elevation-1-bottom z-1 ">
                  <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0">
                    <CloseIcon
                      width="24"
                      height="24"
                      stroke="white"
                      fill="white"
                    />
                  </div>
                  <div className="single-20-b">{data.brandName} 구독하기</div>
                  <button
                    className="w-7.5 h-7.5 flex justify-center items-center p-1.5"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon width="24" height="24" />
                  </button>
                </div>
                <div className="absolute w-full">
                  <ToastPopUp
                    toastMessage="mailCopied"
                    isVisible={isToastVisible}
                  />
                </div>
              </div>
              <iframe
                src={data.subscribeUrl}
                width="100%"
                height="800px"
              ></iframe>
            </div>
          </BottomSheet>
          <MessageModal
            isOpen={isModalOpen}
            controlModal={setIsModalOpen}
            title={isLoggedIn ? "구독 확인하기" : "회원가입 안내"}
            titleSize="m"
            info={isLoggedIn ? authInfoMessage : notAuthInfoMessage}
            button={
              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-purple-500 active:bg-purple-800 text-white bg-purple-700 transition-colors duration-300"
                >
                  {isLoggedIn ? "메일 확인하기" : "회원가입"}
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
