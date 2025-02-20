const Description = ({ description }) => {
  return (
    <div className="headline-s text-neutralgray-900">
      <div>{description[0]}</div>
      <div>{description[1]}</div>
    </div>
  );
};

export default Description;
