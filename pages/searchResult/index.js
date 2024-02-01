import { useRouter } from "next/router";

const SearchResult = () => {
  const router = useRouter();
  const result = router.query.query;

  return (
    <>
      <div>You Searched For: {result}</div>;
    </>
  );
};

export default SearchResult;

// 회원 / 비회원 분기
// 회원 1 : 뉴스레터 결과
// 회원 2 : 아티클 결과
