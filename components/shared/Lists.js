import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import Image from "next/image";
import Tags from "./Tags";

function ListedItem({ datas }) {
  const { setOpenModal } = useContext(GlobalContext);
  const { name, image_url, interests, second_description } = datas;

  return (
    <li className="bg-white p-5 h-max w-full contentbox-border rounded-lg cursor-pointer">
      <div className="flex gap-x-4">
        <div className="w-58 h-58 rounded-full flex-shrink-0 contentbox-border relative">
          <Image
            alt=";t"
            src={image_url}
            fill
            sizes="100"
            style={{
              objectFit: "cover",
              borderRadius: 50,
            }}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="grid gap-y-3">
            <h4 className="single-18-sb mb-1">{name}</h4>
            <div className="single-14-m break-keep w-full">
              {second_description}
            </div>
          </div>
          <Tags tags={interests} />
        </div>
      </div>
    </li>
  );
}

export default function Lists({ datas }) {
  return (
    <>
      <ul className="grid gap-y-2.5">
        {datas.length > 1 &&
          datas?.map((data) => {
            return <ListedItem key={data.id} datas={data} />;
          })}
      </ul>
    </>
  );
}
