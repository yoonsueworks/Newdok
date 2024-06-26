const FilterChip = ({ children, text, state, open, id }) => {
  const defaultMode = "contentbox-border text-neutralgray-900";
  const hoverMode =
    "hover:bg-purple-50 hover:contentbox-border hover:rounded-full hover:text-neutralgray-900 ";
  const activatedMode = "selectedchip-border text-white bg-purple-400 ";
  const modeControl =
    id === 1 ? defaultMode : state ? activatedMode : defaultMode;

  return (
    <button className="group rounded-full shrink-0" onClick={open}>
      <div
        className={`w-fit h-fit px-2.5 py-2 cursor-pointer single-14-m flex gap-x-1 items-center rounded-full transition-colors duration-300 ${hoverMode} ${modeControl}`}
      >
        <span>{text}</span>
        {children}
      </div>
    </button>
  );
};

export default FilterChip;
