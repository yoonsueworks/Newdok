const Input = ({ placeholder, child, func, name, error, isValid, type }) => {
  const validBorder = "shadow-[inset_0_0px_0px_1px_#CAC5C4]";

  const focusStyle = isValid
    ? "focus-within:shadow-[inset_0_0px_0px_2px_#BF9ECE]"
    : "focus-within:shadow-[inset_0_0px_0px_1px_#EA0730]";

  return (
    <div>
      <div
        className={`flex justify-between items-center w-full p-4 gap-x-4 rounded-lg ${validBorder} ${focusStyle}`}
      >
        <input
          className={`w-full rounded-lg bg-transparent`}
          name={name}
          placeholder={placeholder}
          onChange={func}
          type={type ? "text" : "password"}
        />
        {/* <div className="w-5 h-5 bg-purple-300 shrink-0" /> */}
        {child}
      </div>
      {!isValid && <div className="pt-2 caption_2 text-error">{error}</div>}
    </div>
  );
};

export default Input;
