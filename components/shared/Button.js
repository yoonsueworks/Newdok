export default function Button(props) {
  const { func, mode, state, size, text, onboarding, width } = props;

  const sizeCSS =
    size === "big"
      ? "py-5 single-24-b rounded-[14px]"
      : size === "med"
      ? "py-4 single-20-b rounded-xl"
      : "py-3.5 single-18-b rounded-[10px]"; //small

  const modeCSS =
    mode === "ghost"
      ? "bg-white shadow-[inset_0_0px_0px_1px_#674188] text-purple-700 cursor-pointer group-hover:bg-purple-50 group-active:bg-purple-100"
      : "bg-purple-700 group-hover:bg-purple-500 text-white cursor-pointer";

  const stateCSS =
    state === true
      ? ""
      : "bg-warmgray-60 cursor-not-allowed group-hover:bg-warmgray-60";

  const widthCSS = width === "fit" ? "w-fit p-4" : "w-full";
  const widthGroupCSS = width === "fit" ? "w-fit" : "w-full";

  return (
    <div
      className={`${widthGroupCSS} group shrink-0`}
      onClick={state ? () => func() : () => alert(`${onboarding} 선택해주세요`)}
    >
      <div
        className={`${sizeCSS} ${modeCSS} ${stateCSS} ${widthCSS} flex items-center justify-center`}
      >
        {text}
      </div>
    </div>
  );
}
