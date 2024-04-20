import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUserSubscriptionList } from "service/hooks/user";

import ListItem from "components/pages/ManageSubscription/ListItem";
import Loading from "shared/Loading";

const StoppedSubscription = () => {
  const { data, isLoading } = useUserSubscriptionList();
  const [currentBrand, setCurrentBrand] = useState(undefined);
  const router = useRouter();

  //   TODO: 추후 중지된 구독 리스트로 변경 예정

  const subscribeContinue = () => {
    console.log("추후 재개요청 삽입 예정");
  };

  return (
    <div className="w-full h-fit bg-beige-100 pb-9">
      {isLoading ? (
        <Loading />
      ) : data?.length > 0 ? (
        <div className="px-5 mt-8 w-full h-fit">
          <div className="w-fit grid gap-y-1 mb-7 ">
            <div className="multiple-24-b text-neutralgray-900">
              {data?.length}개의 뉴스레터를 구독 중지했어요.
            </div>
            <div className="multiple-16-m text-neutralgray-900 break-keep">
              구독을 재개하면 다시 아티클을 받아볼 수 있어요.
            </div>
          </div>
          <ListItem
            subscriptionList={data}
            menuClicked={1}
            onClick={subscribeContinue}
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
    </div>
  );
};

export default StoppedSubscription;
