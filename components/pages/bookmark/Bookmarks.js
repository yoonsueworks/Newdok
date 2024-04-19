import { useRouter } from "next/router";

const Bookmarks = ({ bookmarks }) => {
  const router = useRouter();
  return (
    <div>
      {bookmarks.map(({ id, month, bookmark }) => (
        <div key={id}>
          <div>{month}</div>
          <div>
            {bookmark.map(
              ({
                brandName,
                brandId,
                articleTitle,
                articleId,
                sampleText,
                date,
                imageURL,
              }) => (
                <div
                  className="py-4"
                  key={brandId}
                  onClick={() => router.push(`/articleRead/${articleId}`)}
                >
                  <div>{articleTitle}</div>
                  <div onClick={() => router.push(`/brandHome/${brandId}`)}>
                    {brandName}
                  </div>
                  <div>{sampleText}</div>
                  <div>{date}</div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
