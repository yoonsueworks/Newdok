import Bookmark from "./Bookmark";

const Months = ({ bookmarks }) => {
  return (
    <div className="grid gap-y-6 overflow-scroll">
      {bookmarks?.map(({ month, bookmark }, id) => (
        <div key={id}>
          <div className="headline-s text-neutralgray-800 ml-1 mb-3">
            {month}
          </div>
          <div className="grid gap-y-2">
            {bookmark.map(
              ({
                brandName,
                brandId,
                articleTitle,
                articleId,
                sampleText,
                date,
                imageURL,
              }) => {
                const formatedData = date.split("T")[0];
                return (
                  <Bookmark
                    key={articleId}
                    brandId={brandId}
                    brandName={brandName}
                    articleId={articleId}
                    articleTitle={articleTitle}
                    sampleText={sampleText}
                    date={formatedData}
                    imageURL={imageURL}
                  />
                );
              }
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Months;
