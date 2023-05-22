import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>splash</div>
      <div className="w-60 bg-purple-30">
        <div className="h-10 flex items-center justify-center">
          <Link href="/onboarding" className="text-white text-heading">
            시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}
