const InputLabel = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="input-02 text-neutralgray-800 px-1">
      {text}
    </label>
  );
};

export default InputLabel;
