import GuideTextB2S1 from "shared/GuideTextB2S1";

const ReasonLeave = ({ leaveResearch, inqueries, setInqueries }) => {
  const handleCheckbox = (e) => {
    const selectedId = Number(e.target.name);
    const isSelected = inqueries.includes(selectedId);

    if (isSelected) {
      setInqueries(inqueries.filter((e) => e !== selectedId));
    }
    if (!isSelected) {
      setInqueries([...inqueries, Number(selectedId)]);
    }
  };

  return (
    <>
      <GuideTextB2S1
        bigText1="떠나시는 이유는"
        bigText2="무엇인가요?"
        smallText1="하나 이상의 항목을 선택하시면 탈퇴가 완료돼요."
      />
      <div className="flex flex-col">
        {leaveResearch.map((item) => {
          return (
            <div className="py-3.5 flex justify-between" key={item.id}>
              <span>{item.text}</span>
              <div>
                <input
                  type="checkbox"
                  checked={inqueries.includes(item.id)}
                  name={item.id}
                  id={`check${item.id}`}
                  onChange={handleCheckbox}
                />
                <label
                  id={`check${item.id}`}
                  htmlFor={`check${item.id}`}
                ></label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReasonLeave;
