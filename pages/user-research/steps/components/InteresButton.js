export default function InterestButton({
  id,
  getUserInterests,
  name,
  setIsClicked,
  isClicked,
}) {
  const clickedCSS =
    isClicked?.includes(id) === true
      ? "text-white bg-purple-700 "
      : "text-warmgray-100 border-solid border-1 border-warmgray-20 bg-warmgray-10";
  return (
    <button
      key={id}
      value={id}
      name="interests"
      onClick={getUserInterests}
      className={`${clickedCSS} w-full border rounded-2xl py-5 header_1`}
    >
      {name}
    </button>
  );
}
