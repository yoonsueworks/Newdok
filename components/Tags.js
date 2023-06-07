import Tag from "./Tag";

<<<<<<< HEAD
export default function Tags({ tags }) {
  return (
    <div className="flex gap-x-1 mt-3.5">
      {tags.slice(0, 3).map((tag, i) => (
=======
export default function Tags({ interests }) {
  return (
    <div className="flex gap-x-1 mt-3.5">
      {interests?.slice(0, 3).map((tag, i) => (
>>>>>>> 3165242df132952738126f6da7173187733442a1
        <Tag tag={tag["name"]} key={i} />
      ))}
    </div>
  );
}
