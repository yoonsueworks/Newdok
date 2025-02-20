import Head from "next/head";

export default function HeadComp() {
  const title = "Newdok :: 뉴스레터 큐레이션";
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:image" content="/images/og-image.png" />
      <meta property="og:title" name="title" content={title} />
    </Head>
  );
}
