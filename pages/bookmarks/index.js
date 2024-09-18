import { useState } from "react";
import TotalSort from "components/pages/bookmarks/TotalSort";

import UserInterestsButton from "components/pages/bookmarks/UserInterestsButton";
import SortModal from "components/pages/bookmarks/SortModal";
import Months from "components/pages/bookmarks/Months";
import Title from "components/pages/bookmarks/Title";

import {
  useGetBookmarkInterest,
  useGetBookmarkList,
} from "service/hooks/articles";

const Bookmarks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortMode, setSortMode] = useState({ id: 1, name: "추가순" });
  const [interest, setInterest] = useState(4);

  const bookmarkInterests = useGetBookmarkInterest();
  const { data, refetch, isLoading } = useGetBookmarkList(
    `interest=${interest}`
  );

  return (
    <div className="w-full h-full">
      <Title />
      <UserInterestsButton
        userInterests={bookmarkInterests}
        setInterest={setInterest}
        interest={interest}
      />
      <div className="px-7">
        {!isLoading && (
          <>
            <TotalSort
              totalAmount={data.totalAmount}
              setIsModalOpen={setIsModalOpen}
              sortMode={sortMode}
            />
            <Months bookmarks={data.bookmarkForMonth} />
          </>
        )}
      </div>
      <SortModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        sortMode={sortMode}
        setSortMode={setSortMode}
        sortModes={sortModes}
      />
    </div>
  );
};

export default Bookmarks;

const sortModes = [
  { id: 1, name: "추가순" },
  { id: 2, name: "최근 아티클 순" },
  { id: 3, name: "오래된 아티클 순" },
];
