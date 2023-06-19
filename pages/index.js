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

  const routeSignup = () => router.push("/signup");
  const routeLogin = () => router.push("/login");

  const routeOnbooarding = () => router.push("/onboarding");

  const routeUserResearch = () => router.push("/user-research");

  useEffect(() => {
    const timeout = setTimeout(() => router.push("/onboarding"), 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <>
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
              func={routeSignup}
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

      <>
        <div className="bg-black w-16 md:w-32 lg:w-48">splash</div>
      </>
    </>
  );
}
