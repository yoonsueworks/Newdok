import Image from "next/image";

const GNB = () => {
  return (
    <Image
      src="/images/GNB.png"
      width="430"
      height="100"
      alt="스플래시 이미지"
      priority={false}
    />
  );
};

export default GNB;
