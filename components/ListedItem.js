import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

import Image from "next/image";
import Tags from "./Tags";

export default function ListedItem({ datas }) {
  const { setOpenModal } = useContext(GlobalContext);
  const {
    id,
    name,
    image_url,
    industries,
    interests,
    preview_url,
    second_description,
    first_description,
    publication_cycle,
    detail_description,
  } = datas;

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
          <h4 className="title mb-1">{name}</h4>
          <div className="label break-keep w-full">
            {/* <span className="block">{first_description}</span> */}
            <span className="block">{second_description}</span>
          </div>
          <Tags interests={interests} />
        </div>
      </div>
    </li>
  );
}
