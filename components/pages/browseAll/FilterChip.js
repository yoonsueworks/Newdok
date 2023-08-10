const FilterChip = ({ children, text, state, func, hover, open }) => {
  const defaultMode = "contentbox-border text-neutralgray-900";
  const hoverMode =
    "hover:bg-purple-50 hover:contentbox-border hover:rounded-full hover:text-neutralgray-900";
  const activatedMode = "selectedchip-border text-white";

  return (
    <button
      className="group rounded-full"
      onClick={() => {
        func();
        open();
      }}
      onMouseEnter={hover}
      onMouseLeave={hover}
    >
      <div
        className={`w-fit h-fit px-2.5 py-2 cursor-pointer single-14-m flex gap-x-1 items-center rounded-full transition-colors duration-300 ${hoverMode} ${
          state ? defaultMode : activatedMode
        }`}
      >
        <span>{text}</span>
        {children}
      </div>
    </button>
  );
};

export default FilterChip;
