import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUserSubscriptionList } from "service/hooks/user";
import { SubscribeListContext } from "context/SubscribeListContext";

import ListItem from "components/pages/manageSubscription/ListItem";
import MessageModal from "shared/MessageModal";
import Loading from "shared/Loading";

const WhileSubscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentBrand, setCurrentBrand } = useContext(SubscribeListContext);

  const { data, isLoading } = useUserSubscriptionList();
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="w-full h-fit bg-beige-100 pb-9">
      {isLoading ? (
        <Loading />
      ) : data?.length > 0 ? (
        <div className="px-5 mt-8 w-full h-fit">
          <div className="w-fit grid gap-y-1 mb-7 ">
            <div className="multiple-24-b text-neutralgray-900">
              {data?.length}개의 뉴스레터를 구독 중이에요.
            </div>
            <div className="multiple-16-m text-neutralgray-900 break-keep">
              구독 신청 후 첫 아티클을 수신받으면 구독 리스트에 추가돼요.
            </div>
          </div>
          <ListItem
            subscriptionList={data}
            menuClicked={0}
            onClick={openModal}
          />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col justify-between items-center px-5 pb-28 pt-44">
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src="/images/empty_subscribe_300.png"
              alt="추천 뉴스레터 일러스트"
              width="390"
              height="200"
            />
            <span className="multiple-24-b">구독 중인 뉴스레터가 없어요</span>
          </div>
          <button
            onClick={() => router.push("/browseAll")}
            className="w-full h-fit p-4 rounded-xl text-white single-20-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 transition-colors duration-300 "
          >
            뉴스레터 둘러보기
          </button>
        </div>
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentBrand={currentBrand}
      />
    </div>
  );
};

export default WhileSubscription;

const Modal = ({ isModalOpen, setIsModalOpen, currentBrand }) => {
  return (
    <MessageModal
      isOpen={isModalOpen}
      controlModal={setIsModalOpen}
      title={`${currentBrand} 구독 중지`}
      info={[
        "구독을 중지하면 더이상",
        "새로운 아티클이 수신되지 않아요.",
        <div
          key={3}
          className="bg-neutralgray-50 rounded-lg w-full h-fit multiple-16-m text-neutralgray-900 p-4 mt-4"
        >
          구독 재개로 언제든 아티클을 다시 받아볼 수 있어요.
        </div>,
      ]}
      button={
        <div className="flex gap-x-2 mt-5" key={1}>
          <button
            type="submit"
            className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            onClick={() => setIsModalOpen(false)}
          >
            취소
          </button>
          <button
            type="submit"
            className="w-full p-4 rounded-xl text-white bg-purple-700 single-20-b transition-colors duration-300 hover:bg-purple-500 active:bg-purple-800"
            onClick={() => console.log("추후 구독중지 요청 연결 예정")}
          >
            구독 중지
          </button>
        </div>
      }
    />
  );
};
