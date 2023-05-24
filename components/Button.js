export default function Button(props) {
  const { func, mode, state, size } = props;

  const sizeCSS =
    size === "big" ? "py-4 headline rounded-2xl" : "py-3.25 title rounded-lg";

  const modeCSS =
    mode === "ghost"
      ? "bg-white border border-purple-30 text-purple-30 cursor-pointer"
      : "bg-purple-30 group-hover:bg-purple-20 text-white cursor-pointer";

  const stateCSS =
    state === true
      ? ""
      : "bg-warmgray-60 cursor-not-allowed group-hover:bg-warmgray-60";

  return (
    <div
      className="w-full group"
      onClick={state ? () => func() : () => alert("dd")}
    >
      <div
        className={`${sizeCSS} ${modeCSS} ${stateCSS}  w-full flex items-center justify-center`}
      >
        시작하기
      </div>
    </div>
  );
}
