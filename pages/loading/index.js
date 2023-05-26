import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    // Route to the first component
    router.push("/loadingSplash");

    const timeout = setTimeout(() => {
      router.push("/main");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
