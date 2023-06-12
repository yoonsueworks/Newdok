// import { useContext, useEffect } from "react";
// import { GlobalContext } from "./_app";

// import Image from "next/image";
// import { useRouter } from "next/router";
// import Button from "../components/Button";
// import Topbar from "../components/Topbar";

// export const getServerSideProps = async () => {
//   const response = await fetch(
//     "http://localhost:3000/data/Industry_Interest.json"
//   );
//   const data = await response.json();
//   return {
//     props: {
//       interest: data.interests,
//       industry: data.industry,
//     },
//   };
// };

// export default function Home({ interest, industry }) {
//   const router = useRouter();
//   const routeUserResearch = () => router.push("/user-research");
//   const { setIndustry, setInterests } = useContext(GlobalContext);

//   useEffect(() => {
//     setIndustry(industry);
//     setInterests(interest);
//   }, []);

//   return (
//     <div className="w-full h-full flex flex-col justify-between pb-20">
//       <Topbar />
//       <div className="w-full h-full flex flex-col justify-end">
//         <div
//           id="buttonPlacementMain"
//           className="h-max px-5 flex flex-col items-center "
//         >
//           <div>
//             <div className="mb-10">
//               <Image
//                 src="/images/Newdok_Logo-motion.gif"
//                 alt="뉴독 서비스 로고: 우편함"
//                 id="gif"
//                 className="object-cover mb-[44px]"
//                 width="300"
//                 height="400"
//                 priority={true}
//               />
//             </div>
//             <div className="header_1 grid text-center">
//               <div>내게 꼭 필요한 뉴스레터만</div>
//               <div>쏙쏙 뽑아줄게요!</div>
//             </div>
//           </div>
//           <Button
//             func={routeUserResearch}
//             mode="enabled"
//             state={true}
//             size="big"
//             text="시작하기"
//             onClick={() => setProgress(1)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useContext, useEffect } from "react";
import { GlobalContext } from "./_app";

import Image from "next/image";
import { useRouter } from "next/router";
import Button from "shared/Button";
import Topbar from "shared/Topbar";

export default function Home() {
  const router = useRouter();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const routeSignup = () => router.push("/signup");
  const routeLogin = () => router.push("/login");
=======
  const routeOnbooarding = () => router.push("/onboarding");
=======
  const routeUserResearch = () => router.push("/user-research");
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
=======

  const routeSignup = () => router.push("/signup");
  const routeLogin = () => router.push("/login");
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
  const { setIndustry, setInterests } = useContext(GlobalContext);

  useEffect(() => {
    setIndustry(industry);
    setInterests(interest);
  }, []);
>>>>>>> 2190839 (Perf: change industry, interest select options fetch to getSeverSideProps)

  useEffect(() => {
    const timeout = setTimeout(() => router.push("/onboarding"), 1000);
    return () => clearTimeout(timeout);
  });

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
    <div className="w-full h-full flex flex-col justify-between pb-20">
      <Topbar />
      <div className="w-full h-full flex flex-col justify-end">
        <div
          id="buttonPlacementMain"
          className="h-max px-5 flex flex-col items-center "
        >
          <div>
            <div className="mb-10">
              <Image
                src="/images/Newdok_Logo-motion.gif"
                alt="뉴독 서비스 로고: 우편함"
                id="gif"
                className="object-cover mb-[44px]"
                width="300"
                height="400"
                priority={true}
              />
            </div>
            <div className="header_1 grid text-center">
              <div>내게 꼭 필요한 뉴스레터만</div>
              <div>쏙쏙 뽑아줄게요!</div>
            </div>
          </div>
          <Button
<<<<<<< HEAD
<<<<<<< HEAD
            func={routeSignup}
=======
            func={routeUserResearch}
>>>>>>> e80be68 (Refactor: onboarding -> user-research, userResearch)
=======
            func={routeSignup}
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
            mode="enabled"
            state={true}
            size="big"
            text="시작하기"
            onClick={() => setProgress(1)}
          />

          <div onClick={() => routeLogin()}>로그인</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
    <>
      <div className="bg-black w-16 md:w-32 lg:w-48">splash</div>
    </>
>>>>>>> afd040a (Test: input keyboard test)
=======
>>>>>>> b36d2d1 (refactor: signup, login, user-research routes edited)
  );
}

const industry = [
  {
    id: 2,
    name: "IT・게임・통신",
  },
  {
    id: 3,
    name: "F&B",
  },
  {
    id: 4,
    name: "건설・건축",
  },
  {
    id: 5,
    name: "광고",
  },
  {
    id: 6,
    name: "교육",
  },
  {
    id: 7,
    name: "금융・부동산",
  },
  {
    id: 8,
    name: "문화・예술・엔터테인먼트",
  },
  {
    id: 9,
    name: "미디어・출판",
  },
  {
    id: 10,
    name: "생산・제조",
  },
  {
    id: 11,
    name: "생활・서비스",
  },
  {
    id: 12,
    name: "유통・무역",
  },
  {
    id: 13,
    name: "의료",
  },
  {
    id: 14,
    name: "패션",
  },
  {
    id: 15,
    name: "자영업",
  },
  {
    id: 16,
    name: "기타",
  },
];
const interest = [
  {
    id: 1,
    name: "경제・시사・상식",
  },
  {
    id: 2,
    name: "비즈니스",
  },
  {
    id: 3,
    name: "과학・기술",
  },
  {
    id: 4,
    name: "트렌드",
  },
  {
    id: 5,
    name: "재테크",
  },
  {
    id: 6,
    name: "콘텐츠",
  },
  {
    id: 7,
    name: "라이프스타일",
  },
  {
    id: 8,
    name: "취미・자기계발",
  },
  {
    id: 9,
    name: "건강・의학",
  },
  {
    id: 10,
    name: "멘탈케어",
  },
  {
    id: 11,
    name: "푸드・드링크",
  },
  {
    id: 12,
    name: "자연・환경",
  },
  {
    id: 13,
    name: "리빙・인테리어",
  },
  {
    id: 14,
    name: "미술・디자인・전시",
  },
  {
    id: 15,
    name: "음악",
  },
  {
    id: 16,
    name: "게임",
  },
  {
    id: 17,
    name: "콘서트・공연",
  },
  {
    id: 18,
    name: "문화",
  },
  {
    id: 19,
    name: "문학・도서",
  },
  {
    id: 20,
    name: "언어",
  },
  {
    id: 21,
    name: "영화",
  },
  {
    id: 22,
    name: "지역・여행",
  },
  {
    id: 23,
    name: "가족",
  },
  {
    id: 24,
    name: "쇼핑",
  },
  {
    id: 25,
    name: "반려동물",
  },
  {
    id: 26,
    name: "사회공헌",
  },
];
