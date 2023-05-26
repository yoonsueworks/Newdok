import Head from "next/head";

export default function HeadComp() {
  return (
    <Head>
      <title>NewdoK | (캐치프레이즈 문구 TBU)</title>
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
