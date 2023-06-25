interface ButtonProps {
  func: () => void;
  mode: string;
  state: Boolean;
  size: string;
  text: string;
}

const ButtonText = (props: ButtonProps) => {
  const { func, text, size } = props;
  const sizeCSS =
    size === "big"
      ? "single-18-sb"
      : size === "medium"
      ? "single-16-sb"
      : "single-14-sb";
  return (
    <button
      className={
        sizeCSS + " w-fit h-fit underline decoration-1 underline-offset-2"
      }
      onClick={func}
    >
      {text}
    </button>
  );
};

export default ButtonText;
