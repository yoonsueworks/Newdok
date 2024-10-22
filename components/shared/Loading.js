import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/images/loading_animation_0916.gif"
        alt="추천 뉴스레터 일러스트"
        width="80"
        height="80"
        priority
      />
    </div>
  );
};

export default Loading;
