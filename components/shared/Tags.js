function Tag({ tag }) {
  return (
    <div className="p-2 bg-beige-100 text-warmgray-100 w-fit caption_2 rounded-lg">
      {tag}
    </div>
  );
}

export default function Tags({ tags }) {
  return (
    <div className="flex gap-x-1 mt-3.5">
      {tags?.slice(0, 3).map((tag, i) => (
        <Tag tag={tag["name"]} key={i} />
      ))}
    </div>
  );
}
