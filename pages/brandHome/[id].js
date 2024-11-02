import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import {
  useNewsletterBrand,
  useResumeSubscription,
  usePauseSubscription,
} from "service/hooks/newsletters";

import BrandArticles from "components/pages/brandHome/BrandArticles";
import BrandInfo from "components/pages/brandHome/BrandInfo";

import MessageModal from "shared/MessageModal";
import SearchButton from "shared/SearchButton";
import Background2 from "shared/Background2";
import Loading from "shared/Loading";

import LocalStorage from "public/utils/LocalStorage";

const BrandHome = () => {
  const [userDatas] = useRecoilState(userDatasAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const pathBrandId = router.asPath.split("/")[2];
  const { data } = useNewsletterBrand(pathBrandId);

  const { mutate: pauseSubscription } = usePauseSubscription(
    JSON.stringify({ newsletterId: data?.brandId })
  );
  const { mutate: resumeSubscription } = useResumeSubscription(
    JSON.stringify({ newsletterId: data?.brandId })
  );

  const [initial, check] = [
    data?.isSubscribed === "INITIAL",
    data?.isSubscribed === "CHECK",
  ];

  const isLoggedIn = LocalStorage.getItem("NDtoken");

  const notAuthInfoMessage = [
    "구독 신청은 회원가입이 필요해요.",
    "회원가입 후 간편하게 뉴스레터를 받아 보세요!",
  ];
  const authInfoMessage = [
    "구독 신청을 완료하기 위해 구독 확인 메일의 확인 버튼을 눌러주세요.",
    <div
      key={3}
      className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-700 p-4 mt-4"
    >
      구독 확인 메일은 홈에서 확인할 수 있어요.
    </div>,
  ];
  const pauseSubscriptionInfoMessage = [
    "구독을 중지하면 더 이상 새로운 아티클이 수신되지 않아요",
    <div
      key={3}
      className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-blue-600 p-4 mt-4"
    >
      구독 재개로 언제든 아티클을 다시 받아볼 수 있어요.
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
    window.open(data.subscribeUrl);
  };

  const handlePauseClick = () => {
    pauseSubscription();
    setIsModalOpen(false);
  };

  return (
    <>
      {data ? (
        <>
          <div className="w-full h-full flex flex-col justify-between relative overflow-scroll">
            <div className="flex w-full bg-white flex items-center px-5 py-4 justify-between">
              <div>
                뉴스레터 홈
                {/* TODO: 추후 검색 비회원 로그인 아이콘 추가 예정 */}
              </div>
              <SearchButton />
            </div>
            <BrandInfo
              data={data}
              resumeSubscription={resumeSubscription}
              setOpen={handleSubscribeClick}
              controlModal={setIsModalOpen}
            />
            <BrandArticles data={data.brandArticleList} />
          </div>
          {initial || check ? (
            <MessageModal
              isOpen={isModalOpen}
              controlModal={setIsModalOpen}
              title={isLoggedIn ? "구독 확인하기" : "회원가입 안내"}
              info={isLoggedIn ? authInfoMessage : notAuthInfoMessage}
              button={
                <div className="mt-5 flex">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-blue-500 active:bg-blue-800 text-white bg-blue-600 transition-colors duration-300"
                  >
                    {isLoggedIn ? "메일 확인하기" : "회원가입"}
                  </button>
                </div>
              }
            />
          ) : (
            <MessageModal
              isOpen={isModalOpen}
              controlModal={setIsModalOpen}
              title={`${data.brandName} 구독 중지`}
              info={pauseSubscriptionInfoMessage}
              button={
                <div className="mt-5 flex gap-x-2">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-neutralgray-50 active:bg-neutralgray-100 text-neutralgray-700 bg-white transition-colors duration-300 border border-neutralgray-200"
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    onClick={handlePauseClick}
                    className="w-full h-fit p-4 rounded-xl single-20-b hover:bg-blue-500 active:bg-blue-800 text-white bg-blue-600 transition-colors duration-300"
                  >
                    구독 중지
                  </button>
                </div>
              }
            />
          )}
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
