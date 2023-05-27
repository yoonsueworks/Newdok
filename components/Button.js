export default function Button(props) {
  const { func, mode, state, size, text, onboarding } = props;

  const sizeCSS =
    size === "big"
      ? "py-4 headline rounded-2xl"
      : size === "med"
      ? "h-[56px] headline_s rounded-xl"
      : "py-3.25 title rounded-lg";

  const modeCSS =
    mode === "ghost"
      ? "bg-white ring-1 ring-purple-30 inset-0 text-purple-30 cursor-pointer"
      : "bg-purple-30 group-hover:bg-purple-20 text-white cursor-pointer";

  const stateCSS =
    state === true
      ? ""
      : "bg-warmgray-60 cursor-not-allowed group-hover:bg-warmgray-60";

  return (
    <div
      className="w-full group"
      onClick={state ? () => func() : () => alert(`${onboarding} 선택해주세요`)}
    >
      <div
        className={`${sizeCSS} ${modeCSS} ${stateCSS}  w-full flex items-center justify-center`}
      >
        {text}
      </div>
    </div>
  );
}
