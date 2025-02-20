export default function SelectButton(props) {
  const { id, getUserInterests, name, isClicked } = props;

  const clickedCSS =
    isClicked?.includes(id) === true
      ? "text-blue-600 selectedchip-border hover:bg-blue-50 "
      : "text-neutralgray-900 input-border hover:bg-blue-50 ";

  return (
    <div key={id} className="group">
      <button
        value={id}
        name="interests"
        onClick={getUserInterests}
        className={`${clickedCSS} w-full rounded-xl p-[14px] input-01 transition-colors duration-300`}
      >
        {name}
      </button>
    </div>
  );
}
