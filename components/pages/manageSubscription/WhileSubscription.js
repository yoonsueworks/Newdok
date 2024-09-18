import { useContext, useState } from "react";
import Image from "next/image";
import {
  useUserSubscriptionList,
  usePauseSubscription,
} from "service/hooks/newsletters";
import { SubscribeListContext } from "context/SubscribeListContext";

import ListItem from "components/pages/manageSubscription/ListItem";
import MessageModal from "shared/MessageModal";
import Loading from "shared/Loading";

const WhileSubscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentBrand, setCurrentBrand } = useContext(SubscribeListContext);

  const { data, isLoading } = useUserSubscriptionList();
  const { mutate: mutationFn } = usePauseSubscription();

  const openModal = () => setIsModalOpen(true);
  console.log(mutationFn);

  return (
    <div className="w-full h-fit bg-neutralgray-50 pb-9">
      {isLoading ? (
        <Loading />
      ) : data?.length > 0 ? (
        <div className="px-5 w-full h-fit">
          <div className="w-fit grid gap-y-1 mb-4 ">
            <div className="title-s text-neutralgray-800">
              {data?.length}개의 뉴스레터를 구독 중이에요.
            </div>
            <div className="body-s text-neutralgray-700 break-keep">
              구독 신청 후 첫 아티클을 수신받으면 구독 리스트에 추가돼요.
            </div>
          </div>
          <ListItem
            mode="stop"
            subscriptionList={data}
            menuClicked={0}
            onClick={openModal}
          />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col justify-between items-center px-5 pb-28 pt-44">
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src="/images/empty_subscribe_280.png"
              alt="추천 뉴스레터 일러스트"
              width="390"
              height="280"
            />
            <span className="title-s">구독을 중지한 뉴스레터가 없어요</span>
            <span className="body-s">
              구독 중지 후에도 언제든 아티클을 다시 받아볼 수 있어요
            </span>
          </div>
        </div>
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentBrand={currentBrand}
        mutationFn={mutationFn}
      />
    </div>
  );
};

export default WhileSubscription;

const Modal = ({ isModalOpen, setIsModalOpen, currentBrand, mutationFn }) => {
  return (
    <MessageModal
      isOpen={isModalOpen}
      controlModal={setIsModalOpen}
      title={`${currentBrand.brandName} 구독 중지`}
      titleSize="m"
      info={[
        "구독을 중지하면 더이상",
        "새로운 아티클이 수신되지 않아요.",
        <div
          key={3}
          className="bg-neutralgray-50 rounded-lg w-full h-fit body-s text-blue-600 py-[9px] px-4 mt-2"
        >
          구독 재개로 언제든 아티클을 다시 받아볼 수 있어요.
        </div>,
      ]}
      button={
        <div className="flex gap-x-2 mt-5" key={1}>
          <button
            type="submit"
            className="w-full p-4 rounded-xl contentbox-border text-neutralgray-700 bg-white button-02 transition-colors duration-300 hover:bg-blue-50 active:bg-blue-5ß0"
            onClick={() => setIsModalOpen(false)}
          >
            취소
          </button>
          <button
            type="submit"
            className="w-full p-4 rounded-xl text-white bg-blue-600 button-02 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-700"
            onClick={() => {
              mutationFn({ id: currentBrand.id });
              // TODO: 요청 500에러 해결 및 body값 확인하기
            }}
          >
            구독 중지
          </button>
        </div>
      }
    />
  );
};
