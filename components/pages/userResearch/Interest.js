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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const gradientElement = gradientRef.current;

    const handleScroll = () => {
      const isAtBottom =
        scrollContainer.scrollHeight - scrollContainer.scrollTop ===
        scrollContainer.clientHeight;

      if (isAtBottom) {
        gradientElement.style.display = "none";
      } else {
        gradientElement.style.display = "block";
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed absolute w-full h-12 bottom-[-1px] bg-gradient-to-b from-white to-transparent transform rotate-180"
        ref={gradientRef}
      ></div>
      <div
        id="onboardInterestsBox"
        className="w-full grid grid-cols-2 gap-4 overflow-auto"
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
