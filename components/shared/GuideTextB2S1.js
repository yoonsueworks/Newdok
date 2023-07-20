const GuideTextB2S1 = ({ bigText1, bigText2, smallText1 }) => {
  return (
    <div className="grid gap-y-1">
      <div className="multiple-24-b text-neutralgray-900">
        {bigText1}
        <br />
        {bigText2}
      </div>
      <div className="single-16-m">{smallText1}</div>
    </div>
  );
};

export default GuideTextB2S1;
