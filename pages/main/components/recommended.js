import { useContext } from "react";
import { GlobalContext } from "../../_app";

import Lists from "../../../components/Lists";
import ListTitle from "./Recommended/ListTitle";
import CardTitle from "./Recommended/CardTitle";
import Cards from "./Recommended/Cards";

export default function Recommended() {
  const { union } = useContext(GlobalContext);

  return (
    <div className="bg-beige-10 grid gap-y-14 scroll-smooth">
      <div className=" grid gap-y-4">
        <CardTitle />
        <Cards />
      </div>
      <div className="grid gap-y-6">
        <ListTitle />
        <Lists datas={union} />
      </div>
    </div>
  );
}
