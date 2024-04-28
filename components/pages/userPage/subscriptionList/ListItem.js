import { useContext } from "react";
import Image from "next/image";
import Clock from "icons/ver1.0/time_off.svg";
import BrandName from "shared/BrandName";
import PublicationCycle from "shared/PublicationCycle";
import { SubscribeListContext } from "context/SubscribeListContext";

const ListItem = ({ subscriptionList, menuClicked, onClick }) => {
  const { setCurrentBrand } = useContext(SubscribeListContext);
  const cardCSS =
    "w-full h-fit contentbox-border p-5 flex items-center justify-between";

  const clickButton = (brandName) => {
    setCurrentBrand(brandName);
    onClick();
  };

  return (
    <ul className="grid gap-y-2.5">
      {subscriptionList.map(({ id, brandName, imageUrl, publicationCycle }) => {
        return (
          <li key={id} className={cardCSS}>
            <div className="flex items-center gap-x-4">
              <div className="w-[48px] h-[48px] rounded-full flex-shrink-0 contentbox-border relative border border-neutralgray-200 flex justify-center items-center">
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
                    borderRadius: 50,
                  }}
                />
              </div>
              <div className="grid gap-y-2">
                <BrandName brandName={brandName} />
                <PublicationCycle publicationCycle={publicationCycle} />
              </div>
            </div>
            <button
              className="text-purple-400"
              onClick={() => clickButton(brandName)}
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
