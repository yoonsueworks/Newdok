import { useRouter } from "next/router";
import Nav from "shared/Nav";
import GNB from "shared/GNB";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="flex xs:w-full xs:flex-col sm:flex-col md:flex-row-reverse xl:flex-row-reverse justify-between h-screen overflow-scroll">
      {children}
      {(router.pathname.includes("home") ||
        router.pathname === "/userPage" ||
        router.pathname === "/browseAll" ||
        router.pathname === "/bookmark" ||
        router.pathname === "/manageSubscription" ||
        router.pathname.includes("brandHome") ||
        router.pathname.includes("articleRead") ||
        router.pathname.includes("search")) && <Nav />}
    </div>
  );
}
