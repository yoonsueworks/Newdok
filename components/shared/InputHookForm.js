const InputHookForm = ({
  placeholder,
  child,
  func,
  name,
  error,
  isValid,
  type,
  children,
  input,
}) => {
  const validBorder = "shadow-[inset_0_0px_0px_1px_#CAC5C4]";

  const focusStyle = isValid
    ? "focus-within:shadow-[inset_0_0px_0px_2px_#BF9ECE]"
    : "focus-within:shadow-[inset_0_0px_0px_1px_#EA0730]";

  return (
    <div>
      <div>
        <div
          className={`flex justify-between items-center w-full p-4 gap-x-4 rounded-lg bg-white ${validBorder} ${focusStyle}`}
        >
          {input}
        </div>
      </div>
      <span>{error}</span>
    </div>
  );
};

export default InputHookForm;
