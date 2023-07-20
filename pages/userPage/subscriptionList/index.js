import Background from "shared/Background";
import ListItem from "components/pages/userPage/subscriptionList/ListItem";

const Subscription = () => {
  return (
    <Background>
      <div className="grid gap-y-1 mb-7">
        <div className="multiple-24-b text-neutralgray-900">
          8개의 뉴스레터를 구독 중이에요.
        </div>
        <div className="multiple-16-m text-neutralgray-900">
          구독 신청 후 첫 아티클을 수신받으면 구독 리스트에 추가돼요.
        </div>
      </div>
      <ListItem />
    </Background>
  );
};

export default Subscription;
