import Image from "next/image";
import { useRouter } from "next/router";
import { useUserSubscriptionList } from "service/hooks/user";

import ListItem from "components/pages/userPage/subscriptionList/ListItem";
import AppBar from "shared/AppBar";
import Background2 from "shared/Background2";
import Loading from "shared/Loading";

const Subscription = () => {
  const { data, isLoading } = useUserSubscriptionList();
  const router = useRouter();

  return (
    <Background2>
      <AppBar
        iconl={true}
        shadow={true}
        textl="구독 리스트 보기"
        iconr={false}
        func={() => router.push("/userPage")}
      />
      {isLoading ? (
        <Loading />
      ) : data?.length > 0 ? (
        <div className="px-5 mt-14 w-full">
          <div className="w-fit grid gap-y-1 mb-7 ">
            <div className="multiple-24-b text-neutralgray-900">
              {data?.length}개의 뉴스레터를 구독 중이에요.
            </div>
            <div className="multiple-16-m text-neutralgray-900 break-keep">
              구독 신청 후 첫 아티클을 수신받으면 구독 리스트에 추가돼요.
            </div>
          </div>
          <ListItem subscriptionList={data} />
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
    </Background2>
  );
};

export default Subscription;
