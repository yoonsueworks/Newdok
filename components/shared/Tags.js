function Tag({ tag }) {
  return (
    <div className="p-2 bg-beige-50 text-purple-700 w-fit single-12-m rounded-lg">
      {tag}
    </div>
  );
}

export default function Tags({ tags }) {
  return (
    <div className="flex gap-x-1">
      {tags?.slice(0, 3).map((tag, i) => (
        <Tag tag={tag["name"]} key={i} />
      ))}
    </div>
  );
}
