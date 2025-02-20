import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "pages/_app";
import SelectButton from "shared/SelectButton";
import { interests } from "constants/interests";

export default function Interest() {
  const value = useContext(GlobalContext);
  const { setIsActivated, handleProgressWithOption, setUserInfos, userInfos } =
    value;
  const [userInterests, setUserInterests] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const interestsArr = userInterests.length;
  const scrollContainerRef = useRef(null);
  const gradientRef = useRef(null);

  const filterUserInterests = (clickedId) => {
    setUserInterests(userInterests.filter((c) => c !== clickedId));
  };

  const getUserInterests = (e) => {
    const clickedId = Number.parseInt(e.target.value);
    if (userInterests.includes(clickedId)) filterUserInterests(clickedId);
    if (!userInterests.includes(clickedId))
      setUserInterests([...userInterests, clickedId]);
  };

  const activateButton = () => {
    setIsActivated(userInterests.length >= 3);
  };

  const resetUserInterests = () => {
    setUserInterests([]);
  };

  value.resetUserInterests = resetUserInterests;

  useEffect(() => {
    activateButton();
    setUserInfos({ ...userInfos, interests: userInterests });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInterests]);

  return (
    <>
      <div
        id="onboardInterestsBox"
        className="w-full grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-3 overflow-auto"
        ref={scrollContainerRef}
      >
        {interests.map(({ id, name }) => {
          return (
            <SelectButton
              key={id}
              id={id}
              name={name}
              isClicked={userInterests}
              setIsClicked={setIsClicked}
              getUserInterests={getUserInterests}
            />
          );
        })}
      </div>
    </>
  );
}
