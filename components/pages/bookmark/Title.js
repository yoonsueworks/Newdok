import UserInterestsButton from "./UserInterestsButton";
import TotalSort from "./TotalSort";

const Title = ({ totalAmount }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h6>북마크함</h6>
        <div>검색</div>
      </div>
      <UserInterestsButton userInterests={userInterests} />
      <TotalSort totalAmount={totalAmount} />
    </div>
  );
};

export default Title;

const userInterests = [
  { id: 1, name: "경제 정치" },
  { id: 2, name: "비즈니스" },
  { id: 3, name: "과학 기술" },
  { id: 4, name: "트렌드" },
  { id: 5, name: "재테크" },
  { id: 6, name: "콘텐츠" },
  { id: 7, name: "미술 디자인" },
];
