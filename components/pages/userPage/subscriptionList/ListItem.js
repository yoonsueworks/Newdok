import Image from "next/image";
import Clock from "icons/time_off.svg";

const ListItem = ({ subscriptionList }) => {
  const cardCSS =
    "w-full h-fit contentbox-border p-5 flex items-center gap-x-4";

  return (
    <ul className="grid gap-y-2.5">
      {subscriptionList.map(({ id, brandName, imageUrl, publicationCycle }) => {
        return (
          <li key={id} className={cardCSS}>
            {/* <div className="w-12 h-12 rounded-full bg-black contentbox-border"></div> */}
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
              <div className="single-18-sb text-neutralgray-900">
                {brandName}
              </div>
              <div className="flex single-12-m text-neutralgray-900 items-center gap-x-1">
                <Clock width="16" height="16" />
                {publicationCycle}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
