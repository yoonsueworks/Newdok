const ButtonText = (props) => {
  const { func, text, size } = props;
  const sizeCSS =
    size === "big" ? "button-01" : size === "medium" ? "button-02" : "label-l";
  return (
    <button className={sizeCSS + " w-fit h-fit decoration-1 "} onClick={func}>
      {text}
    </button>
  );
};

export default ButtonText;
