function Tag({ tag, usage }) {
  const bgColorCSS =
    usage === "brand"
      ? "bg-[#1e1e1e]/40 border-neutralgray-300 text-white"
      : "bg-blue-50 border-blue-600 text-blue-600";

  return (
    <div
      className={`px-2.5 py-1 w-fit label-s rounded-full border ${bgColorCSS}`}
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
