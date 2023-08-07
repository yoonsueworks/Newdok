import Nickname from "shared/Nickname";

export default function CardTitle() {
  return (
    <h1 className="multiple-20-b pt-8 pb-4 w-max pl-5">
      <Nickname />
      님을 위한 <br />
      맞춤형 뉴스레터가 도착했어요!
    </h1>
  );
}
