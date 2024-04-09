import Title from "components/pages/bookmark/Title";
import Bookmarks from "components/pages/bookmark/Bookmarks";

const Bookmark = () => {
  return (
    <div className="w-full">
      <Title totalAmount={bookmarks.totalAmount} />
      <Bookmarks bookmarks={bookmarks.bookmarkForMonth} />
    </div>
  );
};

export default Bookmark;

const bookmarks = {
  totalAmount: 32, // 총 32개
  bookmarkForMonth: [
    {
      id: 1,
      month: "11월", // 내림차순 정렬
      bookmark: [
        {
          brandName: "데일리바이트",
          brandId: 23,
          articleTitle: "🤯 신입사원 시절 '최악의 실수'는?",
          articleId: 20221,
          sampleText:
            "지난 11월 3일 쿠팡플레이를 통해 공개된 서바이벌 프로그램 <대학전쟁> 혹시 보셨나요? 서울대, 카이스트, 포항공대, 연세대, 고려대에 재학 중인 대학생들이 출연하는 두뇌 서바이벌로, 개인적으로는 아쉬움이 남았던 넷플릭...",
          date: "2023-11-23",
          imageURL: "https://newdok.shop/public/Daily Byte.png",
        },
        {
          brandName: "뉴스레터 이름",
          brandId: 2,
          articleTitle: "🥯 전기차 배터리 시장에 찾아온 한파",
          articleId: 38745,
          sampleText: "최대 130자 기준",
          date: "2023-11-23",
          imageURL: "https://newdok.shop/public/NEWNEEK.png",
        },
      ],
    },
  ],
};
