export default function SelectButton(props) {
  const { id, getUserInterests, name, isClicked } = props;

  const clickedCSS =
    isClicked?.includes(id) === true
      ? "text-white bg-purple-700"
      : "text-purple-700 bg-white ";

  return (
    <div key={id} className="group">
      <button
        value={id}
        name="interests"
        onClick={getUserInterests}
        className={`${clickedCSS} w-full rounded-xl py-4 button_2 shadow-[inset_0_0px_0px_1px_#674188] 
      group-hover:bg-purple-50 group-hover:text-purple-700 group-active:bg-purple-100`}
      >
        {name}
      </button>
    </div>
  );
}