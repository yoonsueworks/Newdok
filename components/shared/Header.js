export default function Header({ clickedTab, changeTab, tabs, clickedId }) {
  const clickedCSS =
    "h-full w-2/4 flex justify-center items-center input-01 text-blue-600 border-b-2 border-blue-600";

  const unClickedCss =
    "h-full w-2/4 flex justify-center items-center body-s text-blue-200 border-b border-blue-100 hover:border-b-1 hover:border-blue-300 hover:text-blue-300";

  return (
    <>
      <div className="w-full h-fit z-1 cursor-pointer">
        <div className="w-full h-fit">
          <div className="top-0 bg-white">
            <div className="h-[64px] flex w-full">
              {tabs.map(({ id, name }) => {
                return (
                  <div
                    key={id}
                    id={id}
                    className={`${
                      clickedId === id ? clickedCSS : unClickedCss
                    } transition-all duration-300 hover:bg-blue-50 `}
                    onClick={(e) => changeTab(e.target.id)}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
