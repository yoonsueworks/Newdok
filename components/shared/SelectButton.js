export default function SelectButton(props) {
  const { id, getUserInterests, name, isClicked } = props;

  const clickedCSS =
    isClicked?.includes(id) === true
      ? "text-white bg-blue-600 selectedchip-border hover:bg-purple-300 "
      : "text-neutralgray-900 bg-white input-border hover:bg-purple-50 ";

  return (
    <div key={id} className="group">
      <button
        value={id}
        name="interests"
        onClick={getUserInterests}
        className={`${clickedCSS} w-full rounded-xl py-4 single-16-m transition-colors duration-120`}
      >
        {name}
      </button>
    </div>
  );
}
