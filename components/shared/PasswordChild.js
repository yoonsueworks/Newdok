import ViewIconOn from "icons/ver3.0/Line Eye.svg";
import ViewIconOff from "icons/ver3.0/Line Eye Closed.svg";

const PasswordChild = ({ setInputType, type }) => {
  const props = {
    width: "20",
    height: "20",
    className: "shrink-0",
    onClick: (e) => {
      setInputType((type) => !type);
      e.preventDefault();
    },
  };
  return type === true ? <ViewIconOn {...props} /> : <ViewIconOff {...props} />;
};

export default PasswordChild;
