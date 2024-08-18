export default function Button(props) {
  const { func, mode, state, size, text, onboarding, width } = props;

  const sizeCSS =
    size === "big"
      ? "p-4 button-03 rounded-xl"
      : size === "med"
      ? "py-4 single-20-b rounded-xl"
      : "py-3.5 single-18-b rounded-[10px]"; //small

  const modeCSS =
    mode === "ghost"
      ? "bg-blue-600 text-white cursor-pointer group-hover:bg-blue-500 group-active:bg-purple-700  transition-colors duration-300"
      : "bg-blue-600 group-hover:bg-blue-500 text-white cursor-pointer transition-colors duration-300";

  const stateCSS =
    state === true
      ? ""
      : "bg-warmgray-60 cursor-not-allowed group-hover:bg-warmgray-60  transition-colors duration-300";

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
