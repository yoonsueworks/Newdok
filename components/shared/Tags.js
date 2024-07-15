function Tag({ tag, usage }) {
  const bgColorCSS = usage === "brand" ? "bg-beige-50" : "bg-blue-50 ";

  return (
    <div
      className={`px-2.5 py-1 text-blue-600 w-fit label-s rounded-full border border-blue-600 ${bgColorCSS}`}
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
