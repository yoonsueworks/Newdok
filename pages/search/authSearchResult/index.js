import { useRouter } from "next/router";

const AuthSearchResult = () => {
  const router = useRouter();
  const query = router.query.query;

  const newsletters = [];
  // const newsletters = [1, 2, 3];
  const articles = [];
  // const articles = [1, 2, 3];

  return (
    <div>
      <div>You Searched For: {query}</div>
      <div>
        newsletters
        <div>
          {newsletters.length > 0 ? (
            newsletters.map((el) => <div key={el}>{el}</div>)
          ) : (
            <NoNewsletter />
          )}
        </div>
      </div>
      <div>
        articles
        <div>
          {articles.length > 0 ? (
            articles.map((el) => <div key={el}>{el}</div>)
          ) : (
            <NoArticle />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSearchResult;

//  뉴스레터 결과
//  아티클 결과

const NoNewsletter = () => {
  return (
    <div>
      <div>검색 결과가 없어요</div>
      <div>찾는 뉴스레터가 없다면 등록을 요청해보세요</div>
      <button
        onClick={() =>
          window.open("https://7xrdp4cp24a.typeform.com/to/Lkh7C9zd")
        }
      >
        뉴스레터 등록 요청하기
      </button>
    </div>
  );
};

const NoArticle = () => {
  return (
    <div>
      <div>검색 결과가 없어요</div>
    </div>
  );
};
