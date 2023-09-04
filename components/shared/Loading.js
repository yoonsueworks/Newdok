import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/images/loading_transparent.gif"
        alt="추천 뉴스레터 일러스트"
        width="500"
        height="500"
        priority
      />
    </div>
  );
};

export default Loading;
