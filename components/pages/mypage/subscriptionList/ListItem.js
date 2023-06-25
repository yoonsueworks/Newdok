import Clock from "icons/time_off.svg";

const ListItem = () => {
  const cardCSS =
    "w-full h-fit contentbox-border p-5 flex items-center gap-x-4";

  return (
    <ul className="grid gap-y-2.5">
      <li className={cardCSS}>
        <div className="w-12 h-12 rounded-full bg-black contentbox-border"></div>
        <div className="grid gap-y-2">
          <div className="single-18-sb text-neutralgray-900">
            Alone & around
          </div>
          <div className="flex single-12-m text-neutralgray-900 items-center gap-x-1">
            <Clock width="16" height="16" />
            평일 아침
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ListItem;
