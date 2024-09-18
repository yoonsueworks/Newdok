import { useState } from "react";
import Image from "next/image";
import {
  useUserPausedSubscriptionList,
  useResumeSubscription,
} from "service/hooks/newsletters";

import ListItem from "components/pages/manageSubscription/ListItem";
import Loading from "shared/Loading";

const StoppedSubscription = () => {
  const [currentBrand, setCurrentBrand] = useState(undefined);
  const { data, isLoading } = useUserPausedSubscriptionList();
  const { mutate: mutationFn } = useResumeSubscription();

  const subscribeContinue = () => {
    //   TODO: 구독 재개 기능 구현, 1.모달 2.요청
    console.log("추후 재개요청 삽입 예정");
  };

  return (
    <div className="w-full h-fit bg-neutralgray-50 pb-9">
      {isLoading ? (
        <Loading />
      ) : data?.length > 0 ? (
        <div className="px-5 w-full h-fit">
          <div className="w-fit grid gap-y-1 mb-4 ">
            <div className="title-s text-neutralgray-800">
              {data?.length}개의 뉴스레터를 구독 중지했어요.
            </div>
            <div className="body-s text-neutralgray-700 break-keep">
              구독을 재개하면 다시 아티클을 받아볼 수 있어요.
            </div>
          </div>
          <ListItem
            mode="continue"
            subscriptionList={data}
            menuClicked={1}
            onClick={subscribeContinue}
          />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col justify-between items-center px-5 pb-28 pt-[60px]">
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src="/images/empty_subscribe_280.png"
              alt="추천 뉴스레터 일러스트"
              width="390"
              height="280"
            />
            <div className="flex flex-col text-center gap-x-1">
              <span className="title-s">구독 중인 뉴스레터가 없어요</span>
              <span className="body-s">
                구독신청 후 첫 아티클을 수신받으면 내 구독에 추가돼요
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoppedSubscription;
