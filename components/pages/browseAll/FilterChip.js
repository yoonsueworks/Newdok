const FilterChip = ({ children, text, state, open, id }) => {
  const defaultMode = "contentbox-border text-neutralgray-700";
  const hoverMode =
    "hover:bg-blue-50 hover:hoverchip-border hover:rounded-full hover:text-neutralgray-600 ";
  const activatedMode = "selectedchip-border text-blue-600 ";
  const modeControl =
    id === 1 ? defaultMode : state ? activatedMode : defaultMode;

  return (
    <button className="group rounded-full shrink-0" onClick={open}>
      <div
        className={`w-fit h-fit px-2.5 py-1.5 cursor-pointer text-[12px] font-medium flex items-center rounded-full transition-colors duration-300 ${hoverMode} ${modeControl}`}
      >
        <span>{text}</span>
        {children}
      </div>
    </button>
  );
};

export default FilterChip;
