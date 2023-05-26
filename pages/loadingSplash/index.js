import Image from "next/image";

export default function MyComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/images/Newdok_Logo-motion.gif"
        alt="My GIF"
        className="object-cover mb-20"
        width="300"
        height="400"
      />
      <div className="headline_s text-center">
        사용자님께 맞는 <br />
        뉴스레터를 찾고있어요...🔍
      </div>
    </div>
  );
}
