interface ButtonProps {
  func: () => void;
  mode: string;
  state: Boolean;
  size: string;
  text: string;
}

const ButtonText = (props: ButtonProps) => {
  const { func, mode, state, size, text } = props;
  return <button onClick={func}>{text}</button>;
};

export default ButtonText;
