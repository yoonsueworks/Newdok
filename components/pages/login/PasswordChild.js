const PasswordChild = ({ setInputType, type }) => {
  return (
    <button
      className="w-5 h-5 bg-purple-300 shrink-0"
      onClick={(e) => {
        console.log(type);
        setInputType((type) => !type);
        e.preventDefault();
      }}
    ></button>
  );
};

export default PasswordChild;
