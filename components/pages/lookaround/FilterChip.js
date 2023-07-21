const FilterChip = ({ children, text, state, func, hover }) => {
  const defaultMode = "contentbox-border text-neutralgray-900";
  const hoverMode =
    "hover:bg-purple-50 hover:contentbox-border hover:rounded-full hover:text-neutralgray-900";
  const activatedMode = "selectedchip-border text-white";

  return (
    <div
      className="group"
      onClick={func}
      onMouseEnter={hover}
      onMouseLeave={hover}
    >
      <div
        className={`w-fit h-fit px-2.5 py-2 cursor-pointer single-14-m flex gap-x-1 items-center rounded-full ${hoverMode} ${
          state ? defaultMode : activatedMode
        }`}
      >
        <span>{text}</span>
        {children}
      </div>
    </div>
  );
};

export default FilterChip;
