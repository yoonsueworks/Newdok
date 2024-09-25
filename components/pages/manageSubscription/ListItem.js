import { useContext } from "react";
import Image from "next/image";

import BrandName from "shared/BrandName";
import PublicationCycle from "shared/PublicationCycle";
import { SubscribeListContext } from "context/SubscribeListContext";

const ListItem = ({
  subscriptionList,
  menuClicked,
  onClick,
  mode,
  refetch,
}) => {
  const { setCurrentBrand } = useContext(SubscribeListContext);
  const cardCSS =
    "w-full h-fit contentbox-border px-5 py-4 flex items-center justify-between";

  const clickPauseSubscriptionButton = (params) => {
    setCurrentBrand(params);
    onClick();
  };

  return (
    <ul className="grid gap-y-2">
      {subscriptionList.map(({ id, brandName, imageUrl, publicationCycle }) => {
        return (
          <li key={id} className={cardCSS}>
            <div className="flex items-center gap-x-3">
              <div className="w-12 h-12 rounded-xl flex-shrink-0 relative border border-warmgray-30">
                <Image
                  alt={brandName}
                  src={imageUrl}
                  fill
                  sizes="48"
                  quality={45}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcNGFlPQAGEwJcG4PRAwAAAABJRU5ErkJggg=="
                  style={{
                    objectFit: "cover",
                    borderRadius: 11,
                  }}
                />
              </div>
              <div className="grid gap-y-2">
                <BrandName brandName={brandName} />
                <PublicationCycle publicationCycle={publicationCycle} />
              </div>
            </div>
            <button
              className={`rounded-lg px-4 py-2 border border-blue-600 button-03 ${
                mode === "continue"
                  ? "text-white bg-blue-400"
                  : "text-blue-600  bg-blue-50"
              }`}
              onClick={() =>
                clickPauseSubscriptionButton({ brandName: brandName, id: id })
              }
            >
              {menuClicked === 0 ? "구독 중지" : "구독 재개"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
