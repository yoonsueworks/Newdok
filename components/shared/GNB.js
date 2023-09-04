import Image from "next/image";

const GNB = () => {
  return (
    <Image
      src="/images/GNB.png"
      width="430"
      height="100"
      alt="Newdok 로고 이미지"
      priority
    />
  );
};

export default GNB;
