export default function Button(props) {
  const { func, mode, state, size, text, onboarding } = props;

  const sizeCSS =
    size === "big"
      ? "py-4 header_1 rounded-[14px]"
      : size === "med"
      ? "h-[56px] header_1 rounded-xl"
      : "py-3.25 header_3 rounded-[10px]";

  const modeCSS =
    mode === "ghost"
      ? "bg-white shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 cursor-pointer"
      : "bg-purple-700 group-hover:bg-purple-500 text-white cursor-pointer";

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
