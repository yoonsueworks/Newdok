import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

import Image from "next/image";
import Tags from "./Tags";

export default function ListedItem({ datas }) {
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
<<<<<<< HEAD:components/shared/ListedItem.js
<<<<<<< HEAD:components/shared/ListedItem.js
          <h4 className="header_3 mb-1">{name}</h4>
          <div className="caption_2_1 break-keep w-full">
=======
          <h4 className="title mb-1">{name}</h4>
          <div className="label break-keep w-full">
>>>>>>> 8298727 (♻️ Refactor: Global Colors Update):components/ListedItem.js
=======
          <h4 className="header_3 mb-1">{name}</h4>
          <div className="caption_2_1 break-keep w-full">
>>>>>>> 663a880 ( 💄 Style: global text Styling):components/ListedItem.js
            <span className="block">{second_description}</span>
          </div>
          <Tags tags={interests} />
        </div>
      </div>
    </li>
  );
}
