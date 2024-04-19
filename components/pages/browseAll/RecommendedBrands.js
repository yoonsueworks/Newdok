import Authorized from "components/pages/browseAll/Authorized";

const RecommendedLetters = ({ data }) => {
  return (
    <div className="w-full h-full">
      {
        <Authorized
          shuffledArray={recommendedDatas.union}
          shuffleUnion={recommendedDatas.union}
          intersectionArr={recommendedDatas.intersection}
        />
      }
    </div>
  );
};
export default RecommendedLetters;

const recommendedDatas = {
  intersection: [
    {
      id: 15,
      brandName: "비잉10",
      firstDescription: "멘탈 스타일리스트가 챙겨주는  일잘러를 위한 마음가짐",
      secondDescription: "일잘러를 위한 마음 챙김 뉴스레터",
      publicationCycle: "격주 목요일 아침",
      subscribeUrl: "https://being10.stibee.com/subscribe/",
      imageUrl: "https://newdok.shop/public/비잉10.png",
      createdAt: "2023-07-15T07:43:12.567Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 2,
          name: "F&B",
        },
        {
          id: 1,
          name: "IT・게임・통신",
        },
        {
          id: 3,
          name: "건설・건축",
        },
        {
          id: 4,
          name: "광고",
        },
        {
          id: 5,
          name: "교육",
        },
        {
          id: 6,
          name: "금융・부동산",
        },
        {
          id: 14,
          name: "기타",
        },
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
        {
          id: 9,
          name: "생산・제조",
        },
        {
          id: 10,
          name: "생활・서비스",
        },
        {
          id: 11,
          name: "유통・무역",
        },
        {
          id: 13,
          name: "창업・자영업",
        },
        {
          id: 12,
          name: "패션",
        },
      ],
      interests: [
        {
          id: 9,
          name: "건강・의학",
        },
        {
          id: 7,
          name: "라이프스타일",
        },
        {
          id: 10,
          name: "멘탈케어",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
      ],
    },
    {
      id: 32,
      brandName: "트렌드 라이트",
      firstDescription:
        "그 주의 가장 핫한 트렌드만 엄선한  현직 커머스 업계 마케터의 인사이트",
      secondDescription: "핫한 트렌드만 엄선한 커머스 업계 인사이트",
      publicationCycle: "매주 수요일 아침",
      subscribeUrl:
        "https://page.stibee.com/subscriptions/41037?groupIds=96898",
      imageUrl: "https://newdok.shop/public/트렌드 라이트.png",
      createdAt: "2023-07-15T08:40:00.324Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 9,
          name: "생산・제조",
        },
        {
          id: 11,
          name: "유통・무역",
        },
      ],
      interests: [
        {
          id: 1,
          name: "경제・시사",
        },
        {
          id: 2,
          name: "비즈니스",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
        {
          id: 4,
          name: "트렌드",
        },
      ],
    },
    {
      id: 35,
      brandName: "밑줄일기",
      firstDescription: "출근하기 싫은 사람들을 위한 반짝거리는 문장들",
      secondDescription: "당신에게 보내는 반짝거리는 문장들",
      publicationCycle: "매주 일요일 혹은 월요일",
      subscribeUrl: "https://page.stibee.com/subscriptions/59924",
      imageUrl: "https://newdok.shop/public/밑줄일기.png",
      createdAt: "2023-07-15T08:40:00.324Z",
      updatedAt: "2024-02-16T08:38:20.778Z",
      industries: [
        {
          id: 2,
          name: "F&B",
        },
        {
          id: 1,
          name: "IT・게임・통신",
        },
        {
          id: 3,
          name: "건설・건축",
        },
        {
          id: 4,
          name: "광고",
        },
        {
          id: 5,
          name: "교육",
        },
        {
          id: 6,
          name: "금융・부동산",
        },
        {
          id: 14,
          name: "기타",
        },
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
        {
          id: 9,
          name: "생산・제조",
        },
        {
          id: 10,
          name: "생활・서비스",
        },
        {
          id: 11,
          name: "유통・무역",
        },
        {
          id: 13,
          name: "창업・자영업",
        },
        {
          id: 12,
          name: "패션",
        },
      ],
      interests: [
        {
          id: 7,
          name: "라이프스타일",
        },
        {
          id: 19,
          name: "문학・도서",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
      ],
    },
    {
      id: 38,
      brandName: "더슬랭",
      firstDescription:
        "뉴스 볼 시간 하나 없이 바쁜 현대인들을  위한 깊이 있는 시사 뉴스레터",
      secondDescription: "현대인들을 위한 깊이 있는 시사 뉴스레터",
      publicationCycle: "매주 월, 수, 금 아침",
      subscribeUrl: "https://theslang.co/",
      imageUrl: "https://newdok.shop/public/더슬랭.png",
      createdAt: "2023-07-15T08:40:00.324Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 2,
          name: "F&B",
        },
        {
          id: 1,
          name: "IT・게임・통신",
        },
        {
          id: 3,
          name: "건설・건축",
        },
        {
          id: 4,
          name: "광고",
        },
        {
          id: 5,
          name: "교육",
        },
        {
          id: 6,
          name: "금융・부동산",
        },
        {
          id: 14,
          name: "기타",
        },
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
        {
          id: 9,
          name: "생산・제조",
        },
        {
          id: 10,
          name: "생활・서비스",
        },
        {
          id: 11,
          name: "유통・무역",
        },
        {
          id: 13,
          name: "창업・자영업",
        },
        {
          id: 12,
          name: "패션",
        },
      ],
      interests: [
        {
          id: 1,
          name: "경제・시사",
        },
        {
          id: 2,
          name: "비즈니스",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
        {
          id: 4,
          name: "트렌드",
        },
      ],
    },
    {
      id: 40,
      brandName: "COFFEEPOT",
      firstDescription:
        "세상 변화의 흐름을 이끄는 기업과 비즈니스의 맥락을 쉽고 재미있게",
      secondDescription: "쉽고 재밌는 해외 비즈니스 뉴스레터",
      publicationCycle: "매주 화요일",
      subscribeUrl: "https://page.stibee.com/subscriptions/52057",
      imageUrl: "https://newdok.shop/public/COFFEEPOT.png",
      createdAt: "2023-07-15T08:40:00.324Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 2,
          name: "F&B",
        },
        {
          id: 1,
          name: "IT・게임・통신",
        },
        {
          id: 3,
          name: "건설・건축",
        },
        {
          id: 4,
          name: "광고",
        },
        {
          id: 5,
          name: "교육",
        },
        {
          id: 6,
          name: "금융・부동산",
        },
        {
          id: 14,
          name: "기타",
        },
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
        {
          id: 9,
          name: "생산・제조",
        },
        {
          id: 10,
          name: "생활・서비스",
        },
        {
          id: 11,
          name: "유통・무역",
        },
        {
          id: 13,
          name: "창업・자영업",
        },
        {
          id: 12,
          name: "패션",
        },
      ],
      interests: [
        {
          id: 1,
          name: "경제・시사",
        },
        {
          id: 3,
          name: "과학・기술",
        },
        {
          id: 2,
          name: "비즈니스",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
        {
          id: 4,
          name: "트렌드",
        },
      ],
    },
    //
  ],
  union: [
    {
      id: 4,
      brandName: "외계레터",
      firstDescription:
        "당신만을 위한 외식업 세계,  지구인의 외식업 문화 연구 이야기",
      secondDescription: "당신만을 위한 외식업 세계의 이야기",
      publicationCycle: "매주 금요일",
      subscribeUrl: "https://foodworld-letter.stibee.com/subscribe/",
      imageUrl: "https://newdok.shop/public/외계레터.png",
      createdAt: "2023-07-15T07:30:42.996Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 2,
          name: "F&B",
        },
        {
          id: 11,
          name: "유통・무역",
        },
      ],
      interests: [
        {
          id: 4,
          name: "트렌드",
        },
        {
          id: 11,
          name: "푸드・드링크",
        },
      ],
    },
    {
      id: 6,
      brandName: "밑미 meet me",
      firstDescription:
        "'진짜 나'를 찾아가는 사람들의 이야기와  마음을 위로하는 이야기",
      secondDescription: "'진짜 나'를 찾아가는 사람들의 이야기",
      publicationCycle: "매주 월요일 아침",
      subscribeUrl: "https://meetmeletter.stibee.com/subscribe/",
      imageUrl: "https://newdok.shop/public/밑미 meet me.png",
      createdAt: "2023-07-15T07:30:42.996Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
      ],
      interests: [
        {
          id: 9,
          name: "건강・의학",
        },
        {
          id: 7,
          name: "라이프스타일",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
      ],
    },
    {
      id: 7,
      brandName: "다다레터",
      firstDescription:
        "예술을 즐기고 싶은 ‘딜레탕트’들을 위한  문화예술 이야기",
      secondDescription: "잡다하고 많은 문화예술 이야기",
      publicationCycle: "격주 목요일 아침",
      subscribeUrl: "https://page.stibee.com/subscriptions/107942",
      imageUrl: "https://newdok.shop/public/다다레터.png",
      createdAt: "2023-07-15T07:30:42.996Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
        {
          id: 8,
          name: "미디어・출판",
        },
      ],
      interests: [
        {
          id: 18,
          name: "문화",
        },
        {
          id: 14,
          name: "미술・디자인",
        },
        {
          id: 21,
          name: "영화",
        },
        {
          id: 15,
          name: "음악",
        },
        {
          id: 4,
          name: "트렌드",
        },
      ],
    },
    {
      id: 8,
      brandName: "머니레터",
      firstDescription:
        "돈을 더 잘 벌고 더 잘 쓰는 방법,  돈에 대한 모든 재미있는 소식들",
      secondDescription: "돈에 대한 모든 재미있는 소식들",
      publicationCycle: "매주 평일 오전 6시",
      subscribeUrl: "https://page.stibee.com/subscriptions/40802",
      imageUrl: "https://newdok.shop/public/머니레터.png",
      createdAt: "2023-07-15T07:30:42.996Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 6,
          name: "금융・부동산",
        },
      ],
      interests: [
        {
          id: 1,
          name: "경제・시사",
        },
        {
          id: 5,
          name: "재테크",
        },
      ],
    },
    {
      id: 10,
      brandName: "현대지성",
      firstDescription:
        "도서 큐레이션부터 출판 비하인드까지,  책과 관련된 사람들의 이야기",
      secondDescription: "책, 그리고 책과 관련된 사람들에 대한 이야기",
      publicationCycle: "매주 화요일",
      subscribeUrl: "https://hdjisung.stibee.com/subscribe/",
      imageUrl: "https://newdok.shop/public/현대지성.png",
      createdAt: "2023-07-15T07:30:42.996Z",
      updatedAt: "2023-09-27T07:13:17.112Z",
      industries: [
        {
          id: 7,
          name: "문화・예술・엔터테인먼트",
        },
      ],
      interests: [
        {
          id: 19,
          name: "문학・도서",
        },
        {
          id: 18,
          name: "문화",
        },
        {
          id: 8,
          name: "취미・자기계발",
        },
      ],
    },
  ],
};
