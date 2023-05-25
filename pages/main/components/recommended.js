import Lists from "../../../components/Lists";
import ListTitle from "./Recommended/ListTitle";
import CardTitle from "./Recommended/Cardtitle";
import Cards from "./Recommended/Cards";

export default function Recommended() {
  return (
    <div className="bg-beige-10 grid gap-y-14 scroll-smooth">
      <div className=" grid gap-y-4">
        <CardTitle />
        <Cards />
      </div>
      <div className="grid gap-y-6">
        <ListTitle />
        {/* <div className="flex justify-between items-center px-5">
          <h1 className="headline">이런 뉴스레터는 어때요?</h1>
          <button className="flex gap-x-1">
            <span className="reload text-purple-30">새로고침 </span>
            <div className="w-5 h-5">
              <div
                className="object-cover bg-cover bg-center w-5 h-5"
                style={{
                  backgroundImage: `url("/images/icons/Icons_reload.png")`,
                }}
              ></div>
            </div>
          </button>
        </div> */}
        <Lists />
      </div>
    </div>
  );
}
