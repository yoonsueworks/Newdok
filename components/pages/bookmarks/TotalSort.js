const TotalSort = ({ totalAmount }) => {
  return (
    <div className="flex justify-between mb-8 mt-5">
      <div className="input-01 text-neutralgray-900">총 {totalAmount}개</div>
      <div className="body-s text-neutralgray-700">정렬</div>
    </div>
  );
};

export default TotalSort;
