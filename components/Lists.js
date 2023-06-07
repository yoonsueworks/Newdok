<<<<<<< HEAD
import { useContext } from "react";
=======

>>>>>>> 3165242df132952738126f6da7173187733442a1
import ListedItem from "./ListedItem";
import { GlobalContext } from "../pages/_app";

<<<<<<< HEAD
export default function Lists() {
  const value = useContext(GlobalContext);
  return (
    <ul className="px-5 grid gap-y-2.5 mb-9">
      {value.union?.length > 0 &&
        value.union?.map((datas) => (
          <ListedItem key={datas.id} datas={datas} />
        ))}
=======
export default function Lists({ datas }) {
  
  return (
    <ul className="px-5 grid gap-y-2.5 mb-9">
      {datas?.map((data) => {
        return <ListedItem key={data.id} datas={data} />;
      })}
>>>>>>> 3165242df132952738126f6da7173187733442a1
    </ul>
  );
}
