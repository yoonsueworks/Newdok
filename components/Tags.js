import Tag from "./Tag";

export default function Tags({ interests }) {
  return (
    <div className="flex gap-x-1 mt-3.5">
      {interests.map((interest) => {
        return <Tag interest={interest} key={interest.id} />;
      })}
    </div>
  );
}
