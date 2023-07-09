import { useContext } from "react";
import { GlobalContext } from "pages/_app";

import Image from "next/image";
import Tags from "./Tags";

function ListedItem({ datas }) {
  const { setOpenModal } = useContext(GlobalContext);
  const { name, image_url, interests, second_description } = datas;

  return (
    <li
      onClick={() => setOpenModal(datas)}
      className="bg-white p-6 h-max w-full border border-solid border-1 border-warmgray-20 rounded-2xl  cursor-pointer "
    >
      <div className="flex gap-x-4">
        <div className="w-58 h-58 rounded-full flex-shrink-0 border border-solid border-1 border-warmgray-20 relative">
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
        <div>
          <h4 className="header_3 mb-1">{name}</h4>
          <div className="caption_2_1 break-keep w-full">
            <span className="block">{second_description}</span>
          </div>
          <Tags tags={interests} />
        </div>
      </div>
    </li>
  );
}

export default function Lists({ datas }) {
  console.log(datas);
  return (
    <ul className="px-5 grid gap-y-2.5 mb-9">
      {datas.length > 1 &&
        datas?.map((data) => {
          return <ListedItem key={data.id} datas={data} />;
        })}
      {/* TODO: statusCode 500 : 서버 꺼져있을 때 오류 발생, 오류 처리 화면 */}
    </ul>
  );
}
