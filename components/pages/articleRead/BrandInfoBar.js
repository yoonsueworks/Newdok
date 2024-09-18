import { useState } from "react";

import LogoIcon from "icons/ver3.0/ver3.0_logo.svg";
import BookmarkOff from "icons/ver3.0/Line Bookmark.svg";
import BookmarkOn from "icons/ver3.0/Fill Bookmark.svg";

import { usePostBookmark } from "service/hooks/articles";

const BrandInfoBar = ({ articleInfo }) => {
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(
    articleInfo.isBookmarked
  );
  const { mutate: mutationFn } = usePostBookmark(
    JSON.stringify({
      articleId: articleInfo.articleid,
    })
  );

  const clickBookmarkButton = (id) => {
    mutationFn();
    setIsBookmarkClicked(!isBookmarkClicked);
  };

  return (
    <div className="bg-white flex justify-between px-5 py-3 items-center z-10">
      <div className="w-7.5 h-7.5 flex justify-center items-center bg-white shrink-0 cursor-pointer md:hidden xl:hidden">
        <LogoIcon width="16" height="16" />
      </div>
      <div className="title-s text-neutralgray-800">
        {articleInfo.brandName}
      </div>
      <div className="w-7.5 h-7.5 flex justify-center items-center p-1.5">
        <div className="w-6 h-6 cursor-pointer">
          {isBookmarkClicked ? (
            <BookmarkOn
              width="20"
              height="20"
              onClick={() => clickBookmarkButton(articleInfo.articleid)}
            />
          ) : (
            <BookmarkOff
              width="20"
              height="20"
              onClick={() => clickBookmarkButton(articleInfo.articleid)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandInfoBar;
