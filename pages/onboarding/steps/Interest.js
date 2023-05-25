import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../_app";
import InterestButton from "./components/InteresButton";

export default function Interest() {
  const value = useContext(GlobalContext);
  const { interests, setIsActivated, handleProgressWithOption } = value;
  const [userInterests, setUserInterests] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const interestsArr = userInterests.length;

  const getUserInterests = (e) => {
    const clickedId = Number.parseInt(e.target.value);

    if (interestsArr === 3 && !userInterests.includes(clickedId)) return;

    userInterests.includes(clickedId)
      ? filterUserInterests(clickedId)
      : setUserInterests([...userInterests, clickedId]);
  };

  const filterUserInterests = (clickedId) => {
    setUserInterests((userInterests) =>
      userInterests.filter((c) => c !== clickedId)
    );
  };

  const activateButton = () => {
    setIsActivated(userInterests.length > 0 ? true : false);
    interestsArr === 0
      ? handleProgressWithOption(3)
      : handleProgressWithOption(4);
  };

  const resetUserInterests = () => {
    setUserInterests([]);
  };

  value.resetUserInterests = resetUserInterests;

  useEffect(() => {
    activateButton();
  }, [userInterests]);

  return (
    <>
      <div className="w-full h-420 grid grid-cols-2 gap-2 overflow-auto">
        {interests.map(({ id, name }) => {
          return (
            <InterestButton
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
