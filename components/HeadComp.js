import Head from "next/head";

export default function HeadComp() {
  return (
    <Head>
      <title>Newdok :: 뉴스레터 큐레이션</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:image" content="/images/og-image.png" />
    </Head>
  );
}
