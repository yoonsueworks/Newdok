import Image from "next/image";

const GNB = () => {
  return (

      <Image
        src="/images/Newdok_Logo-Horizontal_300.png"
        alt="newdok"
        width="106"
        height="56"
        className="xl:mt-2 xl:block cursor-pointer"
        onClick={() => router.push("/")}
      />
    
  );
};

export default GNB;
