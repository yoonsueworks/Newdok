import ArrowIcon from "icons/ver3.0/Line Arrow Transfer.svg";

const TotalSort = ({ totalAmount, setIsModalOpen, sortMode }) => {
  return (
    <div className="flex justify-between mb-8 mt-5 mx-1">
      <div className="input-01 text-neutralgray-900">총 {totalAmount}개</div>
      <div
        className="body-s text-neutralgray-700 cursor-pointer flex items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="mt-[1px]">{sortMode.name}</div>
        <ArrowIcon color="#666666" width="14" height="14" />
      </div>
    </div>
  );
};

export default TotalSort;
