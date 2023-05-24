import Lists from "../../../components/Lists";

export default function Industry() {
  return (
    <div className="h-full bg-beige-10 grid gap-y-5">
      <ul className="pl-5 h-[44px] flex gap-x-2">
        <li className="flex inline-block h-full w-fit items-center text-center self-center px-4 bg-purple-30 rounded-[10px] title text-white">
          모든 산업
        </li>
        <li className="flex inline-block h-full w-fit items-center text-center self-center px-4 bg-white rounded-[10px] title text-purple-30 border border-1 border-solid border-purple-30">
          F&B
        </li>
      </ul>
      <Lists />
    </div>
  );
}
