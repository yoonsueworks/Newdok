import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CalendarContext } from "context/CalendarContext";

import Articles from "components/pages/home/Articles";
import ReactCalendar from "components/pages/home/Calendar";
import ToolBar from "components/pages/home/ToolBar";
import Loading from "shared/Loading";

import { useMonthlyArticles } from "service/hooks/newsletters";
import {
  monthlyArticlesAtom,
  monthValueAtom,
  dateValueAtom,
} from "service/atoms/atoms";

const Home = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateLocaleKr, setDateLocaleKr] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [fullActiveDate, setFullActiveDate] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  // 외부 함수에서 value 갱신 시 activeStartDate 또한 업데이트 해야 라이브러리에서 값 갱신 됨 (activeStartDate, onActiveStartDateChange)
  const [monthlyArticles, setMonthlyArticles] =
    useRecoilState(monthlyArticlesAtom);
  const [value, onChange] = useRecoilState(monthValueAtom);
  const [dateValue, setDateValue] = useRecoilState(dateValueAtom);

  const date = new Date();
  const thisMonth = date.getMonth() + 1;
  const { data, isLoading } = useMonthlyArticles(thisMonth);

  const calendarContextValues = {
    setCalendarOpen: setCalendarOpen,
    calendarOpen: calendarOpen,
    dateLocaleKr: dateLocaleKr,
    setDateLocaleKr: setDateLocaleKr,
    activeDate: activeDate,
    setActiveDate: setActiveDate,
    fullActiveDate: fullActiveDate,
    setFullActiveDate: setFullActiveDate,
    activeMonth: activeMonth,
    setActiveMonth: setActiveMonth,
    activeStartDate: activeStartDate,
    setActiveStartDate: setActiveStartDate,
  };

  useEffect(() => {
    // 과거 날짜의 뉴스레터 확인하고 다시 돌아왔을 경우
    if (String(dateValue).substring(0, 15) !== String(date).substring(0, 15)) {
      const savedDate = new Date(String(dateValue));
      const currentDate = savedDate.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateLocaleKr(currentDate);
      setFullActiveDate(currentDate);
      setActiveDate(savedDate.getDate());
      setActiveMonth(savedDate.getMonth() + 1);
      setActiveStartDate(new Date(String(dateValue)));
    } else {
      // 오늘 날짜, 최초 홈에 접근
      const currentDate = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateLocaleKr(currentDate);
      setFullActiveDate(currentDate);
      setActiveDate(new Date().getDate());
      setActiveMonth(new Date().getMonth() + 1);
      if (calendarData) {
        setMonthlyArticles(calendarData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <CalendarContext.Provider value={calendarContextValues}>
        <div className="h-full w-full flex flex-col overflow-auto">
          {!calendarOpen && <ToolBar />}
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="relative">
                {calendarOpen && <ReactCalendar />}
              </div>
              <Articles />
            </>
          )}
        </div>
      </CalendarContext.Provider>
    </>
  );
};

export default Home;

const calendarData = [
  {
    publishDate: 1,
    receivedUnread: 4,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 한미그룹과 OCI그룹, 합병 물 건너간 이유",
        articleId: 66015,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔더 강력한 의협 회장이 온다",
        articleId: 66025,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 서울 잠실 20평대 재건축 추친 아파트를 7억 대에 살 수 있는 기회",
        articleId: 66034,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle:
          "📮얼론앤어라운드 No.377 섬에서 사는 일 - 고사리 시즌, 막이 오르다",
        articleId: 66040,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 2,
    receivedUnread: 6,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 삼성전자와 SK하이닉스 주가가 급등한 이유",
        articleId: 66063,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔GTX로 출퇴근 지옥철 끝?",
        articleId: 66064,
        status: "Unread",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 돈은 어디서? 민간에서",
        articleId: 66069,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle: "[돈키레터] 파란나라를 보았니? 미스터블루 +9%",
        articleId: 66080,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle:
          "📮얼론앤어라운드 No.372 - 후쿠오카사람처럼 출근길 후다닥 우동 한 그릇",
        articleId: 66085,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 스토리북 8: 차세대 테스트, 성능 및 호환성",
        articleId: 66096,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 3,
    receivedUnread: 3,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "(광고) 🥯 배민과 요기요도 배달비 무료라고?",
        articleId: 66113,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: '(광고)🦔배달앱: "잘 봐, 이젠 무료 배달 싸움이다"',
        articleId: 66128,
        status: "Read",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle: '[돈키레터] 110대책 "주택 수 제외" 세법 총정리!',
        articleId: 66129,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.379 - 매일 매일 생각한다는 것",
        articleId: 66141,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 4,
    receivedUnread: 6,
    receivedArticleList: [
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔총선, 지금 어느 당이 앞서고 있어?",
        articleId: 66162,
        status: "Unread",
      },
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 4.10 총선, 각 정당의 핵심 경제 공약은?",
        articleId: 66163,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle: "[돈키레터] 전쟁과 지진, 희망은 없는가",
        articleId: 66176,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.380 - 아낄수록, 감출수록 좋은 것",
        articleId: 66184,
        status: "Unread",
      },
      {
        brandName: "헤이팝레터",
        imageUrl: "https://newdok.shop/public/헤이팝레터.png",
        articleTitle: "😇 요즘 힘들지? 마음에 평화를 주는 종교 건축물 3",
        articleId: 66185,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 리액트 컴파일러와 리액트 19 - 이제 메모이제이션을 신경쓰지 않아도 되나요?",
        articleId: 66197,
        status: "Read",
      },
      {
        brandName: "해피어레터",
        imageUrl: "https://newdok.shop/public/해피어레터.png",
        articleTitle: "[해피어레터] 쉿! 윤수한테만 먼저 공개할게😉",
        articleId: 66207,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 5,
    receivedUnread: 5,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 4.10 총선, 경제 공약 총정리 2탄",
        articleId: 66213,
        status: "Unread",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 왜 부동산 공부는 불황기에 해야 할까?",
        articleId: 66219,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔사전투표 핵심 가이드북이 도착했습니다",
        articleId: 66220,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "(광고) [돈키레터] 부동산을 할인 받을 수 있는 평생 할인 카드 💳",
        articleId: 66232,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.381 - 여행어 사전, 경유",
        articleId: 66245,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 6,
    receivedUnread: 2,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "(광고) 🥯 Byte를 좀 더 알차게 활용하는 방법",
        articleId: 66272,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔'노잼도시' 대전은 어떻게 핫플이 됐을까?",
        articleId: 66273,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 7,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 8,
    receivedUnread: 6,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 삼성전자에도 봄은 온다",
        articleId: 66280,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔2024 총선 예고편: 사전투표 결과는?",
        articleId: 66309,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 지수가 내릴 때 오르는 게 진짜, 코리아에프티 +25%(벚꽃캠프가 온다)🌸",
        articleId: 66310,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.382 섬에서 사는 일 - 어쩌다, 비양도",
        articleId: 66319,
        status: "Unread",
      },
      {
        brandName: "xyzorba",
        imageUrl: "https://newdok.shop/public/xyzorba.png",
        articleTitle: "짝사랑",
        articleId: 66320,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 자바스크립트 레지스트리 JSR을 소개합니다",
        articleId: 66328,
        status: "Read",
      },
      {
        brandName: "해피어레터",
        imageUrl: "https://newdok.shop/public/해피어레터.png",
        articleTitle: "[해피어레터] 오롤리데이 뉴 홈페이지 OPEN!🎉",
        articleId: 66342,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 9,
    receivedUnread: 4,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 전기차 배터리 시장에 찾아온 한파",
        articleId: 66364,
        status: "Read",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 역차별, Oh, No!",
        articleId: 66365,
        status: "Read",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔총선 D-1, 이거 알면 더 재밌슴!",
        articleId: 66366,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 아이씨디 +27%, 이 맛에 주식합니다(feat.벚꽃캠프)",
        articleId: 66367,
        status: "Read",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle:
          "📮얼론앤어라운드 No.383 -  다정한 마음으로 가득 찬 오뎅집",
        articleId: 66368,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 자바스크립트 시각화하기 : 프로미스 실행",
        articleId: 66369,
        status: "Unread",
      },
      {
        brandName: "풀-레터",
        imageUrl: "https://newdok.shop/public/풀-레터.png",
        articleTitle: "🖼️풀-레터:  아피스토의 첫 전시 이야기",
        articleId: 66388,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 10,
    receivedUnread: 2,
    receivedArticleList: [
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          '[돈키레터] 투자고수의 비밀노트 "벚꽃캠프" 참석안내 (선착순 마감)🌸',
        articleId: 66407,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: '🦔과학자: "이건 지구 종말 신호입니다"',
        articleId: 66408,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 11,
    receivedUnread: 4,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 구글과 인텔의 AI 반도체 출사표",
        articleId: 66449,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle: "[돈키레터] 2020년 총선에서 민주당 압승 후 급등한 주식",
        articleId: 66450,
        status: "Unread",
      },
      {
        brandName: "헤이팝레터",
        imageUrl: "https://newdok.shop/public/헤이팝레터.png",
        articleTitle: "(광고)🍷 탭샵바를 알게 된 헤이팝의 반응",
        articleId: 66451,
        status: "Read",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.384 - 용기는 때로 돈의 문제일 수도",
        articleId: 66452,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 재미와 이익을 위한 자바스크립트 최적화",
        articleId: 66453,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 12,
    receivedUnread: 6,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 윤석열 정부의 경제 공약은 이제 어디로?",
        articleId: 66472,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔여당이 총선에서 참패한 이유",
        articleId: 66473,
        status: "Unread",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 사업비 33% 급등",
        articleId: 66481,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] GTX-A, C 노선이 예정된 평택 지제역 인근 투자할 만한 아파트 총 분석!",
        articleId: 66492,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle:
          "📮얼론앤어라운드 No.385 - 이상한 곳을 찾아다니는 이상한 사람",
        articleId: 66498,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle: "[Korean FE Article] 웹의 흥망성쇠",
        articleId: 66514,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 13,
    receivedUnread: 0,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 첫 번째 바이트 프렌즈를 소개합니다",
        articleId: 66527,
        status: "Read",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔불교박람회가 MZ 핫플이 된 사연",
        articleId: 66539,
        status: "Read",
      },
    ],
  },
  {
    publishDate: 14,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 15,
    receivedUnread: 5,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 이란, 이스라엘 본토를 직접 공격한 이유는?",
        articleId: 66549,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔“한국 정부, 내 주식 피해 물어내!”",
        articleId: 66566,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 서울 영등포구 58평 아파트를 8억 대에 살 수 있는 기회!",
        articleId: 66573,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.386 섬에서 사는 일 - 표선목욕탕",
        articleId: 66580,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle:
          "[Korean FE Article] 타입스크립트에서 'As Const' 이해하기",
        articleId: 66595,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 16,
    receivedUnread: 4,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 총선이 끝나자 꿈틀거리는 물가",
        articleId: 66604,
        status: "Unread",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 규제완화 올스톱",
        articleId: 66613,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "(광고)🦔모두에게 더 안전한 사회가 되려면 🎗️",
        articleId: 66616,
        status: "Read",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle: "[돈키레터] 대성하이텍 +11%, 이것이 방산주다",
        articleId: 66619,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.387 -  '안녕' 후쿠오카",
        articleId: 66623,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle: "[Korean FE Article] 프런트엔드의 미래 탐색하기",
        articleId: 66635,
        status: "Read",
      },
    ],
  },
  {
    publishDate: 17,
    receivedUnread: 1,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 미국, 삼성전자에 9조 원 주기로 한 이유",
        articleId: 66653,
        status: "Read",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔미국이 반도체 보조금 크게 쏜 이유 ",
        articleId: 66661,
        status: "Read",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 핑계로 성공한 사람은 김건모뿐, 대성하이텍 +25%",
        articleId: 66668,
        status: "Read",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.388 - 마을길 여행, 부여 규암마을",
        articleId: 66677,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 18,
    receivedUnread: 6,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "🥯 부동산 4월 위기설, 다시 올라오는 이유",
        articleId: 66704,
        status: "Unread",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔AI 노래 커버, 저작권 문제는 없을까?",
        articleId: 66707,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 서울 신축(5년 이하) 갭 2억 이하 아파트 Pick 2!",
        articleId: 66714,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle:
          "📮얼론앤어라운드 No.389 초빼이의 노포 일기 - 서울 무교동 이북만두",
        articleId: 66716,
        status: "Unread",
      },
      {
        brandName: "헤이팝레터",
        imageUrl: "https://newdok.shop/public/헤이팝레터.png",
        articleTitle: "🧡헤이팝 구독자 애칭을 정해주세요 (feat.이벤트)",
        articleId: 66725,
        status: "Unread",
      },
      {
        brandName: "Korean FE article",
        imageUrl: "https://newdok.shop/public/Korean FE article.png",
        articleTitle: "[Korean FE Article] BFCache 알아보기",
        articleId: 66734,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 19,
    receivedUnread: 4,
    receivedArticleList: [
      {
        brandName: "Daily Byte",
        imageUrl: "https://newdok.shop/public/Daily Byte.png",
        articleTitle: "(광고) 🥯 바이든, 중국에 폭탄 관세를 때리다",
        articleId: 66753,
        status: "Unread",
      },
      {
        brandName: "부딩 BOODING",
        imageUrl: "https://newdok.shop/public/부딩 BOODING.png",
        articleTitle: "🌰 1인당 최저주거기준 면적은?",
        articleId: 66754,
        status: "Read",
      },
      {
        brandName: "NEWNEEK",
        imageUrl: "https://newdok.shop/public/NEWNEEK.png",
        articleTitle: "🦔치킨이 비싸져서 금리 못 내린다고?",
        articleId: 66761,
        status: "Unread",
      },
      {
        brandName: "돈키레터",
        imageUrl: "https://newdok.shop/public/돈키레터.png",
        articleTitle:
          "[돈키레터] 석달새 20채 거래 된 '마포 성산 시영 아파트' 기회일까?",
        articleId: 66768,
        status: "Unread",
      },
      {
        brandName: "Alone&around",
        imageUrl: "https://newdok.shop/public/Alone&around.png",
        articleTitle: "📮얼론앤어라운드 No.390 - 여행어 사전, 바다",
        articleId: 66773,
        status: "Unread",
      },
    ],
  },
  {
    publishDate: 20,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 21,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 22,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 23,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 24,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 25,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 26,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 27,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 28,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 29,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 30,
    receivedUnread: 0,
    receivedArticleList: [],
  },
  {
    publishDate: 31,
    receivedUnread: 0,
    receivedArticleList: [],
  },
];
