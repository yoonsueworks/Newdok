import Tag from "./Tag";

export default function Tags({ interests }) {
  return (
    <div className="flex gap-x-1 mt-3.5">
      {interests?.slice(0, 3).map((tag, i) => (
        <Tag tag={tag["name"]} key={i} />
      ))}
    </div>
  );
}
