import { useRouter } from "next/router";
import Nav from "shared/Nav";
import GNB from "shared/GNB";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="flex xs:w-full xs:flex-col  sm:flex-col md:flex-row-reverse justify-between h-screen overflow-scroll">
      {/* {(router.pathname.includes("home") ||
        router.pathname === "/browseAll") && <GNB />} */}
      {children}
      {(router.pathname.includes("home") ||
        router.pathname === "/userPage" ||
        router.pathname === "/browseAll") && <Nav />}
    </div>
  );
}
