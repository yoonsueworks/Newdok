import { useRouter } from "next/router";
import Image from "next/image";
import Tags from "shared/Tags";
import S from "./Card.module.scss";

export default function Card({ datas }) {
  const router = useRouter();

  if (!datas) return;

  const { id, brandName, firstDescription, shortDescription, imageUrl, interests } = datas;

  return (
    <div
      onClick={() => router.push(`/brandHome/${id}`)}
      id={S.card}
      className="h-[270px] w-[292px] inline-block bg-white flex flex-col contentbox-border cursor-pointer"
    >
      <div id={S.gradient} className="w-full h-[150px] ">
        <Image
          id={S.size}
          width="578"
          height="310"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          responsive="true"
          alt={brandName}
          src={imageUrl}
        />
      </div>
      <div className="h-full py-4 px-5 flex flex-col justify-between">
        <div className="grid gap-y-2">
          <div className="button-01 text-neutralgray-900">{brandName}</div>
          <p className="body-s text-neutralgray-700">{firstDescription || shortDescription}</p>
        </div>
        <Tags tags={interests} />
      </div>
    </div>
  );
}
