import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image
        src="/images/loading_beige.gif"
        alt="추천 뉴스레터 일러스트"
        width="298"
        height="252"
        priority
      />
    </div>
  );
};

export default Loading;
