import { useRouter } from "next/router";
const UnAuthSearchResult = () => {
  const router = useRouter();
  const result = router.query.query;

  return (
    <>
      <div>You Searched For: {result}</div>;
    </>
  );
};

export default UnAuthSearchResult;
