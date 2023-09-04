function Tag({ tag, usage }) {
  const bgColorCSS = usage === "brand" ? "bg-beige-50" : "bg-beige-100 ";

  return (
    <div
      className={`p-2 text-purple-700 w-fit single-12-m rounded-lg ${bgColorCSS}`}
    >
      {tag}
    </div>
  );
}

export default function Tags({ tags, usage }) {
  return (
    <div className="flex gap-1 flex-wrap">
      {tags?.slice(0, 3).map((tag, i) => (
        <Tag tag={tag["name"]} key={i} usage={usage} />
      ))}
    </div>
  );
}
