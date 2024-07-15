import TotalSort from "components/pages/bookmarks/TotalSort";

import UserInterestsButton from "components/pages/bookmarks/UserInterestsButton";
import Months from "components/pages/bookmarks/Months";
import Title from "components/pages/bookmarks/Title";

const Bookmarks = () => {
  const userInterests = [
    { id: 1, name: "경제 정치" },
    { id: 2, name: "비즈니스" },
    { id: 3, name: "과학 기술" },
    { id: 4, name: "트렌드" },
    { id: 5, name: "재테크" },
    { id: 6, name: "콘텐츠" },
    { id: 7, name: "미술 디자인" },
  ];

  const data = {
    totalAmount: 32, // 총 32개
    bookmarkForMonth: [
      {
        id: 1,
        month: "11월", // 내림차순 정렬
        bookmark: [
          {
            brandName: "뉴스레터 이름",
            brandId: 23,
            articleTitle: "🤯 신입사원 시절 '최악의 실수'는?",
            articleId: 50392,
            sampleText:
              "출연하는 두뇌 서바이벌로, 개인적으로는 아쉬움이 남았던 넷플릭스 두뇌 서바이벌 <데블스플랜>에 대한 갈증을 해소해...",
            date: "2023-11-23",
            imageURL: "/images/logo-3.0.svg",
          },
          {
            brandName: "뉴스레터 이름",
            brandId: 2,
            articleTitle: "🥯 전기차 배터리 시장에 찾아온 한파",
            articleId: 10236,
            sampleText: "최대 130자 기준",
            date: "2023-11-23",
            imageURL: "/images/logo-3.0.svg",
          },
        ],
      },
      {
        id: 2,
        month: "10월", //내림차순 정렬
        bookmark: [],
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Title />
      <UserInterestsButton userInterests={userInterests} />
      <div className="px-7">
        <TotalSort totalAmount={data.totalAmount} />
        <Months bookmarks={data.bookmarkForMonth} />
      </div>
    </div>
  );
};

export default Bookmarks;
