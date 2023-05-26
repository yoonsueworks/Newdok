import { useContext } from "react";
import ListedItem from "./ListedItem";
import { GlobalContext } from "../pages/_app";

export default function Lists() {
  const value = useContext(GlobalContext);
  return (
    <ul className="px-5 grid gap-y-2.5 mb-9">
      {value.union?.length > 0 &&
        value.union?.map((datas) => (
          <ListedItem key={datas.id} datas={datas} />
        ))}
    </ul>
  );
}
