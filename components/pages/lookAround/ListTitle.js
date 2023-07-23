import RefreshIcon from "icons/refresh_off.svg";


export default function ListTitle({ shuffle }) {
  return (
    <div className="flex justify-between items-center pt-14 pb-4">
      <h1 className="single-20-b">이런 뉴스레터는 어때요?</h1>
      <button className="flex gap-x-1 items-center" onClick={shuffle}>
        <span className="single-14-sb text-neutralgray-900">새로고침 </span>
        <RefreshIcon width="20" height="20" />
        {/* <div className="w-5 h-5">
          <div
            className="object-cover bg-cover bg-center w-5 h-5"
            style={{
              BackgroundImage: `url("/images/icons/Icons_reload.png")`,
            }}
          ></div>
        </div> */}
      </button>
    </div>
  );
}
