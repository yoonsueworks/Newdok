const Description = ({ description }) => {
  return (
    <div className="multiple-24-b text-neutralgray-900">
      <div>{description[0]}</div>
      <div>{description[1]}</div>
    </div>
  );
};

export default Description;
