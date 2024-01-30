import ViewIconOn from "icons/view_on.svg";
import ViewIconOff from "icons/view_off.svg";

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
