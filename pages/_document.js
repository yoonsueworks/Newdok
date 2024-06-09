import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="preconnect"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard-gov-dynamic-subset.css"
      />
      <meta
        charset="utf-8"
        name="description"
        content="맞춤형 뉴스레터 추천 서비스 뉴독"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
