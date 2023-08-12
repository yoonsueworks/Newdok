import { useRouter } from "next/router";
import Image from "next/image";
import Tags from "shared/Tags";
import S from "./Card.module.scss";

export default function Card({ datas }) {
  const router = useRouter();

  if (!datas) return;

  const { id, brandName, firstDescription, imageUrl, interests } = datas;

  return (
    <div
      onClick={() => router.push(`/brandHome/${id}`)}
      id={S.card}
      className="h-[307px] w-[320px] inline-block bg-white flex flex-col contentbox-border cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[150px]">
        <Image
          id={S.size}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          responsive="true"
          alt={brandName}
          src={imageUrl}
        />
      </div>
      <div className="h-fit p-5 grid gap-y-3">
        <div className="single-18-sb">{brandName}</div>
        <div className="multiple-14-m">{firstDescription}</div>
        <Tags tags={interests} />
      </div>
    </div>
  );
}
