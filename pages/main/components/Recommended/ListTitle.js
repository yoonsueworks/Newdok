export default function ListTitle({ shuffle }) {
  return (
    <div className="flex justify-between items-center px-5">
      <h1 className="headline">이런 뉴스레터는 어때요?</h1>
      <button className="flex gap-x-1" onClick={shuffle}>
        <span className="reload text-purple-30  shrink-0">새로고침 </span>
        <div className="w-5 h-5">
          <div
            className="object-cover bg-cover bg-center w-5 h-5"
            style={{
              backgroundImage: `url("/images/icons/Icons_reload.png")`,
            }}
          ></div>
        </div>
      </button>
    </div>
  );
}
