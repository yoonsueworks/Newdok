import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  return (
    <nav>
      <Link href="/about">about </Link>
      <Link href="/about">description </Link>
      <Link href="/about">example </Link>
    </nav>
  );
}
