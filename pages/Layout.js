import { useRouter } from "next/router";
import Nav from "shared/Nav";
import GNB from "shared/GNB";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="flex xs:w-full xs:flex-col sm:flex-col md:flex-row-reverse xl:flex-row-reverse justify-between h-screen overflow-scroll bg-neutralgray-50 relative">
      <div className="xl:hidden md:hidden sm:h-14 xs:h-14 flex items-center">
        {/* xl, md의 GNB 관리, sm,xs은 Layout에서 관리 */}
        <GNB />
      </div>
      {children}
      {(router.pathname.includes("home") ||
        router.pathname.includes("/userPage") ||
        router.pathname === "/browseAll" ||
        router.pathname === "/bookmarks" ||
        router.pathname === "/manageSubscription" ||
        router.pathname.includes("brandHome") ||
        router.pathname.includes("articleRead") ||
        router.pathname.includes("search")) && <Nav />}
    </div>
  );
}
