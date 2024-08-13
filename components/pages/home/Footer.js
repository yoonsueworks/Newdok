import Image from "next/image";
import { useRouter } from "next/router";
import InstagramLogo from "icons/ver3.0/footer_instagram.svg";
import AppstoreLogo from "icons/ver3.0/footer_appstore.svg";

export default function Footer() {
  const router = useRouter();
  const outerLinks = [
    {
      id: 1,
      icon: <InstagramLogo />,
      url: "https://www.instagram.com/newdok.site/",
    },
    {
      id: 2,
      icon: <AppstoreLogo />,
      url: "https://www.apple.com/kr/app-store/",
    },
  ];

  const policies = [
    {
      id: 1,
      name: "이용약관",
      url: "https://newdok.notion.site/18aacf9713bc427a850ae8da92b69087?pvs=4",
    },
    {
      id: 2,
      name: "개인정보처리방침",
      url: "https://newdok.notion.site/82ef5aea46d84623b7b19bb951b6043c?pvs=4",
    },
    {
      id: 3,
      name: "고객센터",
      url: "https://7xrdp4cp24a.typeform.com/to/Lkh7C9zd",
    },
  ];

  return (
    <div className="xl:px-30 xl:py-14 md:px-10 md:py-9 pt-5 px-6 pb-14">
      <div className="flex justify-between mb-2 sm:mb-4 xs:mb-4">
        <div className="w-[155.63px] h-[27.42px] relative bg-white">
          <Image
            width="156"
            height="28"
            responsive="true"
            alt="Newdok logo"
            src="/images/logo-3.0.svg"
            priority
            required
          />
        </div>
        <ul className="flex gap-x-3">
          {outerLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer"
              onClick={() => window.open(link.url)}
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex sm:flex-col-reverse xs:flex-col-reverse xl:justify-between md:justify-between gap-y-2 text-[#adadad] text-[11px] font-normal">
        <div className="xl:mb-2 md:mb-2">
          Copyright Newdok. All rights reserved
        </div>
        <ul className="flex gap-x-2 xl:mt-2 md:mt-2">
          {policies.map(policy => (
          <li 
          key={policy.id}
          onClick={()=> policy.id !== 3 ? window.open(policy.url): router.push("/userPage/feedback")}
          >{policy.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
