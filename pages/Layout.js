import { useEffect } from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {}, [pathname]);

  return (
    <>
      {pathname === "main" && <Nav />}
      {children}
    </>
  );
}
