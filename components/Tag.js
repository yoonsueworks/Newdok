export default function Tag({ tag }) {
  console.log(tag);
  return (
    <div className="p-2 bg-beige-10 text-warmgray-100 w-fit caption rounded-lg">
      {tag}
    </div>
  );
}
