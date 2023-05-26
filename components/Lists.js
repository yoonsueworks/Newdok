import ListedItem from "./ListedItem";

export default function Lists({ datas }) {
  return (
    <ul className="px-5 grid gap-y-2.5 mb-9">
      {datas?.map((data) => {
        return <ListedItem key={data.id} datas={data} />;
      })}
      {/* <ListedItem />
      
      <ListedItem />
      <ListedItem />
      <ListedItem /> */}
    </ul>
  );
}
