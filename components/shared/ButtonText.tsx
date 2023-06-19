interface ButtonProps {
  func: () => void;
  mode: string;
  state: Boolean;
  size: string;
  text: string;
}

const ButtonText = (props: ButtonProps) => {
  const { func, mode, state, size, text } = props;
  return (
    <button
      className="button_5 w-fit h-fit border-b border-warmgray-100"
      onClick={func}
    >
      {text}
    </button>
  );
};

export default ButtonText;
