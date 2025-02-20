import GuideTextB2S1 from "shared/GuideTextB2S1";
import { useRecoilValue } from "recoil";
import { userDatasAtom } from "service/atoms/atoms";
import { useUserSubscriptionList } from "service/hooks/user";


const UserHistory = () => {
  const { nickname } = useRecoilValue(userDatasAtom);
  const { data, isLoading, isError } = useUserSubscriptionList();
  return (
    <>
      <GuideTextB2S1
        bigText1={`${nickname}님,`}
        bigText2="정말 떠나시나요? 😢"
        smallText1="회원탈퇴하면 활동 내역이 전부 사라져요."
      />

      <div className="grid gap-y-2.5">
        {!isLoading && !isError && (
          <>
            <div className="w-full h-fit p-5 flex justify-between single-18-b contentbox-border">
              <span className="text-neutralgray-900">구독 중인 뉴스레터</span>
              <div className="text-purple-700">{data.length}개</div>
            </div>
            <div className="w-full h-fit p-5 flex justify-between single-18-b contentbox-border">
              <span className="text-neutralgray-900">
                지금까지 수신받은 아티클
              </span>
              {/* TODO: 수신받은 총 아티클 수 */}
              <div className="text-purple-700">242개</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserHistory;
